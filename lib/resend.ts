"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface FormData {
  fullName: string;
  email: string;
  message: string;
}

export const sendEmail = async (formData: FormData) => {
  const { fullName, email, message } = formData;

  await resend.emails.send({
    to: "slobodan.bajic9@gmail.com",
    from: "Slobodan Dev <onboarding@resend.dev>",
    subject: `New Contact Form Message from ${fullName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #333;">New Message from Contact Form</h2>
        <div style="margin: 20px 0; padding: 15px; background-color: #f5f5f5; border-radius: 5px;">
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p style="margin-top: 15px;"><strong>Message:</strong></p>
          <p style="padding: 10px; background-color: white; border-left: 4px solid #0066cc;">${message}</p>
        </div>
        <hr style="border: 1px solid #eee; margin: 20px 0;">
        <div style="color: #666; font-size: 12px;">
          <p>This message was sent from your website's contact form.</p>
        </div>
      </div>
    `,
  });
};
