"use client";
import Image from "next/image";
import Link from "next/link";
import avatar from "@/public/prof.png";
import { motion } from "framer-motion";

interface Link {
  href: string;
  text: string;
}

interface IntroProps {
  title: string;
  text: string;
  links?: Link[];
}

const Intro: React.FC<IntroProps> = ({ title, text, links }) => {
  return (
    <section className="flex flex-col items-start mt-16 gap-4 text-left">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        <Image
          src={avatar}
          alt="avatar"
          width={150}
          height={150}
          className="rounded-full"
        />
      </motion.div>
      <motion.h1
        className="text-3xl font-bold"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}>
        {title}
      </motion.h1>
      <motion.p
        className="mt-4 text-md"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}>
        {text}
      </motion.p>
      <motion.div
        className="flex space-x-4 mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}>
        {links?.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 border-white">
            {link.text}
          </Link>
        ))}
      </motion.div>
    </section>
  );
};

export default Intro;
