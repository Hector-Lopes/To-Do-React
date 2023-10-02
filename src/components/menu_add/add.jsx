import { FaPlus } from "react-icons/fa";

import "./add.scss";

import { useState } from "react";
import { axios } from "axios";
import { useAlert } from "react-alert";

import Button from "../button/button";
import Input from "../Input/input";

const ADD = () => {
  const [task, SetTask] = useState("");

  const alert = useAlert();

  const onchange = (e) => {
    SetTask(e.target.value);
  };

  const HandleTaskAddition = async () => {
    try {
      if (task.length == 0) {
        return alert.error("A Tarefa precisa de uma descrição");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onClick = () => {
    HandleTaskAddition();
  };

  return (
    <>
      <div className="add-task-container">
        <Input label="Adicionar tarefa" value={task} onchange={onchange} />
        <Button onClick={onClick}>
          <FaPlus />
        </Button>
      </div>
    </>
  );
};

export default ADD;
