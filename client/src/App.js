import Filterbar from "./Components/Filterbar";
import Navbar from "./Components/Navbar";
import Tasks from "./Components/TaskList";
import { TaskProvider } from "./Context/TaskContext";

function App() {
  return (
    <>
      <TaskProvider>
        <Navbar />
        <Filterbar />
        <Tasks />
      </TaskProvider>
    </>
  );
}

export default App;
