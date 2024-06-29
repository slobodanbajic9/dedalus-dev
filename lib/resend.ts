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
    subject: `Message from ${fullName}`,
    html: `<div className="p-4">
      <h1 className="text-2xl font-bold">Hello, ${fullName}!</h1>
      <p className="mt-2">Thank you for contacting me.</p>
      <h3 className="mt-4 text-xl font-semibold">
        Here is the message I received from you:
      </h3>
      <blockquote className="mt-2 italic border-l-4 border-blue-500 pl-4">
        ${message}
      </blockquote>
      <p className="mt-4">
        I will get back to you soon at your email: ${email}.
      </p>
      <p className="mt-4 font-bold mb-4">Kind regards,</p>
      <div className="flex gap-8">
        <a href="http://localhost:3000">
          <Image src={logo} alt="Logo" width={80} height={80} />
        </a>

        <div className="flex flex-col justify-between items-start gap-4">
          <a
            href="tel:+46760727096"
            className="flex items-center gap-4 flex-col">
            <div className="flex gap-4">
              <FaMobileAlt /> <span>+46760727096</span>
            </div>
          </a>
          <a
            href="mailto:slobodan.bajic9@gmail.com"
            className="flex items-center gap-4 flex-col">
            <div className="flex gap-4">
              <FaEnvelope /> <span>slobodan.bajic9@gmail.com</span>
            </div>
          </a>
          <a href="#" className="flex items-center gap-4 flex-col">
            <div className="flex gap-4">
              <FaLocationArrow /> <span>Malmö, Sweden</span>
            </div>
          </a>
        </div>
      </div>
    </div>`,
  });
};
