import "./Taskitem.scss";

import { AiFillDelete } from "react-icons/ai";
const TaskItem = ({ task }) => {
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
          <AiFillDelete size={20} color="#f97474" />
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
