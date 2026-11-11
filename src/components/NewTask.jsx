import { useState } from "react";
export default function NewTask({ onAddTask }) {
  const [enteredTask, setEnteredTask] = useState("");

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const taskText = enteredTask.trim();
    if (!taskText) return;

    onAddTask(taskText);
    setEnteredTask("");
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6 flex items-center gap-3">
      <input
        aria-label="Task"
        className="min-w-0 flex-1 rounded-md border border-stone-600 bg-stone-800 px-3 py-2 text-stone-100 outline-none focus:border-amber-500"
        value={enteredTask}
        onChange={handleChange}
        type="text"
      />
      <button
        className="rounded-md bg-amber-500 px-4 py-2 text-sm font-semibold text-stone-950 transition hover:bg-amber-400"
        type="submit"
      >
        Add Task
      </button>
    </form>
  );
}
