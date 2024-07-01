import Image from "next/image";
import Link from "next/link";
import avatar from "@/public/prof.png";

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
      <Image
        src={avatar}
        alt="avatar"
        width={150}
        height={150}
        className="rounded-full"
      />
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="mt-4 text-md">{text}</p>
      <div className="flex space-x-4 mt-6">
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
      </div>
    </section>
  );
};

export default Intro;
