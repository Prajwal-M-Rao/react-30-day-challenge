# Day 02 — Async JS, Fetch & DOM Manipulation

## Topics Covered

| File | Topic | Concepts |
|------|-------|----------|
| `01-callbacks.js` | Callbacks | setTimeout, setInterval, callback hell |
| `02-promises.js` | Promises | .then, .catch, .finally, chaining, Promise.all |
| `03-async-await.js` | async / await | try/catch, sequential vs parallel, IIFE |
| `04-dom-manipulation.js` | DOM | select, update, create, events |
| `05-fetch-api.js` | fetch() | fetch pattern, error handling, GitHub API |
| `06-mini-task-github.html` | Mini Task | Full GitHub profile viewer with DOM rendering |

## Key Takeaways

- JS is single-threaded — callbacks let it handle async work without freezing
- Promises clean up callback hell with flat `.then()` chains
- `async/await` is just Promises written to look synchronous
- `fetch()` does NOT throw on 4xx/5xx — always check `response.ok`
- Always parse in two steps: `await fetch(url)` → `await response.json()`
- `Promise.all` runs multiple requests in parallel — faster than sequential awaits
- DOM: select → update → listen for events

## How to Run

```bash
# JS files (Node.js)
node 01-callbacks.js
node 02-promises.js
node 03-async-await.js

# HTML file — open directly in browser
open 06-mini-task-github.html
# or just double-click the file
```

## Mini Task

`06-mini-task-github.html` — open in any browser. It:
- Fetches a GitHub user profile via the GitHub REST API
- Renders avatar, name, bio, and stats to the DOM
- Lists their latest repos with language, stars, and last updated
- Handles errors (404, rate limit, network failure) gracefully
- Loads your profile (`Prajwal-M-Rao`) automatically on open

## Push to GitHub

```bash
git add .
git commit -m "day 02: async JS, fetch, DOM — GitHub profile viewer"
git push
```

## Status: ✅ Complete