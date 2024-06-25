import Intro from "@/components/Intro";
import TechStack from "@/components/TechStack";

export default function Home() {
  const title = "Hey, Slobodan here!";

  const text = `I am a full stack web developer who builds for the web with a
        design-oriented approach. In addition to coding, I use my free time to
        practice football, go to the gym and hang out with friends.`;

  const links = [
    { text: "GitHub", href: "https://github.com/slobodanbajic9" },
    { text: "Linkedin", href: "https://www.linkedin.com/in/slobodanbajicdev/" },
    { text: "Facebook", href: "https://www.facebook.com/slobodan.bajic.716/" },
  ];

  return (
    <>
      <Intro title={title} text={text} links={links} />
      <TechStack />
    </>
  );
}
