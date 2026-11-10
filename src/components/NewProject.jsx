import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";
import { useState } from "react";

export default function NewProject({ onAdd }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleSave() {
    const enteredTitle = title.current.value.trim();
    const enteredDescription = description.current.value.trim();
    const enteredDueDate = dueDate.current.value.trim();

    if (!enteredTitle || !enteredDescription || !enteredDueDate) {
      setIsModalOpen(true);
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>Invalid input</h2>
        <p>Please fill in all fields.</p>
      </Modal>
      <div className="flex-1 rounded-r-2xl bg-stone-900 p-8">
        <menu className="my-4 flex items-center justify-end gap-3">
          <button
            type="button"
            className="rounded-md border border-stone-600 px-4 py-2 text-sm text-stone-300 transition hover:border-stone-500 hover:text-white">
            Cancel
          </button>
          <button
            onClick={handleSave}
            type="button"
            className="rounded-md bg-amber-500 px-4 py-2 text-sm font-semibold text-stone-950 transition hover:bg-amber-400">
            Add
          </button>
        </menu>

        <div className="space-y-2">
          <Input type="text" ref={title} Label="Title" />
          <Input ref={description} Label="Description" textarea />
          <Input type="date" ref={dueDate} Label="Due Date" />
        </div>
      </div>
    </>
  );
}
