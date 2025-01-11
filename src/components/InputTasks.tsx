import { useState } from "react";

interface AddTaskProps {
  taskAddFunction: (task: string) => void;
}

const InputTasks = ({ taskAddFunction }: AddTaskProps) => {
  const [input, setInput] = useState(""); //tarefas no input

  return (
    <div className="flex">
      <input
        type="text"
        placeholder="Digite a tarefa..."
        className="text-2xl pl-2 outline-none"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="p-3 rounded-r bg-gray-200 outline-none border border-gray-200 hover:bg-gray-400"
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
