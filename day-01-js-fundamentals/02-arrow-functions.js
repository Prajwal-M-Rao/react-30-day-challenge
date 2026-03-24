// ============================================
// Day 01 - Arrow Functions
// React 30-Day Challenge | Prajwal M Rao
// ============================================

// -----------------------------
// 1. Traditional vs Arrow function
// -----------------------------

// Traditional
function addTraditional(a, b) {
  return a + b;
}

// Arrow — same result, shorter syntax
const addArrow = (a, b) => a + b;

console.log("Traditional:", addTraditional(3, 4)); // 7
console.log("Arrow:", addArrow(3, 4));             // 7

// -----------------------------
// 2. Single parameter — no parentheses needed
// -----------------------------
const double = n => n * 2;
const square = n => n * n;
const greet  = name => `Hello, ${name}!`;

console.log(double(5));       // 10
console.log(square(6));       // 36
console.log(greet("Prajwal")); // Hello, Prajwal!

// -----------------------------
// 3. No parameters — empty parentheses required
// -----------------------------
const sayHi = () => "Hi there!";
const getDate = () => new Date().toDateString();

console.log(sayHi());    // Hi there!
console.log(getDate());  // e.g. Tue Mar 24 2026

// -----------------------------
// 4. Multi-line body — use curly braces + return
// -----------------------------
const greetUser = (name, city) => {
  const message = `Hello, ${name} from ${city}!`;
  return message.toUpperCase();
};

console.log(greetUser("Prajwal", "Bengaluru")); // HELLO, PRAJWAL FROM BENGALURU!

// -----------------------------
// 5. Returning an object literal — wrap in parentheses
// -----------------------------
const makeUser = (name, age) => ({ name, age }); // shorthand property names
const newUser = makeUser("Priya", 22);
console.log("New user:", newUser); // { name: 'Priya', age: 22 }

// -----------------------------
// 6. Arrow functions as callbacks (the most common use in React)
// -----------------------------
const numbers = [1, 2, 3, 4, 5];

// Traditional callback
const doubledTraditional = numbers.map(function(n) { return n * 2; });

// Arrow callback — much cleaner
const doubledArrow = numbers.map(n => n * 2);

console.log("Doubled (traditional):", doubledTraditional);
console.log("Doubled (arrow):", doubledArrow);

// -----------------------------
// 7. Chaining with arrow functions
// -----------------------------
const students = [
  { name: "Prajwal", score: 85 },
  { name: "Ananya",  score: 92 },
  { name: "Rohan",   score: 74 },
  { name: "Sneha",   score: 88 },
];

const topStudents = students
  .filter(s => s.score >= 80)
  .map(s => `${s.name} (${s.score})`);

console.log("Top students:", topStudents);
// ['Prajwal (85)', 'Ananya (92)', 'Sneha (88)']

// -----------------------------
// 8. Arrow functions & 'this' (important difference from regular functions)
// -----------------------------
const timer = {
  seconds: 0,
  // Arrow function inherits 'this' from the surrounding scope
  start() {
    // If we used function() here, 'this' would be undefined in strict mode
    const tick = () => {
      this.seconds++;
    };
    tick();
    tick();
    tick();
    console.log("Timer seconds:", this.seconds); // 3
  }
};

timer.start();

console.log("\n--- Arrow Function Rules ---");
console.log("1. Single param → no parens: n => n * 2");
console.log("2. Single expression → no curly braces or return");
console.log("3. Multi-line → use { } and return");
console.log("4. Return object → wrap in (): () => ({ key: value })");
console.log("5. Arrow functions inherit 'this' from parent scope");