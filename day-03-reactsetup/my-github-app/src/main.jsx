// ============================================
// Day 03 - main.jsx (Entry Point)
// src/main.jsx
// React 30-Day Challenge | Prajwal M Rao
// ============================================

// This is where React mounts your app into the HTML.
// It's the bridge between index.html and your React components.

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// 1. Find the <div id="root"> in index.html
// 2. Create a React root inside it
// 3. Render <App /> into it
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// StrictMode:
// - Only active in development (not production)
// - Intentionally renders components twice to catch side-effect bugs
// - Warns about deprecated APIs and unsafe patterns
// - Helps you write cleaner React code — keep it on