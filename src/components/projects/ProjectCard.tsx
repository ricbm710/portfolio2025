//interface
import type { Project } from "../../project_data/data";
//hooks
import { useState } from "react";
//lucide icons
import { ExternalLink } from "lucide-react";

type ProjectProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectProps) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="p-1 border rounded-lg bg-white shadow-md transition-all duration-200">
      <h4 className="text-[16px] font-medium">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-600 flex items-center gap-1"
        >
          {project.title}
          <ExternalLink className="w-4 h-4" />
        </a>
      </h4>
      <h5 className="text-sm text-gray-800">{project.description}</h5>
      {!expanded && (
        <button
          className="text-blue-500 hover:underline text-sm"
          onClick={() => setExpanded(true)}
        >
          See More
        </button>
      )}
      {expanded && (
        <div className="mt-1 p-2">
          <h4 className="text-sm font-medium mb-1">Tools:</h4>
          {Object.entries(project.tech).map(([category, techList], id) => (
            <div key={id}>
              <span className="text-sm font-medium text-gray-800">
                {category}:
              </span>{" "}
              <span className="text-sm text-gray-800">
                {techList.join(", ")}
              </span>
            </div>
          ))}
        </div>
      )}
      {expanded && (
        <button
          className="text-blue-500 hover:underline text-sm"
          onClick={() => setExpanded(false)}
        >
          See Less
        </button>
      )}
    </div>
  );
};

export default ProjectCard;
