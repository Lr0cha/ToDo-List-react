interface TasksProps {
  tasks: string[];
  delTask: (index: number) => void;
}

const ViewTasks = ({ tasks, delTask }: TasksProps) => {
  return (
    <div className="flex flex-col items-center">
      {tasks.length > 0 ? (
        tasks.map((task, index) => (
          <div key={index} className="flex items-center space-x-4">
            <p className="text-2xl p-2 flex-grow">{task}</p>
            <button
              onClick={() => delTask(index)}
              className="px-4 py-2 border rounded hover:bg-gray-600"
            >
              Excluir
            </button>
          </div>
        ))
      ) : (
        <img
          src="src/assets/toDoImage.svg"
          className="pt-10"
          alt="Carregando..."
        />
      )}
    </div>
  );
};

export default ViewTasks;
