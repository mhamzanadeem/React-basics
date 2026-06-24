# useState

## Definition

`useState` is a React hook that lets functional components hold local state.

## Why it is used

- To store and update values that affect rendering (e.g., form inputs, toggles)

## Syntax

```js
const [value, setValue] = useState(initialValue)
```

## Examples

```js
const [count, setCount] = useState(0)
// update
setCount(prev => prev + 1)
```

## Common mistakes

- Updating state directly instead of using the setter
- Using stale closures — prefer functional updates when relying on previous state

## Interview Questions

- How do you update state based on previous state?
- Why can't you mutate state directly?

## Best Practices

- Keep state minimal and derive values when possible
- Use descriptive state names
