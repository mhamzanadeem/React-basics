// memo-demo.jsx
import React, { useState } from 'react'

const ExpensiveItem = React.memo(function ExpensiveItem({value}){
  // simulate expensive render
  const now = Date.now()
  while(Date.now() - now < 5){}
  return <div>{value}</div>
})

export default function MemoDemo(){
  const [count, setCount] = useState(0)
  const [items] = useState(['a','b','c'])
  return (
    <div>
      <button onClick={() => setCount(c => c+1)}>Inc {count}</button>
      {items.map((it, i) => <ExpensiveItem key={i} value={it} />)}
    </div>
  )
}
