import type { NextPage } from 'next'
import React, { useState, useEffect } from 'react'

import TaskForm from 'components/taskForm'
import TaskList from 'components/taskList'


const Home: NextPage = () => {
  const [message, setMessage] = useState<string>('')
  const getMessageApi = async () => {
    const res = await fetch('/api/message').then((res) => res.json())
    setMessage(res.message)

  }
  useEffect(() => {
    getMessageApi()
  }, [])
  return (
    <div className='container mx-auto pt-6 flex flex-col items-center'>
      <div>
        <TaskForm />
        <TaskList />
      </div>
    </div>
  )
}

export default Home
