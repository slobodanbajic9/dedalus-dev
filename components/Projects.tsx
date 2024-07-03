import { projects } from "@/data";
import Image from "next/image";
import Link from "next/link";

interface ProjectsProps {
  title: string;
  text: string;
}

const ProjectsIntro: React.FC<ProjectsProps> = ({ title, text }) => {
  return (
    <section className="flex flex-col items-start mt-16 gap-4 text-left">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="mt-4 text-md">{text}</p>
      <h2 className="text-lg mb-4 dark:text-grey mt-10">Pinned Projects</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 mx-auto sm:mx-0">
        {projects.map((project, index) => (
          <Link href={project.link} key={index} target="_blank">
            <div className="rounded-lg mt-4 mb-4 max-w-full">
              <div className="mb-4 flex items-center justify-center gap-8">
                <Image
                  width="300"
                  height="300"
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg cover opacity-80 hover:opacity-100"
                />
              </div>
              <div className="mt-5 mx-auto">
                <h3 className="text-md lg:m-0 sm:m-10 mb-2">{project.title}</h3>
                <p className="dark:text-grey text-sm">{project.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <h2 className="text-lg mb-4 dark:text-grey">More projects soon...</h2>
    </section>
  );
};

export default ProjectsIntro;
