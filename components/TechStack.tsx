"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import { techStack } from "@/data";

export default function TechStack() {
  return (
    <section className="dark:bg-black rounded-lg mt-10">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="dark:text-white text-lg mb-6">
        What I do
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {techStack.map((tech) => (
          <div
            key={tech.id}
            className="bg-gray-800 p-6 rounded-lg text-center flex flex-col items-center gap-4 border dark:border-white">
            <Image src={tech.image} alt={tech.title} width={50} height={50} />
            <h3 className="dark:text-white text-lg">{tech.title}</h3>
            <p className="text-gray-400 text-sm">{tech.description}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
