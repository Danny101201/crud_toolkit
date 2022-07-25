import React from 'react'
import TaskForm from 'components/taskForm'
import Link from 'next/link'
function AddForm() {
  return (
    <div>
      <TaskForm />
      <div className="text-center">
        <Link href="/">
          <button className="btn  btn-info text-white mt-5">back home</button>
        </Link>
      </div>
    </div>
  )
}

export default AddForm