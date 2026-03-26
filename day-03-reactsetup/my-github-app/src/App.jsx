// ============================================
// Day 03 - App.jsx (Root Component)
// src/App.jsx
// React 30-Day Challenge | Prajwal M Rao
// ============================================

import { useState, useEffect } from "react";
import UserCard from "./components/UserCard";
import RepoList from "./components/RepoList";
import "./App.css";

// Change this to your GitHub username
const GITHUB_USERNAME = "Prajwal-M-Rao";

function App() {
  // useState — holds data that can change (triggers re-render when updated)
  const [user, setUser]       = useState(null);    // GitHub user object
  const [repos, setRepos]     = useState([]);      // array of repo objects
  const [loading, setLoading] = useState(true);   // true while fetching
  const [error, setError]     = useState(null);   // error message string

  // useEffect — runs after the component mounts (like componentDidMount)
  // Empty [] means "run once when the component first appears"
  useEffect(() => {
    async function fetchGitHubData() {
      try {
        // Fetch user profile and repos in parallel
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=8`
          ),
        ]);

        // Check for HTTP errors (fetch won't throw on 404!)
        if (userRes.status === 404) {
          throw new Error(`GitHub user "${GITHUB_USERNAME}" not found.`);
        }
        if (userRes.status === 403) {
          throw new Error("GitHub API rate limit hit. Try again in an hour.");
        }
        if (!userRes.ok) {
          throw new Error(`GitHub API error: ${userRes.status}`);
        }

        // Parse JSON from both responses
        const userData  = await userRes.json();
        const reposData = await reposRes.json();

        // Update state — triggers re-render
        setUser(userData);
        setRepos(reposData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false); // always stop loading
      }
    }

    fetchGitHubData();
  }, []); // [] = run once on mount

  // ------------------------------------------------
  // Render states
  // ------------------------------------------------

  // Loading state
  if (loading) {
    return (
      <div className="app app--loading">
        <p>Loading {GITHUB_USERNAME}&apos;s GitHub profile...</p>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="app app--error">
        <h2>Something went wrong</h2>
        <p>{error}</p>
      </div>
    );
  }

  // Success state — render components with real data
  return (
    <div className="app">
      <header className="app-header">
        <h1>GitHub Profile</h1>
      </header>

      <main className="app-main">
        {/* UserCard receives individual props from the user object */}
        <UserCard
          name={user.name}
          login={user.login}
          bio={user.bio}
          repos={user.public_repos}
          followers={user.followers}
          following={user.following}
          avatarUrl={user.avatar_url}
        />

        {/* RepoList receives the whole repos array */}
        <RepoList repos={repos} />
      </main>
    </div>
  );
}

export default App;

// ============================================
// CONCEPTS USED TODAY:
// ============================================
// useState   — local state (loading, error, data)
// useEffect  — side effects (fetch on mount)
// Conditional rendering — if loading / if error / success
// Component composition — App renders UserCard + RepoList
// Props — passing data down to child components
// async/await inside useEffect (via named inner function)
// Promise.all — fetch user + repos at the same time