// lazy-loading-demo.jsx
import React, { Suspense } from 'react'
const Heavy = React.lazy(() => import('./heavy-component-placeholder'))

export default function LazyLoadingDemo(){
  return (
    <Suspense fallback={<div>Loading heavy...</div>}>
      <Heavy />
    </Suspense>
  )
}

// Note: create a small module at examples/heavy-component-placeholder.js that exports a component.
