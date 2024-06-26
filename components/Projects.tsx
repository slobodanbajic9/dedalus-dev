import { projects } from "@/data";
import Image from "next/image";

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
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <a href={project.link} key={index} target="_blank">
            <div className="rounded-lg mt-4 mb-4">
              <div className="mb-4 flex items-center justify-center gap-8">
                <Image
                  width="300"
                  height="300"
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg cover"
                />
              </div>
              <h3 className="text-md">{project.title}</h3>
              <p className="dark:text-grey text-sm">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ProjectsIntro;
