import NewProject from "./components/NewProject";
import Sidebar from "./components/SideBar";

function App() {
  return (
    <main className="h-screen my-8 ">
      <Sidebar />
      <NewProject />
    </main>
  );
}

export default App;
