import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/router';

import { useAppDispatch } from 'redux/hook';
import { addTask, taskSelectorCount } from 'redux/taskSlice'
type FormType = {
  name: string,
  email: string,
  description: string
}
function TaskForm() {
  const router = useRouter()
  const [info, setInfo] = useState<FormType>({
    name: '',
    email: '',
    description: ''
  })
  
  const dispatch = useAppDispatch()
  const taskCount = useSelector(taskSelectorCount)
  console.log(taskCount)
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInfo(pre => ({
      ...pre,
      [e.target.name]: e.target.value
    }))
  }
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(addTask({
      id: taskCount + 1,
      postId: uuidv4(),
      name: info.name,
      email: info.email,
      body: info.description
    }))
    router.replace('/')
  }
  return (
    <div className=" bg-amber-400 p-5 rounded-md">
      <h1>Add task</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-5 p-">
        <div>
          <label>name</label>
          <input name="name" type="text" className='border w-full' onChange={handleChange} />
        </div>
        <div>
          <label>email</label>
          <input name="email" type="text" className='border w-full' onChange={handleChange} />
        </div>
        <div className="col-span-full">
          <label>description</label>
          <textarea name="description" className='border w-full' onChange={handleChange} />
        </div>
        <button className='bg-amber-500 text-white text-2xl px-5 py-3 mr-auto'>submit</button>
      </form>
    </div>
  )
}

export default TaskForm