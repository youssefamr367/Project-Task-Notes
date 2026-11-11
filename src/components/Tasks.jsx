import NewTask from "./NewTask";

export default function Tasks({ onAddTask, onDeleteTask, tasks }) {
  return (
    <section className="mt-8">
      <h2 className="mb-4 text-xl font-bold text-stone-100">Tasks</h2>
      <NewTask onAddTask={onAddTask} />
      {tasks.length === 0 ? (
        <p className="text-sm text-stone-400">
          This project does not have any tasks yet.
        </p>
      ) : (
        <ul className="space-y-3">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center justify-between gap-4 rounded-lg border border-stone-700 bg-stone-800/70 px-4 py-3"
            >
              <span className="text-stone-200">{task.text}</span>
              <button
                type="button"
                onClick={() => onDeleteTask(task.id)}
                className="text-sm text-stone-400 transition hover:text-rose-300"
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
