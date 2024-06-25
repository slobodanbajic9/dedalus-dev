import Image, { StaticImageData } from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

interface AboutProps {
  title: string;
  image: StaticImageData;
}

const AboutSection: React.FC<AboutProps> = ({ title, image }) => {
  return (
    <section className="flex flex-col items-start mt-16 gap-4 text-left">
      <h1 className="text-3xl font-bold">{title}</h1>
      <div className="flex space-x-4 mt-4">
        <Image
          src={image}
          alt="coding"
          width={300}
          height={300}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="dark:text-white font-sans mx-auto lg:flex gap-20 mt-10">
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
      </div>
      <div className="mt-10 lg:flex gap-16">
        <h2 className="text-lg dark:text-grey mb-4">Connect</h2>
        <div className="flex flex-wrap gap-6">
          <a
            href="mailto:slobodan.bajic9@gmail.com"
            className="flex items-center gap-2 dark:text-white border p-2 rounded-lg">
            <FaEnvelope />
            Email
          </a>
          <a
            href="https://github.com/slobodanbajic9"
            target="_blank"
            className="flex items-center gap-2 dark:text-white border p-2 rounded-lg">
            <FaGithub />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/slobodanbajicdev/"
            target="_blank"
            className="flex items-center gap-2 dark:text-white border p-2 rounded-lg">
            <FaLinkedin />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
