import "./add.scss";

import { useState } from "react";

import Button from "../button/button";
import Input from "../Input/input";
const ADD = () => {
  const [task, SetTask] = useState("");

  const onchange = (e) => {
    SetTask(e.target.value);
  };

  return (
    <>
      <div className="add-task-container">
        <Input label="Adicionar tarefa" value={task} onchange={onchange} />
        <Button />
      </div>
    </>
  );
};

export default ADD;
