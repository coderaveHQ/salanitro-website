import type { Handler } from "@netlify/functions";

const {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY,
  EMAILJS_PRIVATE_KEY,
  EMAILJS_ORIGIN,
} = process.env;

const EMAILJS_ENDPOINT = "https://api.emailjs.com/api/v1.0/email/send";

export const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  if (
    !EMAILJS_SERVICE_ID ||
    !EMAILJS_TEMPLATE_ID ||
    !EMAILJS_PUBLIC_KEY ||
    !EMAILJS_PRIVATE_KEY
  ) {
    console.error("EmailJS environment variables are not fully configured.");
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Server configuration error" }),
    };
  }

  try {
    const payload = JSON.parse(event.body ?? "{}");
    const origin =
      event.headers.origin ||
      EMAILJS_ORIGIN ||
      "https://salanitro.de";

    const response = await fetch(EMAILJS_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        origin,
      },
      body: JSON.stringify({
        service_id: EMAILJS_SERVICE_ID,
        template_id: EMAILJS_TEMPLATE_ID,
        user_id: EMAILJS_PUBLIC_KEY,
        accessToken: EMAILJS_PRIVATE_KEY,
        template_params: {
          name: payload.name,
          email: payload.email,
          phone: payload.phone,
          message: payload.message,
        },
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("EmailJS error:", errorText);
      return {
        statusCode: 502,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ error: errorText || "Failed to send email" }),
      };
    }

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ok: true }),
    };
  } catch (error) {
    console.error("Unexpected error while sending email:", error);
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Unexpected server error" }),
    };
  }
};
