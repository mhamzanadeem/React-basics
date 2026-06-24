import React from 'react'

// TaskItem: displays single task with actions
export default function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-main">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
          aria-label={`Mark ${task.text} as completed`}
        />
        <span className="task-text">{task.text}</span>
        {task.completed && <span className="badge">Done</span>}
      </div>
      <div className="task-actions">
        <button className="delete" onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </li>
  )
}
