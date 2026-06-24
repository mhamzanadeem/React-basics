// usememo-demo.jsx
import React, { useMemo, useState } from 'react'

function heavyFilter(items, q){
  // fake heavy CPU work
  for(let i=0;i<100000;i++){}
  return items.filter(it => it.includes(q))
}

export default function UseMemoDemo(){
  const [q, setQ] = useState('')
  const items = ['apple','banana','avocado','berry','cherry']
  const results = useMemo(() => heavyFilter(items, q), [items, q])

  return (
    <div>
      <input value={q} onChange={e=>setQ(e.target.value)} placeholder="filter" />
      <ul>{results.map(r => <li key={r}>{r}</li>)}</ul>
    </div>
  )
}
