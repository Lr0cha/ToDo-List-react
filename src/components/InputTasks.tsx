import { useState } from "react";

interface AddTaskProps {
  taskAddFunction: (task: string) => void;
}

const InputTasks = ({ taskAddFunction }: AddTaskProps) => {
  const [input, setInput] = useState(""); //tarefas no input

  return (
    <div className="flex flex-col m-4 sm:flex-row sm:space-x-4">
      <input
        type="text"
        placeholder="Digite a tarefa..."
        className="flex-1 p-3 border border-gray-300 rounded-l-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="mt-2 sm:mt-0 px-6 py-3 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        onClick={() => {
          taskAddFunction(input);
          setInput("");
        }}
      >
        Adicionar
      </button>
    </div>
  );
};

export default InputTasks;
