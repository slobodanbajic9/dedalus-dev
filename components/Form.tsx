"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import { sendEmail } from "@/lib/resend";
import { motion } from "framer-motion";

interface FormData {
  fullName: string;
  email: string;
  message: string;
}

const Form = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await sendEmail(formData);

    setFormData({
      fullName: "",
      email: "",
      message: "",
    });
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="flex flex-col gap-8 justify-between w-full">
      <input
        type="text"
        id="fullName"
        name="fullName"
        placeholder="Full name"
        className="p-4 rounded-lg text-black dark:bg-white"
        value={formData.fullName}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        className="p-4 rounded-lg text-black dark:bg-white"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        id="message"
        placeholder="Your message"
        value={formData.message}
        onChange={handleChange}
        className="p-4 rounded-lg text-black dark:bg-white"
        required></textarea>
      <button
        type="submit"
        className="bg-grey-dark py-3 text-white rounded-lg dark:bg-grey-dark dark:text-white w-[150px]">
        Send message
      </button>
    </motion.form>
  );
};

export default Form;
