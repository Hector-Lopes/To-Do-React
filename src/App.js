import { useState, useEffect } from "react";
import axios from "axios";

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

  const fetchTasks = async () => {
    try {
      const { data } = await axios.get(
        await "https://fsc-task-manager-backend.herokuapp.com/tasks"
      );
      SetTaskS(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <>
      {TaskS.map((task) => (
        <TaskItem task={task} />
      ))}
    </>
  );
};

export default App;
