import React, { useState, useRef, useEffect } from 'react'

// TaskItem: displays single task with actions and inline edit support
export default function TaskItem({ task, toggleTask, deleteTask, updateTask }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(task.text)
  const inputRef = useRef(null)

  useEffect(() => {
    setEditText(task.text)
  }, [task.text])

  useEffect(() => {
    if (isEditing && inputRef.current) inputRef.current.focus()
  }, [isEditing])

  const handleSave = () => {
    const trimmed = editText.trim()
    if (!trimmed) return
    updateTask(task.id, trimmed)
    setIsEditing(false)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSave()
    if (e.key === 'Escape') {
      setEditText(task.text)
      setIsEditing(false)
    }
  }

  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-main">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
          aria-label={`Mark ${task.text} as completed`}
        />

        {isEditing ? (
          <input
            ref={inputRef}
            className="edit-input"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={handleKeyDown}
            aria-label={`Edit ${task.text}`}
          />
        ) : (
          <span className="task-text">{task.text}</span>
        )}

        {task.completed && <span className="badge">Done</span>}
      </div>

      <div className="task-actions">
        {isEditing ? (
          <>
            <button className="save" onClick={handleSave}>Save</button>
            <button
              className="cancel"
              onClick={() => { setEditText(task.text); setIsEditing(false) }}
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button className="edit" onClick={() => setIsEditing(true)}>Edit</button>
            <button className="delete" onClick={() => deleteTask(task.id)}>Delete</button>
          </>
        )}
      </div>
    </li>
  )
}
