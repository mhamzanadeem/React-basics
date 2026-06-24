# Re-render Control and Memoization

## Concept Overview

This note covers strategies to control unnecessary re-renders and stabilize references in React: `React.memo`, `useMemo`, and `useCallback`. It explains trade-offs and real-world guidance for when to optimize.

## Why It Exists

- To avoid expensive renders of large component subtrees when unrelated state changes.
- To stabilize references passed to children (functions or objects) so they don't cause child re-renders.

## Internal Working

### React.memo

- `React.memo(Component)` returns a component that shallowly compares props. If props are equal (shallow), React skips re-rendering that component.

### useMemo

- `useMemo` caches a computed value between renders until dependencies change. Useful for expensive computations.

### useCallback

- `useCallback(fn, deps)` returns a memoized function reference that changes only when `deps` change; useful when passing callbacks to memoized children.

## Real-World Use Cases

- Memoize list item components that render complex UI.
- Memoize sorted/filtered arrays derived from large datasets.
- Stabilize callbacks passed deep into tree to avoid re-renders.

## Interview Questions

- When would you use `useMemo` vs `useCallback`?
- How does `React.memo` decide whether to skip a render?

## Common Mistakes

- Overusing `useMemo` for cheap computations adds memory overhead and code complexity.
- Memoizing objects and arrays incorrectly (not memoizing inputs) still causes re-renders.

## Performance Trade-offs

- Benefit: reduce expensive re-renders.
- Cost: additional memory for cached values and CPU to compare dependencies.

Comparison Table

```
Technique      | Solves                      | Cost                 | Use When
---------------|-----------------------------|----------------------|-------------------------
React.memo     | Skip child renders          | Shallow compare cost | Child renders often but props stable
useMemo        | Expensive computations      | Memory + compare     | Computation heavy
useCallback    | Function identity stability | Memory + compare     | Passing callback to memoized child
```

## Best Practices

- Measure before optimizing. Use profiler to identify actual hotspots.
- Use `useMemo` for expensive calculations (filter/sort on large arrays).
- Prefer small components and keep props minimal.

## Diagrams

```
Parent (state A)         Child (memoized)
  render A changes -> props to child unchanged -> child skipped
```

## Code Examples

React.memo example:

```jsx
const Item = React.memo(function Item({value}){
  // expensive render
  return <div>{value}</div>
})

function List({items}){
  return items.map(i => <Item key={i.id} value={i.text} />)
}
```

useMemo example:

```jsx
function HeavyList({items, filter}){
  const filtered = useMemo(() => {
    // expensive filter
    return items.filter(i => i.text.includes(filter))
  }, [items, filter])
  return filtered.map(i => <div key={i.id}>{i.text}</div>)
}
```

useCallback example:

```jsx
function Parent(){
  const [count, setCount] = useState(0)
  const onClick = useCallback(() => setCount(c => c + 1), [])
  return <Child onClick={onClick} />
}
```

## Mini Exercises

1. Convert a frequently re-rendering list item to `React.memo` and measure render counts.
2. Replace a naive expensive computation with `useMemo` and measure time saved.

### Solutions (guidance)

1. Wrap item and ensure props are primitive or memoized; verify re-renders drop.
2. Move computation into `useMemo` with correct deps.

## Senior-Level Notes

- Consider bundling memoization strategies in component libraries; be careful with prop shapes (avoid inline objects/functions in JSX).
- Profile memory and GC; many memoized values can increase memory pressure in long-lived pages.
