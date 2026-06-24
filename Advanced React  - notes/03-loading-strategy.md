# Loading Strategy and Concurrent Features

## Concept Overview

This note covers strategies for reducing time-to-interactive and improving perceived performance: code splitting, lazy loading (components and images), Suspense, and `useTransition` for non-blocking updates.

## Why It Exists

- Reduce initial bundle size, improving load time.
- Defer non-critical work so the UI remains responsive.

## Internal Working

### Code Splitting

- Bundlers (e.g., Vite/Rollup/Webpack) split code at dynamic `import()` boundaries into separate chunks loaded on demand.

### React.lazy and Suspense

- `React.lazy` wraps dynamic imports into components that load asynchronously. `Suspense` provides fallback UI while loading.

### useTransition

- `useTransition` marks updates as non-urgent; concurrent renderer can yield to more urgent updates and keep UI responsive.

## Real-World Use Cases

- Route-level code splitting to reduce initial payload.
- Lazy-load heavy components (charts, maps) only when needed.
- Use `useTransition` for search filtering to keep typing snappy.

## Interview Questions

- How does `React.lazy` differ from dynamic import directly?
- When would you use `useTransition`?

## Common Mistakes

- Over-splitting leading to many small network requests.
- Not providing accessible fallback UI within `Suspense`.

## Performance Trade-offs

- Smaller initial bundles vs increased runtime chunk loading latency.

## Best Practices

- Group related modules for route-level splits.
- Provide sensible fallbacks for Suspense; avoid blocking the entire app.

## Diagrams

Code-splitting flow:

```
App (initial bundle) --+---> chunk-dashboard.js (load on /dashboard)
                       +---> chunk-editor.js (load on open editor)
```

## Code Examples

React.lazy example:

```jsx
const Heavy = React.lazy(() => import('./HeavyComponent'))

function Page(){
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Heavy />
    </Suspense>
  )
}
```

useTransition example:

```jsx
function Search({items}){
  const [query, setQuery] = useState('')
  const [isPending, startTransition] = useTransition()
  const [filter, setFilter] = useState('')

  function onChange(e){
    const v = e.target.value
    setQuery(v)
    startTransition(() => setFilter(v))
  }

  const results = useMemo(() => items.filter(i => i.includes(filter)), [items, filter])

  return (
    <div>
      <input value={query} onChange={onChange} />
      {isPending ? <div>Updating...</div> : null}
      <ul>{results.map(r => <li key={r}>{r}</li>)}</ul>
    </div>
  )
}
```

## Mini Exercises

1. Convert a route to lazy load and measure initial bundle size reduction.
2. Apply `useTransition` to a search and compare typing latency with/without it.

### Solutions (guidance)

1. Use React.lazy and dynamic import; inspect produced chunks in build output.
2. Use Profiler to compare commit times and perceived input latency.

## Senior-Level Notes

- Use server-side rendering or partial hydration for critical content and lazy-load non-critical widgets.
- Balance network requests and caching: prefetch routes you expect users to open next, but avoid overfetching.
