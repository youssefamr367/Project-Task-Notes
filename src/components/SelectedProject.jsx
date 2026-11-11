import Tasks from "./Tasks";
export default function SelectedProject({
  project,
  onDelete,
  onAddTask,
  onDeleteTask,
}) {
  return (
    <section className="min-w-0 flex-1 rounded-r-2xl bg-stone-900 p-8">
      <header className="mb-8 flex items-start justify-between gap-4 border-b border-stone-700 pb-5">
        <div>
          <h2 className="text-2xl font-bold text-stone-100">{project.title}</h2>
          <p className="mt-2 text-sm text-stone-400">Due {project.dueDate}</p>
        </div>
        <button
          onClick={onDelete}
          type="button"
          className="rounded-md border border-stone-600 px-4 py-2 text-sm text-stone-300 transition-colors hover:border-rose-400/50 hover:text-rose-300">
          Delete
        </button>
      </header>

      <p className="whitespace-pre-wrap text-stone-300">
        {project.description}
      </p>

      <Tasks
        tasks={project.tasks}
        onAddTask={onAddTask}
        onDeleteTask={onDeleteTask}
      />
    </section>
  );
}
