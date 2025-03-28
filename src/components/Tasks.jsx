import Button from "./Button";
import AddIcon from "../assets/icons/add.svg?react";
import TrashIcon from "../assets/icons/trash.svg?react";
import SunIcon from "../assets/icons/sun.svg?react";
import MoonIcon from "../assets/icons/moon.svg?react";
import CloudSunIcon from "../assets/icons/cloud-sun.svg?react";
import TasksSeparator from "./TasksSeparator";
import { useState } from "react";
import TASKS from "../constants/tasks";
import TaskItem from "./TaskItem";
import { toast } from "sonner";

const Tasks = () => {
  const [tasks, setTasks] = useState(TASKS);

  const morningTasks = tasks.filter((task) => task.time === "Morning");
  const afternoonTasks = tasks.filter((task) => task.time === "Afternoon");
  const nightTasks = tasks.filter((task) => task.time === "Evening");

  const handleTaskCheckboxClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id !== taskId) {
        return task;
      }
      if (task.status === "not_started") {
        toast.success("Tarefa iniciada com sucesso!");
        return { ...task, status: "in_progress" };
      }
      if (task.status === "in_progress") {
        toast.success("Tarefa concluida com sucesso!");
        return { ...task, status: "done" };
      }
      if (task.status === "done") {
        toast.success("Tarefa reiniciada com sucesso!");
        return { ...task, status: "not_started" };
      }

      return task;
    });
    setTasks(newTasks);
  };

  const handleDeleteClick = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
    toast.success("Tarefa deletada com sucesso!");
  };

  return (
    <div className="w-full space-y-6 px-8 py-16">
      {/* Botões e Cabeçalhos */}
      <div className="flex justify-between">
        {/* LEFT */}
        <div className="">
          <span className="text-xs font-semibold text-[#00ADB5]">
            Minhas Tarefas
          </span>
          <h2 className="text-xl font-semibold">Minhas Tarefas</h2>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" className="flex items-center gap-2">
            Limpar tarefas
            <TrashIcon />
          </Button>
          <Button>
            Nova Tarefa
            <AddIcon />
          </Button>
        </div>
      </div>

      {/* Tarefas */}
      <div className="rounded-xl bg-white p-8">
        <div className="space-y-3">
          <TasksSeparator title="Manhã" icon={<SunIcon />} />
          {/* tarefas de manhã */}
          {morningTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleCheckboxClick={handleTaskCheckboxClick}
              handleDeleteClick={handleDeleteClick}
            />
          ))}
        </div>
        <div className="my-6 space-y-3">
          <TasksSeparator title="Tarde" icon={<CloudSunIcon />} />
          {afternoonTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleCheckboxClick={handleTaskCheckboxClick}
              handleDeleteClick={handleDeleteClick}
            />
          ))}
        </div>
        <div className="space-y-3">
          <TasksSeparator title="Noite" icon={<MoonIcon />} />
          {nightTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleCheckboxClick={handleTaskCheckboxClick}
              handleDeleteClick={handleDeleteClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
