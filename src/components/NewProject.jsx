import Input from "./Input";
export default function NewProject() {
  return (
    <div>
      <menu>
        <li>
          <button>Cancel</button>
        </li>
        <li>
          <button>Add</button>
        </li>
      </menu>
      <div>
        <Input Label="Title" />
        <Input Label="Description" textarea />
        <Input Label="Due Date" />
      </div>
    </div>
  );
}
