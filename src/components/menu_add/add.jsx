import { FaPlus } from "react-icons/fa";

import "./add.scss";

import { useState } from "react";
import axios from "axios";
import { useAlert } from "react-alert";

import Button from "../button/button";
import Input from "../Input/input";

const ADD = ({ fetchTasks }) => {
  const [task, SetTask] = useState("");

  const alert = useAlert();

  const onChangee = (e) => {
    SetTask(e.target.value);
  };

  const HandleTaskAddition = async () => {
    try {
      if (task.length === 0) {
        return alert.error("A Tarefa precisa de uma descrição");
      }
      await axios.post("https://fsc-task-manager-backend.herokuapp.com/tasks", {
        description: task,
        isCompleted: false,
      });

      await fetchTasks();
      SetTask("");
      await alert.success("A Tarefa foi adicionada com sucesso!");
    } catch (error) {
      alert.error("Algo deu errado");
    }
  };

  return (
    <>
      <div className="add-task-container">
        <Input
          label="Adicionar tarefa"
          value={task}
          onChange={onChangee}
          onEnterPress={HandleTaskAddition}
        />
        <Button onClick={HandleTaskAddition}>
          <FaPlus>color="#ffff"</FaPlus>
        </Button>
      </div>
    </>
  );
};

export default ADD;
