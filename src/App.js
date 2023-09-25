import { useState } from "react";
import TaskItem from "./components/Taskitem";

const App = () => {
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

  return (
    <>
      {TaskS.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </>
  );
};

export default App;
