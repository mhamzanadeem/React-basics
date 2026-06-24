# Conditional Rendering

Definition

Conditional rendering is the practice of showing different UI depending on component state or props.

Why it is used

- To provide feedback and change layout depending on data (e.g., empty lists, loading states)

Syntax

```js
{items.length === 0 ? <Empty /> : <List />}
```

Examples

- Empty state in Smart To-Do List:

```js
{tasks.length === 0 ? (
  <p>No tasks available. Add your first task.</p>
) : (
  <TaskList tasks={tasks} />
)}
```

Common mistakes

- Rendering null unexpectedly
- Overcomplicating conditions — prefer small boolean flags

Interview Questions

- How would you show a loading spinner while fetching data?

Best Practices

- Keep conditions readable
- Extract conditional blocks into small components where helpful
