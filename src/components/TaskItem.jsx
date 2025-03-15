const TaskItem = ({ task }) => {
  const getStatusClasses = () => {
    if (task.status === "Pending") {
      return "bg-[#35383E]/10 text-[#35383E]";
    }
    if (task.status === "In progress") {
      return "bg-[#FFAA04]/10 text-[#FFAA04]";
    }
    if (task.status === "Done") {
      return "bg-[#00ADB5]/10 text-[#00ADB5]";
    }
  };
  return (
    <div
      className={`flex items-center gap-2 rounded-lg px-4 py-3 text-sm ${getStatusClasses()}`}
    >
      {task.title}
    </div>
  );
};

export default TaskItem;
