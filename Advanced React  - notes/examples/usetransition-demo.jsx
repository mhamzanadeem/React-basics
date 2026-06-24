// usetransition-demo.jsx
import React, { useState, useTransition, useMemo } from 'react'

export default function UseTransitionDemo(){
  const [isPending, startTransition] = useTransition()
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('')
  const items = useMemo(() => Array.from({length:10000}, (_,i)=>`item-${i}`), [])

  function onChange(e){
    const v = e.target.value
    setQuery(v)
    startTransition(() => setFilter(v))
  }

  const results = useMemo(() => items.filter(it => it.includes(filter)), [items, filter])

  return (
    <div>
      <input value={query} onChange={onChange} />
      {isPending ? <div>Updating...</div> : null}
      <div style={{height:200, overflow:'auto'}}>
        <ul>{results.slice(0,200).map(r => <li key={r}>{r}</li>)}</ul>
      </div>
    </div>
  )
}
