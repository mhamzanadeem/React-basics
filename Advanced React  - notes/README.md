# React Performance and Internals Notes

Advanced, interview- and industry-focused notes covering React internals, rendering behavior, performance optimization techniques, tools, and practical examples. This repository is designed for senior frontend engineers preparing for high-level interviews and production performance work.

Learning roadmap

1. `01-react-internals.md` — deep dive into Virtual DOM, Reconciliation, Commit phase, and Fiber architecture.
2. `02-rerender-control.md` — memoization techniques: `React.memo`, `useMemo`, `useCallback`, and when optimizations hurt.
3. `03-loading-strategy.md` — code splitting, lazy loading, images, and `useTransition` strategy for non-blocking updates.
4. `04-list-virtualization-and-advanced.md` — virtualization, throttle/debounce, web workers, and fragments.
5. `05-devtools-profiler.md` — how to profile, detect bottlenecks, and verify fixes.

Examples folder contains runnable snippets illustrating reconciliation, memo, useMemo, useCallback, lazy loading, transitions, react-window, throttle/debounce, and web workers.

Recommended study order

- Start with `01-react-internals.md` to understand how React works under the hood.
- Move to `02-rerender-control.md` and `04-list-virtualization-and-advanced.md` for optimization techniques.
- Read `03-loading-strategy.md` for user-perceived performance strategies.
- Use `05-devtools-profiler.md` with the `examples/` folder to practice profiling and tuning.

Repository navigation guide

- `examples/` — runnable code snippets
- `01-react-internals.md` — internals and architecture
- `02-rerender-control.md` — memoization and trade-offs
- `03-loading-strategy.md` — loading techniques and concurrent features
- `04-list-virtualization-and-advanced.md` — virtualization, workers, utils
- `05-devtools-profiler.md` — profiling workflow and case studies
