import NewProject from "./components/NewProject";
import Sidebar from "./components/SideBar";
import NoProjectSelected from "./components/NoProjectSelected";

function App() {
  return (
    <main className="min-h-screen bg-stone-950 px-4 py-8 text-stone-100 md:px-8">
      <div className="mx-auto flex max-w-5xl gap-6 rounded-2xl border border-stone-800 bg-stone-900/80 shadow-2xl shadow-black/30 backdrop-blur-sm">
        <Sidebar />
        <NoProjectSelected />
      </div>
    </main>
  );
}

export default App;
