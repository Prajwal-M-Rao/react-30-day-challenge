// ============================================
// Day 02 - fetch() + GitHub API
// React 30-Day Challenge | Prajwal M Rao
// ============================================

// fetch() is the built-in browser API for making HTTP requests.
// It always returns a Promise.
// Two-step process: fetch → response → .json() → data

// -----------------------------
// 1. The fetch pattern
// -----------------------------

// Basic structure every fetch call follows:
async function fetchData(url) {
  try {
    // Step 1: make the request
    const response = await fetch(url);

    // Step 2: check HTTP status (fetch does NOT throw on 4xx/5xx!)
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status} ${response.statusText}`);
    }

    // Step 3: parse JSON body (also async!)
    const data = await response.json();

    return data;
  } catch (err) {
    // Catches both network errors AND our thrown HTTP errors
    console.error("Fetch failed:", err.message);
    throw err; // re-throw so callers know it failed
  }
}

// -----------------------------
// 2. Fetching a single GitHub user
// -----------------------------
async function fetchGitHubUser(username) {
  const url = `https://api.github.com/users/${username}`;
  const user = await fetchData(url);

  console.log("Login:", user.login);
  console.log("Name:", user.name);
  console.log("Bio:", user.bio);
  console.log("Public repos:", user.public_repos);
  console.log("Followers:", user.followers);
  console.log("Following:", user.following);
  console.log("Profile URL:", user.html_url);

  return user;
}

// -----------------------------
// 3. Fetching repos for a user
// -----------------------------
async function fetchGitHubRepos(username, limit = 10) {
  const url = `https://api.github.com/users/${username}/repos?sort=updated&per_page=${limit}`;
  const repos = await fetchData(url);

  console.log(`\nLatest ${repos.length} repos for ${username}:`);
  repos.forEach((repo, i) => {
    console.log(`${i + 1}. ${repo.name}`);
    console.log(`   Language: ${repo.language || "N/A"}`);
    console.log(`   Stars: ${repo.stargazers_count}`);
    console.log(`   Updated: ${new Date(repo.updated_at).toLocaleDateString()}`);
    console.log(`   URL: ${repo.html_url}`);
  });

  return repos;
}

// -----------------------------
// 4. Fetch user + repos in parallel
// -----------------------------
async function fetchFullProfile(username) {
  try {
    console.log(`Fetching GitHub profile: ${username}\n`);

    // Both requests fire at the same time
    const [user, repos] = await Promise.all([
      fetchGitHubUser(username),
      fetchGitHubRepos(username, 5),
    ]);

    return { user, repos };
  } catch (err) {
    console.error("Profile fetch failed:", err.message);
  }
}

// -----------------------------
// 5. Error handling — common cases
// -----------------------------
async function robustFetch(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);

    // 404 — user not found
    if (response.status === 404) {
      throw new Error(`User "${username}" not found on GitHub`);
    }

    // 403 — rate limited (GitHub allows 60 unauthenticated requests/hour)
    if (response.status === 403) {
      throw new Error("GitHub API rate limit exceeded. Wait an hour or add a token.");
    }

    if (!response.ok) {
      throw new Error(`Unexpected error: ${response.status}`);
    }

    const data = await response.json();
    console.log("Fetched:", data.login);
    return data;

  } catch (err) {
    if (err.name === "TypeError") {
      // Network error (no internet, CORS, etc.)
      console.error("Network error — check your connection");
    } else {
      console.error("API error:", err.message);
    }
  }
}

// -----------------------------
// 6. Response headers & content types
// -----------------------------
async function inspectResponse(url) {
  const response = await fetch(url);
  console.log("Status:", response.status);
  console.log("OK:", response.ok);
  console.log("Content-Type:", response.headers.get("content-type"));

  // Different parsers for different content types
  const contentType = response.headers.get("content-type");
  if (contentType.includes("application/json")) {
    return await response.json();
  } else if (contentType.includes("text/")) {
    return await response.text();
  } else {
    return await response.blob(); // binary (images, files)
  }
}

// -----------------------------
// RUN — uncomment to execute in Node.js or browser
// -----------------------------

// fetchFullProfile("Prajwal-M-Rao");
// fetchGitHubUser("Prajwal-M-Rao");
// robustFetch("nonexistent-user-xyz-123");

console.log("fetch-api.js loaded — uncomment function calls above to run");