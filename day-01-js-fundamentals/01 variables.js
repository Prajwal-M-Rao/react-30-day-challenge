// ============================================
// Day 01 - Variables & Scope
// React 30-Day Challenge | Prajwal M Rao
// ============================================

// -----------------------------
// 1. const — cannot be reassigned
// -----------------------------
const appName = "React 30-Day Challenge";
const PI = 3.14159;

console.log("App:", appName);
console.log("PI:", PI);

// const with objects/arrays — the reference is locked, but contents can change
const user = { name: "Prajwal", city: "Bengaluru" };
user.city = "Mumbai"; // ✅ allowed — we're mutating, not reassigning
console.log("User:", user);

// const with arrays
const fruits = ["apple", "mango"];
fruits.push("banana"); // ✅ allowed
console.log("Fruits:", fruits);

// -----------------------------
// 2. let — can be reassigned
// -----------------------------
let score = 0;
console.log("Initial score:", score);
score += 10;
console.log("Updated score:", score);

let currentUser = null;
currentUser = "Prajwal";
console.log("Logged in as:", currentUser);

// -----------------------------
// 3. var — avoid (function-scoped, not block-scoped)
// -----------------------------
// var leaks out of blocks — this is why we avoid it
{
  var leaky = "I escape the block!";
  let blockScoped = "I stay inside";
  const alsoScoped = "Me too";
}
console.log("var leaks:", leaky);          // ✅ logs — bad behaviour
// console.log(blockScoped);              // ❌ ReferenceError
// console.log(alsoScoped);              // ❌ ReferenceError

// -----------------------------
// 4. Block scope demo
// -----------------------------
function demoScope() {
  const outerVar = "outer";

  if (true) {
    const innerVar = "inner";
    let innerLet = "inner let";
    console.log("Inside block:", outerVar);  // ✅ can access outer
    console.log("Inside block:", innerVar);  // ✅ accessible here
  }

  console.log("Outside block:", outerVar);   // ✅
  // console.log(innerVar);                  // ❌ ReferenceError
}

demoScope();

// -----------------------------
// 5. Hoisting — var vs let/const
// -----------------------------
// var is hoisted (declared but undefined before assignment)
console.log("hoistedVar before declaration:", typeof hoistedVar); // undefined (not an error!)
var hoistedVar = "I was hoisted";

// let/const are NOT accessible before declaration (Temporal Dead Zone)
// console.log(hoistedLet); // ❌ ReferenceError: Cannot access before initialization
let hoistedLet = "I was NOT hoisted";

console.log("\n--- Summary ---");
console.log("Use const by default");
console.log("Use let when you need to reassign");
console.log("Never use var");