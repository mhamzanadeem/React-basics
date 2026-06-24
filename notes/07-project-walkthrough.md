# Project Walkthrough

Overview

This document explains the Smart To-Do List project structure and how it meets the learning objectives.

Files

- `src/App.jsx` - Root component. Holds state and persistence logic with `useState` and `useEffect`.
- `src/components/TaskForm.jsx` - Input form. Uses `useState` for controlled input and receives `addTask` as a prop.
- `src/components/TaskList.jsx` - Conditionally renders empty state or a list of `TaskItem` components.
- `src/components/TaskItem.jsx` - Renders a single task, handles toggle and delete via callbacks passed as props.
- `src/components/TaskStats.jsx` - Computes and displays task statistics.

How requirements are satisfied

- Functional Components only: All components are functions using hooks.
- Props: Parent passes `addTask`, `tasks`, `deleteTask`, and `toggleTask` as required.
- `useState` & `useEffect`: Used for state management and localStorage persistence.
- Conditional Rendering: Empty state message and Done badge are rendered conditionally.
- List Rendering & Keys: `tasks.map()` with `task.id` keys.

Running the app

1. `npm install`
2. `npm run dev`
