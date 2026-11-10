import image from "../assets/no-projects.png";
import AddProjectButton from "./AddProjectButton";

export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="flex flex-1 items-center justify-center px-6 py-16 text-center">
      <div className="max-w-md">
        <img
          className="mx-auto mb-6 h-20 w-20 object-contain opacity-80"
          src={image}
          alt="An empty task list"
        />
        <h2 className="mb-3 text-2xl font-bold text-stone-200">
          No Project Selected
        </h2>
        <p className="mb-6 text-stone-400">
          Select a project or get started with a new one.
        </p>
        <AddProjectButton onClick={onStartAddProject}>
          Add Project
        </AddProjectButton>
      </div>
    </div>
  );
}
