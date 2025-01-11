import { useState, useEffect, useRef } from "react";
import InputTasks from "./components/InputTasks";
import ViewTasks from "./components/ViewTasks";

const App = () => {
  const [tasks, setTasks] = useState<string[]>([]); //lista de tarefas
  const firstRender = useRef(true);

  function handleAddTask(task: string) {
    setTasks([...tasks, task]);
  }

  function handleDelTask(index: number) {
    const newListTask: string[] = tasks.filter(
      (_, indexTask) => indexTask !== index
    );
    setTasks(newListTask);
  }

  useEffect(() => {
    const storedTasks = localStorage.getItem("TODO");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    localStorage.setItem("TODO", JSON.stringify(tasks));
  }, [tasks]);

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
