import React from 'react'
import { useRouter } from 'next/router'

import { useAppDispatch, useAppSelector } from 'redux/hook'
import { taskSelectorAll, deleteTask } from 'redux/taskSlice'
function TaskList() {
  const router = useRouter()
  const tasks = useAppSelector(taskSelectorAll)
  const dispatch = useAppDispatch()

  const handleDelete = (id: number) => {
    dispatch(deleteTask(id))
  }
  const handleRedirect = (id: number) => {
    router.replace(`/task/${id}`)

  }
  return (
    <>
      <div className="flex items-center justify-between py-5 ">
        <h1>task 1</h1>
        <button className="btn btn-primary" onClick={() => router.replace('/AddForm')}>Add form</button>
      </div>
      <div className="grid grid-cols-3 gap-3">

        {tasks.map(task => (
          <div key={task.id} className="bg-amber-200 p-5">
            <p>{task.name}</p>
            <p>{task.email}</p>
            <button className="mt-5 btn btn-error text-white" onClick={() => handleDelete(task.id)}>delete</button>
            <button className="mt-5 ml-2 btn btn-success text-white" onClick={() => handleRedirect(task.id)}>update</button>
          </div>
        ))}
      </div>
    </>
  )
}

export default TaskList