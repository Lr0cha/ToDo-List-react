import { useState } from "react";
import InputTasks from "./components/InputTasks";

const App = () => {
  const [tasks, setTasks] = useState<string[]>([]); //lista de tarefas

  function handleAddTask(task: string) {
    setTasks([...tasks, task]);
    console.log(tasks);
  }

  return (
    <div className="bg-gray-300 min-h-screen">
      <div className="flex flex-col">
        <h1 className="text-center text-4xl p-4 font-bold">TODO LIST</h1>
        <div className="m-auto flex flex-col">
          <InputTasks taskAddFunction={handleAddTask} />
        </div>
      </div>
    </div>
  );
};

export default App;
