
# Day 05 — State & Events

## 🎯 Objective
Understand how React handles changing data using the `useState` hook and how to capture user interactions using events.

## 📌 Concepts Practiced
- **`useState` Hook:** Learned that standard variables don't trigger UI updates in React. We must use `useState` to tell React when to redraw the screen.
- **Rules of Hooks:** Discovered that hooks must live *inside* the component function, and state cannot be mutated directly (we must use the setter function like `setCount`).
- **Click Events:** Handled button clicks using `onClick={handleClick}`.
- **Input Events:** Controlled an input field using `value={text}` and updated state dynamically on every keystroke using `onChange={(e) => setText(e.target.value)}`.

## 🛠️ Mini Task Completed
**Counter & Input Tracker App:** 
1. Built a counter with "+1" and "-1" buttons to demonstrate numeric state updates.
2. Built a live input tracker that instantly displays exactly what the user is typing to demonstrate string state updates.

## 🚀 How to Run
```bash
# Install dependencies
npm install

# Start the development server
npm run dev