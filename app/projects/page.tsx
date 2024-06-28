import React from "react";
import ProjectsIntro from "@/components/Projects";

const title = "Projects";

const text =
  "I specialize in web and app development with a design-driven approach, using technologies like Next.js, React.js, and TypeScript for dynamic and responsive applications. My expertise includes backend solutions with MongoDB and GraphQL, and content management systems such as Contentful and WordPress, including WooCommerce for e-commerce. This ensures visually appealing and highly functional digital experiences.";

export default function Projects() {
  return <ProjectsIntro title={title} text={text} />;
}
