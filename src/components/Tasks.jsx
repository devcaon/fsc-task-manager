import Button from "./Button";
import AddIcon from "../assets/icons/add.svg?react";
import TrashIcon from "../assets/icons/trash.svg?react";
import SunIcon from "../assets/icons/sun.svg?react";
import MoonIcon from "../assets/icons/moon.svg?react";
import CloudSunIcon from "../assets/icons/cloud-sun.svg?react";

const Tasks = () => {
  return (
    <div className="w-full px-9 py-16">
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
          <Button variant="ghost">
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
      <div className="rounded-xl bg-white p-6">
        {/* manhã */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 border-b border-solid border-[#F4F4F5] pb-1">
            <SunIcon />
            <p className="text-[#9A9C9F]">Manhã</p>
          </div>
        </div>

        {/* tarde */}
        <div>
          <div className="flex items-center gap-2 border-b border-solid border-[#F4F4F5] pb-1">
            <CloudSunIcon />
            <p className="text-[#9A9C9F]">Tarde</p>
          </div>
        </div>

        {/* noite */}
        <div>
          <div className="flex items-center gap-2 border-b border-solid border-[#F4F4F5] pb-1">
            <MoonIcon />
            <p className="text-[#9A9C9F]">Noite</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
