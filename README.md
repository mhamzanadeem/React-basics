# Core React Notes and  Smart To-Do List

Smart To-Do List is a compact, easy-to-read React app (created with Vite) that demonstrates core React concepts for beginners: functional components, props, `useState`, `useEffect`, conditional rendering, and list rendering with unique keys. The repository also includes a notes folder with short, focused markdown lessons that reinforce each concept.

## Quick One-liner

Smart To-Do List — a simple React app  demonstrating how to build, persist, and manage a to-do list using functional components and hooks.

## Repository Directory Structure

Below is the GitHub-friendly directory tree for this project:

```
React Basics/
├── .gitignore
├── index.html
├── package.json
├── README.md
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── App.css
│   └── components/
│       ├── TaskForm.jsx
│       ├── TaskList.jsx
│       ├── TaskItem.jsx
│       └── TaskStats.jsx
└── notes/
	├── README.md
	├── 01-functional-components.md
	├── 02-props.md
	├── 03-usestate.md
	├── 04-useeffect.md
	├── 05-conditional-rendering.md
	├── 06-list-rendering-and-keys.md
	└── 07-project-walkthrough.md
```

Open `src/App.jsx` to see the application entry and `notes/` for the learning material.

## Features

- Add Task: enter a task title and click Add to create a new task object `{id, text, completed}`.
- Display Tasks: tasks render dynamically via `map()` with stable `task.id` keys.
- Complete Task: toggle a task's `completed` state; completed tasks show a line-through and a "Done" badge.
- Delete Task: remove tasks with the Delete button.
- Task Statistics: see Total, Completed, and Remaining tasks.
- Persistence: tasks persist to `localStorage` using `useEffect`.
- Conditional Rendering: empty-state message when list is empty; Done badge shown only when completed.


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

