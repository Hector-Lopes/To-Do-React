import './Taskitem.scss'

import { AiFillDelete } from 'react-icons/ai'
import axios from 'axios'

const TaskItem = ({ task, fetchTasks }) => {
  const HandleTaskDeletion = async () => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/tasks/${task._id}`)
      fetchTasks()

      alert('A Tarefa foi Removida com sucesso')
    } catch (_error) {
      alert('Algo deu errado.')
    }
  }

  const handleTaskCompletecheck = async (e) => {
    try {
      await axios.patch(`${process.env.REACT_APP_API_URL}/tasks/${task._id}`, {
        isCompleted: e.target.checked
      })
      alert.success('A Tarefa foi Concluida')
      await fetchTasks()
    } catch (_error) {
      alert('Algo deu errado')
    }
  }

  return (
    <>
      <div className='task-item-container'>
        <div className='task-description'>
          <label
            className={
              task.isCompleted
                ? 'checkbox-container-completed'
                : 'checkbox-container'
            }
          >
            {task.description}
            <input
              type='checkbox'
              defaultChecked={task.isCompleted}
              onChange={(e) => handleTaskCompletecheck(e)}
            />
            <span
              className={task.isCompleted ? 'checkmark completed' : 'checkmark'}
            ></span>
          </label>
        </div>
        <div className='delete'>
          <AiFillDelete
            size={20}
            color='#f97474'
            onClick={HandleTaskDeletion}
          />
        </div>
      </div>
    </>
  )
}

export default TaskItem

// import React from "react";

// class TaskItem extends React.Component {
//   render() {
//     const { task } = this.props;
//     return <h1>{this.descricao}</h1>;
//   }
// }

// export default TaskItem;
