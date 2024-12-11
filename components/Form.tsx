"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import { sendEmail } from "@/lib/resend";
import { motion } from "framer-motion";
import ThankYou from "@/components/ThankYou";
import Loader from "@/components/Loader";

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
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    submitted: boolean;
    success: boolean;
  }>({ submitted: false, success: false });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await sendEmail(formData);
      setSubmitStatus({ submitted: true, success: true });
      setFormData({
        fullName: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus({ submitted: true, success: false });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
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
          disabled={isLoading}
          className="bg-grey-dark py-3 text-white rounded-lg dark:bg-grey-dark dark:text-white w-[150px] disabled:opacity-50">
          {isLoading ? <Loader /> : "Send message"}
        </button>
      </motion.form>

      {submitStatus.submitted && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          <ThankYou success={submitStatus.success} />
        </motion.div>
      )}
    </>
  );
};

export default Form;
