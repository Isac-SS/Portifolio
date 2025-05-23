"use client";

import { useEffect, useState } from "react";
import Filter from "@/components/Filter";
import ProjectCard from "@/components/ProjectCard";

export default function Projetos() {
  const [projects, setProjects] = useState([]);
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getProjects() {
      try {
        setLoading(true);
        const response = await fetch("/api/projects");
        if (!response.ok) throw new Error("Falha na requisição");
        const data = await response.json();
        setProjects(Array.isArray(data) ? data : []);

        console.log("Projetos carregados:", data);
      } catch (err) {
        console.error("Erro ao buscar projetos:", err);
        setError("Falha ao carregar projetos");
        setProjects([]);
      } finally {
        setLoading(false);
      }
    }
    getProjects();
  }, []);

  const filteredProjects =
    projects && Array.isArray(projects)
      ? activeCategory === "Todos"
        ? projects
        : projects.filter((p) => p?.category === activeCategory)
      : [];

  return (
    <div
      className="min-h-screen bg-gray-950 text-white py-16 px-4 sm:px-6 lg:px-8"
      id="projetos"
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">MEUS PROJETOS</h1>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Confira alguns dos meus projetos.
        </p>

        <Filter
          categories={["Todos", "Web", "Mobile", "Api"]}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="rounded-xl bg-gray-900 border border-gray-800 h-96 animate-pulse"
              ></div>
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-10 text-red-500">{error}</div>
        ) : filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id || Math.random()}
                project={project}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            Nenhum projeto encontrado. Verifique sua conexão com o Hygraph.
          </div>
        )}
      </div>
    </div>
  );
}
