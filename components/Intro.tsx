import Image from "next/image";
import avatar from "@/public/slobodan.jpg";

export default function Intro() {
  return (
    <section className="flex flex-col items-start mt-16 gap-4 text-left">
      <Image
        src={avatar}
        alt="avatar"
        width={100}
        height={100}
        className="rounded-full"
      />
      <h1 className="text-4xl font-bold">hey, Slobodan here!</h1>
      <p className="mt-4 text-lg">
        I am a full stack web developer who builds for the web with a
        design-oriented approach. In addition to coding, I use my free time to{" "}
        practice football, go to the gym and hang out with friends.
      </p>
      <div className="flex space-x-4 mt-6">
        <a
          href="https://github.com/slobodanbajic9"
          target="_blank"
          className="underline underline-offset-4 border-white">
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/slobodanbajicdev/"
          target="_blank"
          className="underline underline-offset-4 border-white">
          Linkedin
        </a>
        <a
          href="https://www.facebook.com/slobodan.bajic.716/"
          target="_blank"
          className="underline underline-offset-4 border-white">
          Facebook
        </a>
      </div>
    </section>
  );
}
