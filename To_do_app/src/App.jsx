import React, { useState, useEffect } from 'react'
import TaskForm from './components/TaskForm.jsx'
import TaskList from './components/TaskList.jsx'
import TaskStats from './components/TaskStats.jsx'

// Root App component - manages tasks state and persistence
export default function App() {
  // tasks: array of { id, text, completed }
  const [tasks, setTasks] = useState([])

  // Load tasks from localStorage on first render
  useEffect(() => {
    const saved = localStorage.getItem('tasks')
    if (saved) {
      try {
        setTasks(JSON.parse(saved))
      } catch (e) {
        // If parse fails, start with empty list
        setTasks([])
      }
    }
  }, [])

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  // Add a new task
  const addTask = (text) => {
    if (!text || !text.trim()) return
    const newTask = {
      id: Date.now(),
      text: text.trim(),
      completed: false,
    }
    setTasks((prev) => [newTask, ...prev])
  }

  // Toggle completed state for a task
  const toggleTask = (id) => {
    setTasks((prev) => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t))
  }

  // Delete a task
  const deleteTask = (id) => {
    setTasks((prev) => prev.filter(t => t.id !== id))
  }

  // Update task text
  const updateTask = (id, newText) => {
    if (!newText || !newText.trim()) return
    setTasks((prev) => prev.map(t => t.id === id ? { ...t, text: newText.trim() } : t))
  }

  return (
    <div className="app-container">
      <header>
        <h1>Smart To-Do List</h1>
        <p className="subtitle">Simple, beginner-friendly React + Vite example</p>
      </header>

      <main>
        {/* Pass addTask to TaskForm via props */}
        <TaskForm addTask={addTask} />

        {/* Statistics component receives computed stats */}
        <TaskStats
          total={tasks.length}
          completed={tasks.filter(t => t.completed).length}
          remaining={tasks.filter(t => !t.completed).length}
        />

        {/* TaskList receives tasks and callbacks for item actions */}
        <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} updateTask={updateTask} />
      </main>
    </div>
  )
}
