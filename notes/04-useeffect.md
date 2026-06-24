# useEffect

Definition

`useEffect` is a hook for running side-effects (data fetching, subscriptions, localStorage) in functional components.

Why it is used

- To perform work after render and to manage lifecycles like mount/unmount/update

Syntax

```js
useEffect(() => {
  // effect
  return () => {
    // cleanup
  }
}, [dependencies])
```

Examples

- Persisting to localStorage:

```js
useEffect(() => {
  localStorage.setItem('tasks', JSON.stringify(tasks))
}, [tasks])
```

Common mistakes

- Forgetting dependency array leading to repeated effects
- Using effects for logic that belongs in render

Interview Questions

- When does an effect run if the dependency array is empty?
- How do you perform cleanup in useEffect?

Best Practices

- Declare dependencies explicitly
- Keep effects focused and small
