// ============================================
// Day 02 - Callbacks
// React 30-Day Challenge | Prajwal M Rao
// ============================================

// JS is single-threaded — it runs one line at a time.
// But some tasks take time (network, timers, file reads).
// Instead of freezing, JS moves on and "calls back" when ready.

// -----------------------------
// 1. What a callback is
// -----------------------------

// A callback is just a function passed as an argument to another function
function greet(name, callback) {
  console.log("Hello,", name);
  callback(); // call it when ready
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Prajwal", sayBye); // pass sayBye as a callback
// Hello, Prajwal
// Goodbye!

// -----------------------------
// 2. setTimeout — async callback
// -----------------------------
console.log("1. Script starts");

setTimeout(() => {
  console.log("3. Runs after 1 second (async!)");
}, 1000);

console.log("2. Script ends — this runs BEFORE the timeout callback");

// Output order: 1 → 2 → (1 second later) → 3
// This shows JS doesn't wait — it moves on immediately

// -----------------------------
// 3. setInterval — repeating callback
// -----------------------------
let count = 0;

const intervalId = setInterval(() => {
  count++;
  console.log("Tick:", count);
  if (count === 3) {
    clearInterval(intervalId); // stop after 3 ticks
    console.log("Interval stopped");
  }
}, 500);

// -----------------------------
// 4. Simulating async data fetching with callbacks
// -----------------------------
function getUser(id, callback) {
  console.log("Fetching user", id, "...");
  setTimeout(() => {
    const user = { id, name: "Prajwal", city: "Bengaluru" };
    callback(null, user); // null = no error, user = data
  }, 500);
}

function getPosts(userId, callback) {
  console.log("Fetching posts for user", userId, "...");
  setTimeout(() => {
    const posts = [
      { id: 1, title: "Learning JS" },
      { id: 2, title: "React Basics" },
    ];
    callback(null, posts);
  }, 500);
}

// Node-style callbacks: first arg is error, second is data
getUser(1, (err, user) => {
  if (err) return console.log("Error:", err);
  console.log("Got user:", user.name);

  getPosts(user.id, (err, posts) => {
    if (err) return console.log("Error:", err);
    console.log("Got posts:", posts.length);
    // Imagine another level here — callback hell begins
  });
});

// -----------------------------
// 5. The problem: Callback Hell
// -----------------------------

// When you chain many async steps, code becomes deeply nested and unreadable.
// This is why Promises were introduced.

// Callback hell (don't write code like this):
// doStep1((result1) => {
//   doStep2(result1, (result2) => {
//     doStep3(result2, (result3) => {
//       doStep4(result3, (result4) => {
//         console.log("Finally done:", result4); // 4 levels deep!
//       });
//     });
//   });
// });

console.log("\n--- Callbacks Summary ---");
console.log("Callbacks = functions passed to other functions");
console.log("Used in: setTimeout, setInterval, event listeners, array methods");
console.log("Problem: deep nesting = 'callback hell'");
console.log("Solution: Promises (next file!)");