//project data
import ProjectCard from "../components/projects/projectCard";
import { projects } from "../project_data/data";

const Home = () => {
  return (
    <>
      <div className="bg-light-bg p-2">
        <h3 className="text-lg font-medium">About</h3>
        <p className="text-justify text-sm">
          I’m a Full Stack Developer who builds web applications with React,
          Express, and SQL databases. I enjoy creating projects from the ground
          up. My focus is on writing clear and maintainable code. I can speak
          both Spanish and English.
        </p>
      </div>
      <div className=" bg-light-bg p-2">
        <h3 className="text-lg font-medium">Projects</h3>
        <div className="flex flex-col gap-3">
          {projects.map((project, id) => (
            <ProjectCard key={id} project={project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
