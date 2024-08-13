import React from "react";
import { Metadata } from "next";
import AboutSection from "@/components/About";
import image from "@/public/about/prof.jpg";

export const metadata: Metadata = {
  title: "About | Slobodan Bajic",
  description:
    "Specialize in Next.js, React.js, web development, UI/UX, and consulting.",
};

export default function About() {
  const title = "About";

  return (
    <>
      <AboutSection title={title} image={image} />
    </>
  );
}
