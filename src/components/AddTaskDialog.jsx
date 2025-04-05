import { createPortal } from "react-dom";

import Button from "./Button";
import Input from "./Input";

const AddTaskDialog = ({ isOpen, handleClose }) => {
  if (!isOpen) return null;
  return createPortal(
    <div className="fixed bottom-0 left-0 top-0 flex h-screen w-screen items-center justify-center bg-gray-900/50">
      {/* Dialog */}
      <div className="rounded-xl bg-white p-5 text-center shadow">
        <h2 className="text-xl font-semibold text-[#35383E]">Nova Tarefa</h2>
        <p className="mb-4 mt-1 text-sm text-[#9A9C9F]">
          Insira as informações abaixo
        </p>
        <div className="flex w-[350px] flex-col space-y-4">
          <Input
            id="title"
            placeholder="Insira o título da tarefa"
            label="Título"
          />
          <Input id="time" placeholder="Horário" label="Horário" />
          <Input
            id="description"
            placeholder="Descreva a tarefa"
            label="Descrição"
          />
          <div className="flex gap-3">
            <Button
              size="large"
              className="w-full"
              variant="secondary"
              onClick={handleClose}
            >
              Cancelar
            </Button>
            <Button size="large" className="w-full">
              Salvar
            </Button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default AddTaskDialog;
