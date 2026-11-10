export default function SelectedProject({ project }) {
  return (
    <section className="min-w-0 flex-1 rounded-r-2xl bg-stone-900 p-8">
      <header className="mb-8 flex items-start justify-between gap-4 border-b border-stone-700 pb-5">
        <div>
          <h2 className="text-2xl font-bold text-stone-100">
            {project.title}
          </h2>
          <p className="mt-2 text-sm text-stone-400">
            Due {project.dueDate}
          </p>
        </div>
      </header>

      <p className="whitespace-pre-wrap text-stone-300">
        {project.description}
      </p>
    </section>
  );
}
