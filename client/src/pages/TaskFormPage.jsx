import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { Button, Card, Input, Label, Textarea } from "../components";
import { useTasks } from "../context/TasksContext";
import { useForm } from "react-hook-form";
dayjs.extend(utc);

const TaskFormPage = () => {
  const { createTask, getTask, updateTask } = useTasks();
  const params = useParams();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      if (params.id) {
        updateTask(params.id, {
          ...data,
          date: dayjs.utc(data.date).format(),
        });
      } else {
        createTask({
          ...data,
          date: dayjs.utc(data.date).format(),
        });
      }
      navigate("/tasks");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const task = await getTask(params.id);
        setValue("title", task.title);
        setValue("description", task.description);
        setValue(
          "date",
          task.date ? dayjs(task.date).utc().format("YYYY-MM-DD") : ""
        );
        setValue("completed", task.completed);
      }
    };
    loadTask();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="h-[calc(100vh-100px)] flex items-center justify-center">
      <Card>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Label htmlFor="title">Title</Label>
          <Input
            type="text"
            name="title"
            placeholder="Title"
            {...register("title")}
            autoFocus
          />
          {errors.title && (
            <p className="text-xs italic text-red-500">Please enter a title.</p>
          )}

          <Label htmlFor="description">Description</Label>
          <Textarea
            name="description"
            id="description"
            rows="3"
            placeholder="Description"
            {...register("description")}
          ></Textarea>

          <Label htmlFor="date">Date</Label>
          <Input type="date" name="date" {...register("date")} />
          <Button>Save</Button>
        </form>
      </Card>
    </div>
  );
};

export default TaskFormPage;
