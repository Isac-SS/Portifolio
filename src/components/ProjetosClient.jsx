import ProjetosClient from "@/components/ProjetosClient";

export const revalidate = 60;

async function getProjects() {
  const res = await fetch("/api/projects", {
    next: { revalidate: 60 },
  });

  if (!res.ok) throw new Error("Erro ao buscar projetos");

  return res.json();
}

export default async function Projetos() {
  const projects = await getProjects();

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

        <ProjetosClient initialProjects={projects} />
      </div>
    </div>
  );
}
