import React from 'react'
import TaskItem from './TaskItem.jsx'

// TaskList: renders list or empty state conditionally
export default function TaskList({ tasks, toggleTask, deleteTask }) {
  return (
    <section className="task-list">
      {/* Conditional rendering: show empty message when no tasks */}
      {tasks.length === 0 ? (
        <p className="empty">No tasks available. Add your first task.</p>
      ) : (
        <ul>
          {/* List rendering with unique keys */}
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} toggleTask={toggleTask} deleteTask={deleteTask} />
          ))}
        </ul>
      )}
    </section>
  )
}
