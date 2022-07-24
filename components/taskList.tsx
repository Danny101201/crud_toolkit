import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { taskSelectorAll, deleteTask } from 'redux/taskSlice'
function TaskList() {
  const tasks = useSelector(taskSelectorAll)
  const dispatch = useDispatch()

  const handleDelete = (id: number) => {
    dispatch(deleteTask(id))
  }
  return (
    <div className="grid grid-cols-3 gap-3">
      {tasks.map(task => (
        <div key={task.id}>
          <p>{task.name}</p>
          <p>{task.email}</p>
          <button className="mt-5 btn btn-error text-white" onClick={() => handleDelete(task.id)}>delete</button>
        </div>
      ))}
    </div>
  )
}

export default TaskList