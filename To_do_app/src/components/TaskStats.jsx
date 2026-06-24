import React from 'react'

// TaskStats: shows total, completed and remaining task counts
export default function TaskStats({ total, completed, remaining }) {
  return (
    <aside className="stats">
      <div className="stat">
        <strong>Total:</strong> <span>{total}</span>
      </div>
      <div className="stat">
        <strong>Completed:</strong> <span>{completed}</span>
      </div>
      <div className="stat">
        <strong>Remaining:</strong> <span>{remaining}</span>
      </div>
    </aside>
  )
}
