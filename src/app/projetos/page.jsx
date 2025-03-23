"use client";

import { useEffect, useState } from "react";
import { fetchProjects } from "@/lib/hygraph";
import Filter from "@/components/Filter";
import ProjectCard from "@/components/ProjectCard";

export default function Projetos() {
  const [projects, setProjects] = useState([]);
  const [activeCategory, setActiveCategory] = useState("Todos");

  useEffect(() => {
    async function getProjects() {
      const data = await fetchProjects();
      console.log(data);
      setProjects(data);
    }
    getProjects();
  }, []);

  const filteredProjects =
    activeCategory === "Todos"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-gray-900 min-h-screen text-white p-10">
      <h1 className="text-3xl font-bold text-center mb-6">Meu Portfólio</h1>

      <Filter
        categories={["Todos", "Sistemas Web", "Aplicativos"]}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}