"use client";
import Form from "./Form";

import { motion } from "framer-motion";

interface ContactProps {
  title: string;
  text: string;
}

const ContactSection: React.FC<ContactProps> = ({ title, text }) => {
  return (
    <section className="flex flex-col items-start mt-16 gap-4 text-left">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-3xl font-bold">
        {title}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-4 text-md">
        {text}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-lg mb-4 dark:text-grey mt-10">
        Fill out the form
      </motion.h2>
      <Form />
    </section>
  );
};

export default ContactSection;
