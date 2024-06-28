import ContactSection from "@/components/Contact";
import React from "react";

export default function Contact() {
  const text =
    "If you have any questions, feedback, or need assistance, please don't hesitate to reach out. I'm here to help and look forward to hearing from you. You can contact me via the form below. I will get back to you as soon as possible!";

  return (
    <>
      <ContactSection title="Contact" text={text} />
    </>
  );
}
