# React Internals

## Concept Overview

This note explains how React represents UI, calculates updates, and applies changes to the DOM. Topics include Virtual DOM, Reconciliation, Commit phase, and Fiber architecture.

## Why It Exists

- Abstract DOM manipulation for better declarative programming model.
- Allow efficient updates by computing minimal DOM mutations.
- Enable features like time-slicing and prioritization via Fiber.

## Internal Working

### Virtual DOM

- The Virtual DOM is an in-memory tree of elements (lightweight JS objects) representing the UI. React elements describe the shape of the UI and are cheap to create.
- On state/prop changes, React produces a new Virtual DOM tree and diffs it against the previous tree to determine what changed.

ASCII Diagram — Element vs DOM

```
Virtual DOM tree         Browser DOM
----------------         ----------
Root                    <div id="root">
 ├─ Header              ├─ <header> ...
 └─ List                └─ <ul> ...
```

### Reconciliation

- Reconciliation is the process of comparing previous and next Virtual DOM trees and computing changes.
- React uses heuristics: if element types are the same, update props and recurse; if different, tear down and create new subtree.
- For lists, keys guide reconciliation to match items across renders.

Heuristic (simplified):

1. If nodes are identical (same reference), skip.
2. If node types differ, replace subtree.
3. If types same, update props and reconcile children (keys used for list diff).

### Commit Phase

- Render phase: React builds or updates Fiber tree; this phase can be paused, aborted, or restarted.
- Commit phase: React applies DOM mutations, runs layout effects (`useLayoutEffect`), and then passive effects (`useEffect`). DOM mutations are batched to minimize layout thrashing.

Lifecycle diagram

```
State change
  ↓
Render Phase (build fiber tree)
  ↓
Reconciliation (diff)
  ↓
Commit Phase (DOM mutations, layout effects)
  ↓
Browser Paint
```

### React Fiber Architecture

- Fiber is the reimplementation of React's core reconciler to enable incremental rendering and better scheduling.
- Each Fiber is a unit of work representing a component instance with links to child/sibling/parent.
- Fiber allows React to pause rendering work, assign priorities, and interleave updates with user interactions.

Senior-level details

- Fibers store lanes and expiration times to represent priority. The scheduler sorts work by lanes and can preempt lower-priority tasks.
- Fiber's double-buffering (current/alternate) provides efficient persistent reconciliation.

## Real-World Use Cases

- Understanding why `key` is critical for list performance and correctness.
- Choosing where to break components to reduce re-render surface.
- Diagnosing expensive renders and layout thrashing.

## Interview Questions

- What is the Virtual DOM and why does React use it?
- Explain the difference between render and commit phases.
- What is Fiber and why was it introduced?

## Common Mistakes

- Treating Virtual DOM diff as O(1) — it's still work and can be expensive for huge trees.
- Overusing keys like array indices for dynamic lists.

## Performance Trade-offs

- More granular components reduce work per update but increase tree size and reconciliation overhead.
- Fiber introduces scheduling flexibility at cost of added complexity in debugging.

## Best Practices

- Use stable keys for list items.
- Break UI into components where isolation improves performance and maintainability.
- Avoid expensive work in render; memoize heavy computations.

## Diagrams

Fiber basic links:

```
parent
  └─ child -> sibling -> sibling
```

## Code Examples

Simple element creation (React.createElement):

```js
const el = React.createElement('div', { className: 'card' }, 'Hello')
// JSX equivalent: <div className="card">Hello</div>
```

List reconciliation example:

```js
// Before
const items = [ {id:1, text: 'a'}, {id:2, text:'b'} ]
// After (reorder)
const items = [ {id:2, text:'b'}, {id:1, text:'a'} ]
// With keys React will move DOM nodes instead of recreating them.
```

## Mini Exercises

1. Create a list component and experiment swapping items with and without stable keys; observe DOM mutations.
2. Read React source: inspect how `createFiber` initializes a fiber node.

### Solutions (short)

1. Without keys, DOM may be recreated; with keys React will reorder nodes.

## Senior-Level Notes

- For production-level performance work, profile commit and layout times, not just render counts. Use DevTools profiler and measure real paint times.
- Understanding Fiber internals helps when designing scheduling-sensitive features (transitions, non-urgent updates).
