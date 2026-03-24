// ============================================
// Day 01 - Spread & Rest Operators
// React 30-Day Challenge | Prajwal M Rao
// ============================================

// Both use the same ... syntax but work in opposite directions:
// Spread  → unpacks an iterable into individual elements
// Rest    → collects individual elements into an array

// ============================================
// SPREAD OPERATOR (...)
// ============================================

// -----------------------------
// 1. Spread with Arrays
// -----------------------------

// Combine arrays
const frontend = ["HTML", "CSS", "JavaScript"];
const backend  = ["Node.js", "Express", "MongoDB"];
const fullStack = [...frontend, ...backend];
console.log("Full stack:", fullStack);
// ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'MongoDB']

// Insert at specific position
const withReact = [...frontend.slice(0, 2), "React", ...frontend.slice(2)];
console.log("With React:", withReact);
// ['HTML', 'CSS', 'React', 'JavaScript']

// Copy an array (shallow copy)
const original = [1, 2, 3];
const copy = [...original];
copy.push(4);
console.log("Original:", original); // [1, 2, 3] — untouched
console.log("Copy:", copy);         // [1, 2, 3, 4]

// Spread with Math functions
const scores = [88, 94, 72, 56, 100, 83];
console.log("Max:", Math.max(...scores)); // 100
console.log("Min:", Math.min(...scores)); // 56

// Convert string to array of characters
const str = "Prajwal";
const chars = [...str];
console.log("Chars:", chars); // ['P','r','a','j','w','a','l']

// Remove duplicates using Set + spread
const withDupes = [1, 2, 2, 3, 4, 4, 5];
const unique = [...new Set(withDupes)];
console.log("Unique:", unique); // [1, 2, 3, 4, 5]

// -----------------------------
// 2. Spread with Objects
// -----------------------------

// Copy an object
const baseConfig = { theme: "dark", language: "en" };
const configCopy = { ...baseConfig };
configCopy.theme = "light";
console.log("Base config:", baseConfig); // { theme: 'dark', language: 'en' } — untouched
console.log("Config copy:", configCopy); // { theme: 'light', language: 'en' }

// Merge objects
const defaultSettings = { fontSize: 14, theme: "light", notifications: true };
const userSettings    = { theme: "dark", fontSize: 16 };

// userSettings properties override defaults where they overlap
const mergedSettings = { ...defaultSettings, ...userSettings };
console.log("Merged:", mergedSettings);
// { fontSize: 16, theme: 'dark', notifications: true }

// Add/override specific properties (very common in React state updates!)
const user = { name: "Prajwal", age: 22, city: "Bengaluru" };
const updatedUser = { ...user, age: 23, country: "India" };
console.log("Updated user:", updatedUser);
// { name: 'Prajwal', age: 23, city: 'Bengaluru', country: 'India' }

// This is how you update state in React without mutation:
// setUser(prev => ({ ...prev, age: 23 }))

// -----------------------------
// 3. Spread in Function Calls
// -----------------------------
function sum3(a, b, c) {
  return a + b + c;
}

const nums = [10, 20, 30];
console.log("Sum:", sum3(...nums)); // 60

// ============================================
// REST OPERATOR (...)
// ============================================

// -----------------------------
// 4. Rest in Function Parameters
// -----------------------------

// Collect all extra arguments into an array
function sumAll(...numbers) {
  return numbers.reduce((acc, n) => acc + n, 0);
}

console.log(sumAll(1, 2, 3));           // 6
console.log(sumAll(10, 20, 30, 40));    // 100
console.log(sumAll(5));                 // 5

// Mix named params with rest
function log(level, ...messages) {
  console.log(`[${level.toUpperCase()}]`, messages.join(" | "));
}

log("info", "Server started", "Port 3000");
// [INFO] Server started | Port 3000
log("error", "DB connection failed");
// [ERROR] DB connection failed

// -----------------------------
// 5. Rest in Array Destructuring
// -----------------------------
const [head, ...tail] = [10, 20, 30, 40, 50];
console.log("Head:", head); // 10
console.log("Tail:", tail); // [20, 30, 40, 50]

const [first, second, ...rest] = ["a", "b", "c", "d", "e"];
console.log(first, second, rest); // a b ['c','d','e']

// -----------------------------
// 6. Rest in Object Destructuring
// -----------------------------
const { name, age, ...otherDetails } = user;
console.log("Name:", name);              // Prajwal
console.log("Age:", age);               // 22
console.log("Other:", otherDetails);    // { city: 'Bengaluru' }

// Practical use: separate props you need from ones you pass forward (React pattern)
function Button({ label, onClick, ...htmlProps }) {
  console.log("Label:", label);
  console.log("HTML Props:", htmlProps); // className, style, disabled, etc.
}

Button({ label: "Submit", onClick: () => {}, className: "btn", disabled: false });

console.log("\n--- Spread vs Rest ---");
console.log("Spread: ...arr → expands items OUT  (used in expressions)");
console.log("Rest:   ...arr → collects items IN   (used in parameters/destructuring)");
console.log("React uses spread heavily for immutable state updates: { ...prev, key: val }");