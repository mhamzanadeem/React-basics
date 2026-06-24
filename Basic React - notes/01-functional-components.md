# Functional Components

## Definition

Functional components are JavaScript functions that return React elements (JSX). They are the modern standard for building React UI and can use hooks like `useState` and `useEffect`.

## Why it is used

- Simpler syntax than class components
- Easier to test and reason about
- Hooks provide powerful features without classes

## Syntax

```js
function MyComponent(props) {
  return <div>Hello {props.name}</div>
}
```

## Examples

```js
const Greeting = ({ name }) => <h1>Hello {name}</h1>
```

## Common mistakes

- Trying to use lifecycle methods (like componentDidMount) directly — use `useEffect` instead
- Mutating props directly

## Interview Questions

- What are functional components?
- How do hooks replace lifecycle methods?

## Best Practices

- Keep components small and focused
- Use descriptive names
- Use hooks for state and side-effects
