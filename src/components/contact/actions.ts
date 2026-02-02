"use server";

import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export async function sendContactEmail(data: unknown) {
  const parsed = contactSchema.safeParse(data);

  if (!parsed.success) {
    return {
      success: false,
      error: "INVALID_DATA",
    };
  }

  if (!process.env.CONTACT_EMAIL) {
    console.error("CONTACT_EMAIL is not defined");
    return {
      success: false,
      error: "SERVER_CONFIG_ERROR",
    };
  }

  const { name, email, message } = parsed.data;

  await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to: process.env.CONTACT_EMAIL,
    subject: `Novo contato — ${name}`,
    replyTo: email,
    html: `
      <strong>Nome:</strong> ${name}<br />
      <strong>Email:</strong> ${email}<br /><br />
      <strong>Mensagem:</strong><br />
      ${message}
    `,
  });

  return { success: true };
}
