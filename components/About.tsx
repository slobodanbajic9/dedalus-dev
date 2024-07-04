"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { workExperience } from "@/data";
import { motion } from "framer-motion";

interface AboutProps {
  title: string;
  image: StaticImageData;
}

export default function AboutSection({ title, image }: AboutProps) {
  return (
    <section className="flex flex-col items-start mt-16 gap-4 text-left">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-3xl font-bold">
        {title}
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex space-x-4 mt-4 mx-auto sm:mx-0">
        <Image
          src={image}
          alt="coding"
          width={300}
          height={300}
          className="w-full h-full object-cover rounded-lg"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="dark:text-white font-sans mx-auto lg:flex gap-20 mt-10">
        <h1 className="text-lg mb-4 dark:text-grey">About</h1>
        <div>
          <p className="mb-4">
            Hi, I&apos;m Slobodan, born in Novi Sad, Serbia, and currently
            settled in Malmö, Sweden. I have been coding for 5 years. As a
            software developer, I specialize in full-stack web development and
            consulting.
          </p>
          <p>
            When I&apos;m not at my desk, I am probably lifting weights, playing
            football, riding my bike, or at a local coffee shop. :)
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-10 lg:flex gap-16">
        <h2 className="text-lg dark:text-grey mb-4">Connect</h2>
        <div className="flex flex-wrap gap-6">
          <Link
            href="mailto:slobodan.bajic9@gmail.com"
            className="flex items-center gap-2 dark:text-white border p-2 rounded-lg">
            <FaEnvelope />
            Email
          </Link>
          <Link
            href="https://github.com/slobodanbajic9"
            target="_blank"
            className="flex items-center gap-2 dark:text-white border p-2 rounded-lg">
            <FaGithub />
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/slobodanbajicdev/"
            target="_blank"
            className="flex items-center gap-2 dark:text-white border p-2 rounded-lg">
            <FaLinkedin />
            LinkedIn
          </Link>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="dark:text-white font-sans mx-auto lg:flex gap-20 mt-10">
        <h2 className="text-lg mb-4 dark:text-grey">Work</h2>
        <div className="flex flex-col">
          <p className="dark:text-white mb-8">
            I specialize in Next.js, React.js, web development, UI/UX, and
            consulting. But I am always learning new things. Here are some of
            the places I have worked.
          </p>
          <div className="mt-4 space-y-4">
            {workExperience.map((work) => (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex items-center flex-row gap-4">
                <Image
                  src={work.image}
                  alt={work.company}
                  width={100}
                  height={100}
                  className="w-10 h-10"
                />
                <div>
                  <h3 className="text-lg dark:text-white">{work.title}</h3>
                  <p className="dark:text-grey text-sm">{work.company}</p>
                </div>
                <span className="ml-auto dark:text-grey">{work.duration}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
