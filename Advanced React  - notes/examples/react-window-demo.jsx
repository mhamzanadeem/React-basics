// react-window-demo.jsx
import React from 'react'
import { FixedSizeList as List } from 'react-window'

function Row({index, style, data}){
  return <div style={style}>{data[index]}</div>
}

export default function ReactWindowDemo({items}){
  return (
    <List height={300} itemCount={items.length} itemSize={30} width={400} itemData={items}>
      {Row}
    </List>
  )
}
