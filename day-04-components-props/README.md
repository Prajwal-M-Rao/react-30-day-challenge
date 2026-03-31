# Day 04 — Components, Props & Composition

## 🎯 Objective
Learn how React components communicate and build reusable UI pieces. Focus on passing multiple props and practicing component composition.

## 📌 Concepts Practiced
- **Functional Components:** Writing standard JavaScript functions that return JSX.
- **Props (Passing Data):** Passing dynamic data (strings, arrays, images) from the parent (`App.jsx`) down to the children.
- **Component Composition:** Nesting components to build complex UIs (e.g., rendering multiple `<SkillBadge>` components *inside* the `<ProfileCard>` component).

## 🛠️ Mini Task Completed
**Team Profiles UI:** Built a reusable `ProfileCard` component. The `App` component holds an array of user data and maps over it, passing multiple props down to dynamically generate beautiful, reusable profile cards.

## 🚀 How to Run
```bash
# Install dependencies
npm install

# Start the development server
npm run dev