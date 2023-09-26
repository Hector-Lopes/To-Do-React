import { useState, useRef, useEffect } from "react";
import TaskItem from "./components/Taskitem";

const App = () => {
  const montado = useRef(false);

  useEffect(() => {
    if (montado.current == false) {
      montado.current = true;
    } else {
      console.log("componente att");
    }
  });

  const [TaskS, SetTaskS] = useState([
    {
      id: "1",
      descricao: "Estudar Progrmação",
      isCompleted: false,
    },
    {
      id: "2",
      descricao: "Ler",
      isCompleted: true,
    },
  ]);

  const handleclearTask = () => {
    SetTaskS([]);
  };
  return (
    <>
      {TaskS.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
      <button onClick={handleclearTask}>REMOVER</button>
    </>
  );
};

export default App;
