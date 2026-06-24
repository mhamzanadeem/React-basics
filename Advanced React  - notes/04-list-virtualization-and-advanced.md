# List Virtualization and Advanced Techniques

## Concept Overview

Focuses on rendering large lists efficiently (virtualization/windowing), event rate-limiting (throttle/debounce), fragments, and offloading work to Web Workers.

## Why It Exists

- Rendering thousands of DOM nodes is expensive. Virtualization renders only visible items.
- Frequent events (scroll/resize/input) need rate-limiting to avoid jank.

## Internal Working

### react-window (virtualization)

- Calculates visible window based on scroll offset and item size, renders only those items into DOM, and shifts them with padding/margins to appear as full list.

### Throttle / Debounce

- Throttle: ensure a function runs at most once per interval.
- Debounce: delay execution until events stop arriving for a given interval.

### Web Workers

- Run expensive computations off the main thread and communicate via `postMessage`.

## Real-World Use Cases

- Infinite scrolling of feeds or search results.
- Search input with debounce to avoid excessive API calls.
- Offload image processing or heavy calculations to workers.

## Interview Questions

- When would you use virtualization over pagination?
- Explain difference between throttle and debounce.

## Common Mistakes

- Virtualizing items with dynamic heights without proper measurement strategy.
- Debouncing UI updates that should be immediate (reduce perceived responsiveness).

## Performance Trade-offs

- Virtualization reduces DOM nodes but introduces complexity with measuring, scrolling, and accessibility.

## Best Practices

- Prefer virtualization for very large lists (thousands of items).
- Use debounce for search inputs; throttle for scroll/resize handlers.

## Diagrams

Virtualization concept:

```
Scroll viewport
[------visible area------]
items: [0,1,2,3,4,5,6,7,8,...]
Render only items 2..6 and position container to match scroll offset
```

## Code Examples

react-window example (basic):

```jsx
import { FixedSizeList as List } from 'react-window'

function Row({index, style, data}){
  const item = data[index]
  return <div style={style}>{item.text}</div>
}

function Virtualized({items}){
  return (
    <List height={400} itemCount={items.length} itemSize={35} width={'100%'} itemData={items}>
      {Row}
    </List>
  )
}
```

Throttle implementation:

```js
export function throttle(fn, wait){
  let last = 0
  return function(...args){
    const now = Date.now()
    if (now - last >= wait){
      last = now
      fn.apply(this, args)
    }
  }
}
```

Debounce implementation:

```js
export function debounce(fn, wait){
  let t
  return function(...args){
    clearTimeout(t)
    t = setTimeout(() => fn.apply(this, args), wait)
  }
}
```

Web Worker example (main thread):

```js
// main.js
const worker = new Worker('worker.js')
worker.postMessage({type:'heavy', payload: data})
worker.onmessage = (e) => console.log('result', e.data)
```

```js
// worker.js
self.onmessage = (e) => {
  // expensive calc
  const result = heavyCompute(e.data.payload)
  self.postMessage(result)
}
```

## Mini Exercises

1. Implement a virtualized list of 10,000 items using `react-window` and measure memory/paint improvements.
2. Write throttle and debounce utilities and use them on scroll and input events respectively.

### Solutions (guidance)

1. Use `FixedSizeList` or `VariableSizeList` depending on item heights; measure with DevTools.
2. Implement functions above and attach to event listeners.

## Senior-Level Notes

- Virtualization must consider accessibility (screen readers) and keyboard navigation; consider ARIA live regions or alternate pagination for assistive tech.
- Use workers for CPU-bound tasks, but measure serialization costs and data transfer overhead.
