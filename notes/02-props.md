# Props

Definition

Props (properties) are the way parent components pass data and callbacks to child components in React.

Why it is used

- To allow component composition
- To make components reusable and configurable

Syntax

```js
function Child({ value, onClick }) {
  return <button onClick={onClick}>{value}</button>
}

function Parent(){
  return <Child value="Click me" onClick={() => alert('hi')} />
}
```

Examples

- Passing data: `<TaskList tasks={tasks} />`
- Passing callbacks: `<TaskForm addTask={addTask} />`

Common mistakes

- Mutating props inside the child
- Forgetting to pass required callbacks

Interview Questions

- How do props differ from state?
- How do you pass functions as props?

Best Practices

- Use prop names that indicate intent
- Keep props minimal — prefer composition
