import React, { useState } from 'react'

// TaskForm: collects input and calls addTask from props
export default function TaskForm({ addTask }) {
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    addTask(text)
    setText('')
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a new task"
        value={text}
        onChange={(e) => setText(e.target.value)}
        aria-label="Task input"
      />
      <button type="submit">Add</button>
    </form>
  )
}
