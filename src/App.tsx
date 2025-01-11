import { useState, useEffect, useRef } from "react";
import InputTasks from "./components/InputTasks";
import ViewTasks from "./components/ViewTasks";

interface Task {
  text: string;
  completed: boolean;
}

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]); // Lista de tarefas
  const firstRender = useRef(true);

  function handleAddTask(task: string) {
    setTasks([...tasks, { text: task, completed: false }]);
  }

  function handleDelTask(index: number) {
    const newListTask = tasks.filter((_, indexTask) => indexTask !== index);
    setTasks(newListTask);
  }

  function handleToggleTask(index: number) {
    const newTasks = tasks.map((task, taskIndex) =>
      taskIndex === index ? { ...task, completed: !task.completed } : task
    );
    const completedTasks = newTasks.filter((task) => task.completed);
    const uncompletedTasks = newTasks.filter((task) => !task.completed);
    setTasks([...uncompletedTasks, ...completedTasks]);
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
    <div className="bg-gray-100 min-h-screen p-6 flex items-center justify-center">
      <div className="bg-white w-full max-w-xl p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl text-center font-bold text-gray-700 mb-6">
          TODO LIST
        </h1>
        <div className="gap-4">
          <InputTasks taskAddFunction={handleAddTask} />
          <ViewTasks
            tasks={tasks}
            delTask={handleDelTask}
            toggleTask={handleToggleTask}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
