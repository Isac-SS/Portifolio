import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";

const ProjectCard = ({ project }) => {
  if (!project) {
    return null;
  }

  const technologies = project.technologies || [];

  return (
    <div className="group relative overflow-hidden rounded-xl bg-gray-900 border border-gray-800 hover:border-gray-700 transition-all duration-30">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={project.image.url || "/placeholder.svg"}
          alt={project.title || "Projeto"}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
      </div>

      <div className="p-4">
        <div className="mb-2 flex items-center">
          <span className="inline-block rounded-full bg-gray-800 px-2.5 py-1 text-xs font-medium text-gray-300">
            {project.category || "Projeto"}
          </span>
        </div>

        <h3 className="mb-2 text-xl font-bold text-white group-hover:text-gray-300 transition-colors">
          {project.title}
        </h3>

        <p className="mb-4 text-sm text-gray-400 line-clamp-2">
          {project.description || "Descrição do projeto não disponível."}
        </p>

        {technologies.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="rounded bg-gray-800 px-2 py-1 text-xs font-medium text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="mt-4 flex items-center gap-3">
          <a
            href={project.liveUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-white hover:text-gray-300 transition-colors"
          >
            Ver projeto <ArrowUpRight className="h-4 w-4" />
          </a>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-white hover:text-gray-300 transition-colors"
            >
              GitHub <Github className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
