import CheckIcon from "../assets/icons/check.svg?react";
import LoaderIcon from "../assets/icons/loader.svg?react";
import DatailsIcon from "../assets/icons/details.svg?react";

const TaskItem = ({ task }) => {
  const getStatusClasses = () => {
    if (task.status === "pending") {
      return "bg-[#35383E] bg-opacity-10 text-[#35383E]";
    }
    if (task.status === "in_progress") {
      return "bg-[#FFAA04] text-[#FFAA04]";
    }
    if (task.status === "done") {
      return "bg-[#00ADB5] text-[#00ADB5]";
    }
  };
  return (
    <div
      className={`flex items-center justify-between gap-2 rounded-lg bg-opacity-10 px-4 py-3 text-sm ${getStatusClasses()}`}
    >
      <div className="flex items-center gap-2">
        <label
          className={`relative flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg ${getStatusClasses()}`}
        >
          <input
            type="checkbox"
            checked={task.status === "done"}
            className="absolute h-full w-full cursor-pointer opacity-0"
          />
          {task.status === "done" && <CheckIcon />}
          {task.status === "in_progress" && (
            <LoaderIcon className="animate-spin text-[#FFFFFF]" />
          )}
        </label>
        {task.title}
      </div>
      <a href="#" className="transition hover:opacity-70">
        <DatailsIcon />
      </a>
    </div>
  );
};

export default TaskItem;
