import React from 'react'
import { useSelector } from 'react-redux'

import { taskSelectorAll } from 'redux/taskSlice'
function TaskList() {
  const tasks = useSelector(taskSelectorAll)

  return (
    <div className="grid grid-cols-3 gap-3">
      {tasks.map(task => (
        <div key={task.id}>
          <p>{task.name}</p>
          <p>{task.email}</p>
        </div>
      ))}
    </div>
  )
}

export default TaskList