const ProjectCard = ({ project }) => {
  if (!project) {
    return console.log("Projeto não encontrado");
  }

  return (
    <div className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-md p-4">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-40 object-cover rounded"
      />
      <h3 className="text-xl font-semibold mt-2">{project.title}</h3>
      <p className="text-gray-400">{project.Category}</p>
    </div>
  );
};

export default ProjectCard;
