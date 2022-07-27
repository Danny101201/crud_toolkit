import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useRouter } from 'next/router'

import { useAppDispatch, useAppSelector } from 'redux/hook';
import { taskSelectorById, updateTask } from 'redux/taskSlice'
type FormType = {
  name: string,
  email: string,
  description: string
}
function TaskItem() {
  const router = useRouter()
  const { id } = router.query
  const TaskItem = useAppSelector((state) => taskSelectorById(state, id as string)) as Task

  const [info, setInfo] = useState<FormType>({
    name: TaskItem.name,
    email: TaskItem.email,
    description: TaskItem.body
  })
  const dispatch = useAppDispatch()
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInfo(pre => ({
      ...pre,
      [e.target.name]: e.target.value
    }))
  }
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(updateTask({ id: TaskItem.id, changes: info }))
    router.replace('/')
  }
  return (
    <div>
      <div className=" bg-amber-400 p-5 rounded-md">
        <h1>Update task</h1>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-5">
          <div>
            <label>name</label>
            <input name="name" type="text" value={info.name} className='border w-full' onChange={handleChange} />
          </div>
          <div>
            <label>email</label>
            <input name="email" type="text" value={info.email} className='border w-full' onChange={handleChange} />
          </div>
          <div className="col-span-full">
            <label>descriptions</label>
            <textarea name="description" value={info.description} className='border w-full' onChange={handleChange} />
          </div>
          <button type="submit" className="btn btn-primary mr-auto">submit</button>
        </form>
      </div>
    </div>
  )
}

export default TaskItem 