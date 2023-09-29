import { useState, useEffect } from "react";
import axios from "axios";

import "./Tasks.scss";

import Button from "../button/button";
import TaskItem from "../Taskitems/Taskitem";
import ADD from "../menu_add/add";

const Tasks = () => {
  const [TaskS, SetTaskS] = useState([]);

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

  //   const upadteTask = async () => {
  //     try {
  //       const { data } = await axios.post(
  //         await "https://fsc-task-manager-backend.herokuapp.com/tasks"
  //       );
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  return (
    <div className="Tasks-Container">
      <h2>Minhas Tarefas</h2>
      <input></input>
      <div className="Last-Tasks">
        <h3>Ultimas Tarefas</h3>
        <div className="Tasks-list">
          {TaskS.filter((Task) => Task.isCompleted === false).map(
            (lastTask) => (
              <TaskItem task={lastTask} />
            )
          )}
        </div>
      </div>
      <div className="Completed-Tasks">
        <div className="Tasks-list">
          <h3>Tarefas Concluidas</h3>
          {TaskS.filter((task) => task.isCompleted === true).map(
            (completetask) => (
              <TaskItem task={completetask} />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
