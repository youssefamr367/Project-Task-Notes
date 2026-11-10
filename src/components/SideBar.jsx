import AddProjectButton from "./AddProjectButton";

export default function Sidebar({
  onStartAddProject,
  projects,
  onSelectedProject,
}) {
  return (
    <aside className="w-72 shrink-0 rounded-l-2xl border-r border-stone-700 bg-stone-950/80 px-6 py-8 text-stone-50">
      <h2 className="mb-8 text-sm font-bold uppercase tracking-[0.2em] text-stone-300">
        Your Projects
      </h2>
      <div className="mb-6">
        <AddProjectButton onClick={onStartAddProject}>
          Add Button
        </AddProjectButton>
      </div>
      <ul className="space-y-3 text-sm text-stone-300">
        {projects.map((project) => (
          <li
            key={project.id}
            className="rounded-lg border border-stone-700 bg-stone-900/70 px-3 py-2">
            <button
              type="button"
              onClick={() => onSelectedProject(project.id)}
              className="w-full text-left">
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
