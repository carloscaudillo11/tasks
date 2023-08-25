import { useEffect } from "react";
import { useTasks } from "../context/TasksContext";
import { TaskCard } from "../components";
import { ImFileEmpty } from "react-icons/im";

const TasksPage = () => {
  const { tasks, getTasks } = useTasks();

  useEffect(() => {
    getTasks();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {tasks.length === 0 && (
        <div className="flex items-center justify-center p-10">
          <div>
            <ImFileEmpty className="m-auto my-2 text-6xl text-gray-400" />
            <h1 className="text-xl font-bold">
              No tasks yet, please add a new task
            </h1>
          </div>
        </div>
      )}

      <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
        {tasks.map((task) => (
          <TaskCard task={task} key={task._id} />
        ))}
      </div>
    </>
  );
};

export default TasksPage;
