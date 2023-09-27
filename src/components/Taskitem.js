import ButtonItem from "./Buttom";
const TaskItem = ({ task }) => {
  return (
    <>
      <h1>{task.description}</h1>
      <p>{task.isCompleted ? "Completa" : "Não completa"}</p>
      {/* <ButtonItem descricao={task.description} /> */}
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
