import Input from "./Input";

export default function NewProject() {
  return (
    <div className="flex-1 rounded-r-2xl bg-stone-900 p-8">
      <menu className="my-4 flex items-center justify-end gap-3">
        <button
          type="button"
          className="rounded-md border border-stone-600 px-4 py-2 text-sm text-stone-300 transition hover:border-stone-500 hover:text-white"
        >
          Cancel
        </button>
        <button
          type="button"
          className="rounded-md bg-amber-500 px-4 py-2 text-sm font-semibold text-stone-950 transition hover:bg-amber-400"
        >
          Add
        </button>
      </menu>

      <div className="space-y-2">
        <Input Label="Title" />
        <Input Label="Description" textarea />
        <Input Label="Due Date" />
      </div>
    </div>
  );
}
