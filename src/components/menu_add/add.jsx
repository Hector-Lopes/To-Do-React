import { FaPlus } from 'react-icons/fa'

import './add.scss'

import { useState } from 'react'
import axios from 'axios'

import Button from '../button/button'
import Input from '../Input/input'

const ADD = ({ fetchTasks }) => {
  const [task, SetTask] = useState('')

  const onChangee = (e) => {
    SetTask(e.target.value)
  }

  const HandleTaskAddition = async () => {
    try {
      if (task.length === 0) {
        return alert('A Tarefa precisa de uma descrição')
      }
      await axios.post(`${process.env.REACT_APP_API_URL}/tasks`, {
        description: task,
        isCompleted: false
      })

      await fetchTasks()
      SetTask('')
      await alert('A Tarefa foi adicionada com sucesso!')
    } catch (_error) {
      alert('Algo deu errado')
    }
  }

  return (
    <>
      <div className='add-task-container'>
        <Input
          label='Adicionar tarefa'
          value={task}
          onChange={onChangee}
          onEnterPress={HandleTaskAddition}
        />
        <Button onClick={HandleTaskAddition}>
          <FaPlus>color="#ffff"</FaPlus>
        </Button>
      </div>
    </>
  )
}

export default ADD
