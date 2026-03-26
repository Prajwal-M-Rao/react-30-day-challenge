// ============================================
// Day 03 - RepoList Component
// src/components/RepoList.jsx
// React 30-Day Challenge | Prajwal M Rao
// ============================================

// ============================================
// RepoCard — renders a single repository
// ============================================
// This is a "sub-component" — only used by RepoList.
// Not exported because nothing else needs it.

function RepoCard({ name, description, language, stars, forks, url, updatedAt }) {
  // Format the date nicely
  const updated = new Date(updatedAt).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="repo-card">

      {/* Repo name links to GitHub */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="repo-name"
      >
        {name}
      </a>

      {/* Description — fallback if null */}
      <p className="repo-desc">
        {description || "No description provided."}
      </p>

      {/* Meta row — language, stars, forks, updated */}
      <div className="repo-meta">
        {/* Only render language badge if it exists */}
        {language && (
          <span className="repo-lang">
            <span className="lang-dot" />
            {language}
          </span>
        )}
        <span>★ {stars}</span>
        {forks > 0 && <span>⑂ {forks}</span>}
        <span>Updated {updated}</span>
      </div>

    </div>
  );
}

// ============================================
// RepoList — renders a list of repos
// ============================================
// Props:
//   repos — array of repo objects from GitHub API

function RepoList({ repos }) {
  // Handle empty / missing state
  if (!repos || repos.length === 0) {
    return <p className="empty-state">No public repositories found.</p>;
  }

  return (
    <div className="repo-list">

      {/* Section heading with count */}
      <h3 className="repo-list-heading">
        {repos.length} {repos.length === 1 ? "repository" : "repositories"}
      </h3>

      {/* Map over repos — each needs a unique key */}
      {repos.map(repo => (
        <RepoCard
          key={repo.id}               // unique, stable ID from GitHub
          name={repo.name}
          description={repo.description}
          language={repo.language}
          stars={repo.stargazers_count}
          forks={repo.forks_count}
          url={repo.html_url}
          updatedAt={repo.updated_at}
        />
      ))}

    </div>
  );
}

export default RepoList;

// ============================================
// USAGE (in App.jsx):
// ============================================
//
// import RepoList from "./components/RepoList";
//
// <RepoList repos={repos} />
//
// ============================================
// JSX CONCEPTS USED:
// ============================================
// - Two components in one file (RepoCard + RepoList)
// - .map() to render a list of components
// - key prop on each mapped element
// - Conditional rendering: {language && <span>}
// - {forks > 0 && ...} — only show forks if non-zero
// - Ternary in heading: repos.length === 1 ? "repository" : "repositories"
// - Passing all GitHub API fields as individual props