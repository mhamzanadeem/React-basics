# Smart To-Do List — a beginner-friendly React (Vite) example

Smart To-Do List is a compact, easy-to-read React app (created with Vite) that demonstrates core React concepts for beginners: functional components, props, `useState`, `useEffect`, conditional rendering, and list rendering with unique keys. The repository also includes a notes folder with short, focused markdown lessons that reinforce each concept.

## Quick One-liner

Smart To-Do List — a simple React app + notes demonstrating how to build, persist, and manage a to-do list using functional components and hooks.

## Project Sections

- Project source: [src/App.jsx](src/App.jsx), [src/main.jsx](src/main.jsx), [src/App.css](src/App.css)
- Components: [src/components/TaskForm.jsx](src/components/TaskForm.jsx), [src/components/TaskList.jsx](src/components/TaskList.jsx), [src/components/TaskItem.jsx](src/components/TaskItem.jsx), [src/components/TaskStats.jsx](src/components/TaskStats.jsx)
- Notes and reference: [notes/README.md](notes/README.md) and the `notes/` markdown files

## Features

- Add Task: enter a task title and click Add to create a new task object `{id, text, completed}`.
- Display Tasks: tasks render dynamically via `map()` with stable `task.id` keys.
- Complete Task: toggle a task's `completed` state; completed tasks show a line-through and a "Done" badge.
- Delete Task: remove tasks with the Delete button.
- Task Statistics: see Total, Completed, and Remaining tasks.
- Persistence: tasks persist to `localStorage` using `useEffect`.
- Conditional Rendering: empty-state message when list is empty; Done badge shown only when completed.

## Concepts Covered (short cheatsheet)

- Functional Components

  Definition: Components implemented as plain JavaScript functions returning JSX.

  Why: Simpler, composeable, and able to use hooks like `useState` and `useEffect`.

  Example:

  ```js
  function Greeting({ name }) {
    return <h1>Hello {name}</h1>
  }
  ```

- Props

  Definition: Inputs passed from parent to child components.

  Why: Enable composition and reuse; children receive data and callbacks from parents.

  Example: ` <TaskForm addTask={addTask} /> `

- useState

  Definition: Hook for local component state.

  Why: Keep interactive data (input text, tasks array) that drives rendering.

  Example:

  ```js
  const [tasks, setTasks] = useState([])
  ```

- useEffect

  Definition: Hook for side effects (fetching, subscriptions, localStorage).

  Why: Load tasks on mount, and persist tasks when they change.

  Example:

  ```js
  useEffect(() => {
    const saved = localStorage.getItem('tasks')
    if (saved) setTasks(JSON.parse(saved))
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])
  ```

- Conditional Rendering

  Definition: Render different UI based on state.

  Example:

  ```js
  {tasks.length === 0 ? <p>No tasks available.</p> : <TaskList tasks={tasks} />}
  ```

- List Rendering & Keys

  Definition: Use `map()` to render arrays; provide stable unique `key` props.

  Why: Keys help React match elements across renders for efficient updates.

  Example: `tasks.map(task => <TaskItem key={task.id} task={task} />)`

## Notes Repository

See the `notes/` folder for compact lessons and examples for each concept:

- [notes/01-functional-components.md](notes/01-functional-components.md)
- [notes/02-props.md](notes/02-props.md)
- [notes/03-usestate.md](notes/03-usestate.md)
- [notes/04-useeffect.md](notes/04-useeffect.md)
- [notes/05-conditional-rendering.md](notes/05-conditional-rendering.md)
- [notes/06-list-rendering-and-keys.md](notes/06-list-rendering-and-keys.md)
- [notes/07-project-walkthrough.md](notes/07-project-walkthrough.md)

## Setup & Run

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Preview production build:

```bash
npm run preview
```

## How Acceptance Criteria Are Met

- Functional Components only: All components are functions (`App.jsx`, components/*).
- Props passed correctly: `App` → `TaskForm` (`addTask`), `App` → `TaskList` (`tasks`, `toggleTask`, `deleteTask`), `TaskList` → `TaskItem` (`task`, `toggleTask`, `deleteTask`), `App` → `TaskStats` (counts).
- `useState`: used for `tasks` and controlled input in `TaskForm`.
- `useEffect`: loads and saves tasks to `localStorage` (see [src/App.jsx](src/App.jsx)).
- Conditional Rendering: empty message and Done badge implemented in `[src/components/TaskList.jsx](src/components/TaskList.jsx)` and `[src/components/TaskItem.jsx](src/components/TaskItem.jsx)`.
- List Rendering & Keys: `tasks.map(...)` with `key={task.id}` in [src/components/TaskList.jsx](src/components/TaskList.jsx).
- Clean folder structure: `src/` with `components/` and `notes/` folder present.
- Beginner-friendly code and comments: source files include short explanatory comments and clear naming.

## Files to Open First

- Start with: [src/App.jsx](src/App.jsx)
- Then inspect: [src/components/TaskForm.jsx](src/components/TaskForm.jsx), [src/components/TaskList.jsx](src/components/TaskList.jsx), [src/components/TaskItem.jsx](src/components/TaskItem.jsx)
- Read: [notes/07-project-walkthrough.md](notes/07-project-walkthrough.md) for a guided tour.

---

If you want, I can run `npm install` and start the dev server now, or convert the CSS to CSS Modules — which would you prefer next?
