"use client";

const Form = () => {
  const send = () => {
    console.log("Form submission");
  };

  return (
    <form action={send} className="flex flex-col gap-8 justify-between w-full">
      <input
        type="text"
        name="Full name"
        placeholder="Full name"
        className="p-4 rounded-lg text-black dark:bg-white"
        required
      />
      <input
        type="email"
        name="Email"
        placeholder="Email"
        className="p-4 rounded-lg text-black dark:bg-white"
        required
      />
      <textarea
        name="Message"
        placeholder="Your message"
        id=""
        className="p-4 rounded-lg text-black dark:bg-white"
        required></textarea>
      <button
        type="submit"
        className="bg-grey-dark py-3 text-white rounded-lg dark:bg-grey-dark dark:text-white w-[150px]">
        Send message
      </button>
    </form>
  );
};

export default Form;
