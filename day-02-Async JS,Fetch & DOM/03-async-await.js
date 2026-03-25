// ============================================
// Day 02 - async / await
// React 30-Day Challenge | Prajwal M Rao
// ============================================

// async/await is syntactic sugar over Promises.
// Same behaviour — just reads like synchronous code.
// Rules:
//   - async before a function makes it return a Promise
//   - await pauses execution inside that function until the Promise settles
//   - await can only be used inside an async function

// -----------------------------
// 1. Basic async / await
// -----------------------------
function fakeDelay(value, ms) {
  return new Promise(resolve => setTimeout(() => resolve(value), ms));
}

// Without async/await (Promise chain)
fakeDelay("hello", 300).then(val => console.log("Promise:", val));

// With async/await (reads top to bottom)
async function runBasic() {
  const val = await fakeDelay("hello", 300);
  console.log("Async/await:", val);
}

runBasic();

// -----------------------------
// 2. Sequential vs parallel
// -----------------------------

// Sequential — each waits for the previous (total ~900ms)
async function sequential() {
  const a = await fakeDelay("Step 1", 300);
  const b = await fakeDelay("Step 2", 300);
  const c = await fakeDelay("Step 3", 300);
  console.log("Sequential:", a, b, c); // ~900ms
}

// Parallel — all start at once (total ~300ms)
async function parallel() {
  const [a, b, c] = await Promise.all([
    fakeDelay("Step 1", 300),
    fakeDelay("Step 2", 300),
    fakeDelay("Step 3", 300),
  ]);
  console.log("Parallel:", a, b, c); // ~300ms
}

sequential();
parallel(); // both fire — parallel finishes first

// -----------------------------
// 3. Error handling with try / catch
// -----------------------------
function riskyOperation(fail) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fail ? reject(new Error("Operation failed!")) : resolve("Operation succeeded!");
    }, 300);
  });
}

async function withErrorHandling() {
  try {
    const result = await riskyOperation(false); // change to true to see error
    console.log("Result:", result);
  } catch (err) {
    console.log("Caught error:", err.message);
  } finally {
    console.log("Finally: cleanup, hide loading spinner, etc.");
  }
}

withErrorHandling();

// -----------------------------
// 4. Fetching from GitHub API
// -----------------------------
async function fetchGitHubUser(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const user = await response.json();
    return user;
  } catch (err) {
    console.error("fetchGitHubUser failed:", err.message);
    throw err; // re-throw so caller can handle it too
  }
}

async function fetchGitHubRepos(username) {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=5`
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const repos = await response.json();
    return repos;
  } catch (err) {
    console.error("fetchGitHubRepos failed:", err.message);
    throw err;
  }
}

// Fetch user + repos in parallel
async function loadGitHubProfile(username) {
  try {
    console.log(`Loading GitHub profile for: ${username}`);

    const [user, repos] = await Promise.all([
      fetchGitHubUser(username),
      fetchGitHubRepos(username),
    ]);

    console.log(`Name: ${user.name || user.login}`);
    console.log(`Public repos: ${user.public_repos}`);
    console.log(`Followers: ${user.followers}`);
    console.log("Latest repos:");
    repos.forEach(repo => {
      console.log(`  - ${repo.name} (${repo.language || "N/A"})`);
    });
  } catch (err) {
    console.log("Could not load profile:", err.message);
  }
}

// Uncomment to run (needs network access):
// loadGitHubProfile("Prajwal-M-Rao");

// -----------------------------
// 5. async IIFE — run async code at top level
// -----------------------------
// In older Node.js, top-level await isn't allowed.
// Wrap in an immediately invoked async function:
(async () => {
  const result = await fakeDelay("Top-level async via IIFE", 200);
  console.log(result);
})();

// In modern Node (v14.8+) and browsers, you can use top-level await:
// const data = await fakeDelay("Direct", 200);

console.log("\n--- async/await Summary ---");
console.log("async fn()     → function always returns a Promise");
console.log("await promise  → pauses until resolved (inside async fn only)");
console.log("try/catch      → handles errors (replaces .catch())");
console.log("Promise.all + await → run multiple requests in parallel");