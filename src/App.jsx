import NewProject from "./components/NewProject";
import Sidebar from "./components/SideBar";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";
import { useState } from "react";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: null,
    }));
  }

  function handleSelectedProject(projectId) {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: projectId,
    }));
  }

  function handleAddProject(projectData) {
    setProjectsState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
        tasks: [],
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleAddTask(text) {
    const taskText = text.trim();
    if (!taskText) return;

    setProjectsState((prevState) => {
      const newTask = {
        text: taskText,
        id: Math.random(),
      };

      return {
        ...prevState,
        projects: prevState.projects.map((project) =>
          project.id === prevState.selectedProjectId
            ? { ...project, tasks: [...project.tasks, newTask] }
            : project,
        ),
      };
    });
  }

  function handleDeleteTask(taskId) {
    setProjectsState((prevState) => ({
      ...prevState,
      projects: prevState.projects.map((project) =>
        project.id === prevState.selectedProjectId
          ? {
              ...project,
              tasks: project.tasks.filter((task) => task.id !== taskId),
            }
          : project,
      ),
    }));
  }

  function handleDeleteProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId,
        ),
      };
    });
  }

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId,
  );
  let content;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  } else if (selectedProject) {
    content = (
      <SelectedProject
        project={selectedProject}
        onDelete={handleDeleteProject}
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
      />
    );
  } else {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="min-h-screen bg-stone-950 px-4 py-8 text-stone-100 md:px-8">
      <div className="mx-auto flex max-w-5xl gap-6 rounded-2xl border border-stone-800 bg-stone-900/80 shadow-2xl shadow-black/30 backdrop-blur-sm">
        <Sidebar
          onStartAddProject={handleStartAddProject}
          projects={projectsState.projects}
          onSelectedProject={handleSelectedProject}
        />
        {content}
      </div>
    </main>
  );
}

export default App;
