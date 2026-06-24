// usecallback-demo.jsx
import React, { useCallback, useState } from 'react'

const Child = React.memo(function Child({onAction}){
  console.log('Child render')
  return <button onClick={onAction}>Action</button>
})

export default function UseCallbackDemo(){
  const [count, setCount] = useState(0)
  const onAction = useCallback(() => setCount(c => c+1), [])
  return (
    <div>
      <Child onAction={onAction} />
      <div>Count: {count}</div>
    </div>
  )
}
