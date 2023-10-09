import "./Taskitem.scss";

import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import { useAlert } from "react-alert";

const TaskItem = ({ task, fetchTasks }) => {
  const alert = useAlert();

  const HandleTaskDeletion = async () => {
    try {
      await axios.delete(
        `https://fsc-task-manager-backend.herokuapp.com/tasks/${task._id}`
      );
      fetchTasks();
    } catch (error) {
      alert.error("Algo deu errado.");
    }
  };

  return (
    <>
      <div className="task-item-container">
        <div className="task-description">
          <label
            className={
              task.isCompleted
                ? "checkbox-container-completed"
                : "checkbox-container"
            }
          >
            {task.description}
            <input type="checkbox" defaultChecked={task.isCompleted} />
            <span
              className={task.isCompleted ? "checkmark completed" : "checkmark"}
            ></span>
          </label>
        </div>
        <div className="delete">
          <AiFillDelete
            size={20}
            color="#f97474"
            onClick={HandleTaskDeletion}
          />
        </div>
      </div>
    </>
  );
};

export default TaskItem;

// import React from "react";

// class TaskItem extends React.Component {
//   render() {
//     const { task } = this.props;
//     return <h1>{this.descricao}</h1>;
//   }
// }

// export default TaskItem;
