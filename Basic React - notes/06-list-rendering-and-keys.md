# List Rendering and Keys

## Definition

Rendering lists in React typically involves using `Array.prototype.map()` to produce elements. Keys help React identify elements between renders.

## Why it is used

- To render collections efficiently and maintain element identity during updates

## Syntax

```js
items.map(item => <li key={item.id}>{item.text}</li>)
```

## Examples

- In Smart To-Do List we use `task.id` as the key when rendering tasks.

## Common mistakes

- Using array index as key when items can be reordered — leads to rendering bugs

## Interview Questions

- Why are keys important in React?

## Best Practices

- Use stable unique IDs for keys
- Avoid using array indices as keys when list can change
