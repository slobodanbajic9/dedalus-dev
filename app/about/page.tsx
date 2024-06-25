import React from "react";
import AboutSection from "@/components/About";
import image from "@/public/about/coding.jpg";

export default function About() {
  const title = "About";

  return (
    <>
      <AboutSection title={title} image={image} />
    </>
  );
}
