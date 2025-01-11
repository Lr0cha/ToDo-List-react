import { FaCheck } from "react-icons/fa";

interface Task {
  text: string;
  completed: boolean;
}

interface TasksProps {
  tasks: Task[];
  delTask: (index: number) => void;
  toggleTask: (index: number) => void;
}

const ViewTasks = ({ tasks, delTask, toggleTask }: TasksProps) => {
  return (
    <div className="space-y-4">
      {tasks.length > 0 ? (
        tasks.map((task, index) => (
          <div
            key={index}
            className={`flex items-center justify-between p-4 rounded-lg shadow-md ${
              task.completed ? "bg-green-100 line-through" : "bg-gray-100"
            }`}
          >
            <div className="flex items-center space-x-4">
              <button
                onClick={() => toggleTask(index)}
                className="text-green-600 hover:text-green-800 focus:outline-none"
              >
                <FaCheck className="text-xl" />
              </button>
              <p className="flex-grow text-lg text-gray-700">{task.text}</p>
            </div>
            <button
              onClick={() => delTask(index)}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300"
            >
              Excluir
            </button>
          </div>
        ))
      ) : (
        <img
          src="src/assets/toDoImage.svg"
          className="mx-auto w-2/3 pt-10"
          alt="Carregando..."
        />
      )}
    </div>
  );
};

export default ViewTasks;
