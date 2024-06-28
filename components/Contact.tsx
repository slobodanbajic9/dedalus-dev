import Form from "./Form";

interface ContactProps {
  title: string;
  text: string;
}

const ContactSection: React.FC<ContactProps> = ({ title, text }) => {
  return (
    <section className="flex flex-col items-start mt-16 gap-4 text-left">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="mt-4 text-md">{text}</p>
      <h2 className="text-lg mb-4 dark:text-grey mt-10">Fill out the form</h2>
      <Form />
    </section>
  );
};

export default ContactSection;
