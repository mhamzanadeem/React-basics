// reconciliation-demo.jsx
// Demonstrates how keys affect list reconciliation
import React, { useState } from 'react'

export default function ReconciliationDemo(){
  const [items, setItems] = useState([
    {id:1, text:'A'}, {id:2, text:'B'}, {id:3, text:'C'}
  ])

  function shuffle(){
    setItems(prev => [prev[2], prev[1], prev[0]])
  }

  return (
    <div>
      <button onClick={shuffle}>Shuffle</button>
      <ul>
        {items.map(item => (
          <li key={item.id} data-id={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  )
}
