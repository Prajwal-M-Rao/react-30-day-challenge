// ============================================
// Day 02 - Promises
// React 30-Day Challenge | Prajwal M Rao
// ============================================

// A Promise is an object representing an async operation.
// States:
//   pending   → still waiting
//   fulfilled → succeeded, .then() fires
//   rejected  → failed, .catch() fires

// -----------------------------
// 1. Creating a Promise
// -----------------------------
const myPromise = new Promise((resolve, reject) => {
  const success = true; // flip to false to test rejection

  setTimeout(() => {
    if (success) {
      resolve("Data loaded successfully!");
    } else {
      reject(new Error("Something went wrong"));
    }
  }, 500);
});

// -----------------------------
// 2. Consuming with .then() .catch() .finally()
// -----------------------------
myPromise
  .then(data => {
    console.log("Success:", data);
    return data.toUpperCase(); // return value is passed to next .then()
  })
  .then(upper => console.log("Uppercased:", upper))
  .catch(err => console.log("Error:", err.message))
  .finally(() => console.log("Always runs — good for cleanup/loading state"));

// -----------------------------
// 3. Promise-based helper (replaces callback version)
// -----------------------------
function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!id) return reject(new Error("No ID provided"));
      resolve({ id, name: "Prajwal", city: "Bengaluru" });
    }, 300);
  });
}

function getPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: "Learning Async JS" },
        { id: 2, title: "React in 30 Days" },
      ]);
    }, 300);
  });
}

// -----------------------------
// 4. Promise chaining — flat, readable
// -----------------------------
getUser(1)
  .then(user => {
    console.log("User:", user.name);
    return getPosts(user.id); // return next promise to chain it
  })
  .then(posts => {
    console.log("Posts:", posts.map(p => p.title));
  })
  .catch(err => console.log("Chain error:", err.message));

// Compare this to callback hell — same result, flat structure!

// -----------------------------
// 5. Promise.all — run multiple in parallel
// -----------------------------
// All must succeed — if one fails, the whole thing rejects
const p1 = new Promise(r => setTimeout(() => r("Users loaded"), 300));
const p2 = new Promise(r => setTimeout(() => r("Posts loaded"), 200));
const p3 = new Promise(r => setTimeout(() => r("Comments loaded"), 400));

Promise.all([p1, p2, p3]).then(results => {
  console.log("All done:", results);
  // ['Users loaded', 'Posts loaded', 'Comments loaded']
});

// -----------------------------
// 6. Promise.allSettled — run all, collect all results (even failures)
// -----------------------------
const safe1 = Promise.resolve("OK");
const safe2 = Promise.reject(new Error("Failed"));
const safe3 = Promise.resolve("Also OK");

Promise.allSettled([safe1, safe2, safe3]).then(results => {
  results.forEach(result => {
    if (result.status === "fulfilled") {
      console.log("Fulfilled:", result.value);
    } else {
      console.log("Rejected:", result.reason.message);
    }
  });
});

// -----------------------------
// 7. Promise.race — first one to resolve/reject wins
// -----------------------------
const fast = new Promise(r => setTimeout(() => r("Fast!"), 100));
const slow = new Promise(r => setTimeout(() => r("Slow"), 500));

Promise.race([fast, slow]).then(winner => {
  console.log("Winner:", winner); // "Fast!"
});

console.log("\n--- Promises Summary ---");
console.log(".then()         → handle success");
console.log(".catch()        → handle errors");
console.log(".finally()      → always runs");
console.log("Promise.all()   → parallel, all must pass");
console.log("Promise.allSettled() → parallel, collect all outcomes");
console.log("Promise.race()  → first one wins");