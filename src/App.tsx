import { useState } from "react";
import InputTasks from "./components/InputTasks";
import ViewTasks from "./components/ViewTasks";

const App = () => {
  const [tasks, setTasks] = useState<string[]>([]); //lista de tarefas

  function handleAddTask(task: string) {
    setTasks([...tasks, task]);
  }

  function handleDelTask(index: number) {
    const newListTask: string[] = tasks.filter(
      (_, indexTask) => indexTask !== index
    );
    setTasks(newListTask);
  }

  return (
    <div className="bg-gray-300 min-h-screen">
      <div className="flex flex-col">
        <h1 className="text-center text-4xl p-4 font-bold">TODO LIST</h1>
        <div className="m-auto flex flex-col mb-10 gap-4 w-1/3">
          <InputTasks taskAddFunction={handleAddTask} />
          <ViewTasks tasks={tasks} delTask={handleDelTask} />
        </div>
      </div>
    </div>
  );
};

export default App;
