/* eslint-disable react/prop-types */
import { useTasks } from "../context/TasksContext";
import { Button, ButtonLink, Card } from "./";

export function TaskCard({ task }) {
  const { deleteTask } = useTasks();

  return (
    <Card>
      <header className="flex justify-between">
        <h1 className="text-2xl font-bold">{task.title}</h1>
        <div className="flex items-center gap-x-2">
          <Button onClick={() => deleteTask(task._id)}>Delete</Button>
          <ButtonLink to={`/tasks/${task._id}`}>Edit</ButtonLink>
        </div>
      </header>
      <p className="text-slate-300">{task.description}</p>
    </Card>
  );
}


  