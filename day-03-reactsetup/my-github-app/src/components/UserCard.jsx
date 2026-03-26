// ============================================
// Day 03 - UserCard Component
// src/components/UserCard.jsx
// React 30-Day Challenge | Prajwal M Rao
// ============================================

// Props received from parent (App.jsx):
// name        — display name (e.g. "Prajwal M Rao")
// login       — GitHub username (e.g. "Prajwal-M-Rao")
// bio         — profile bio string or null
// repos       — public repo count
// followers   — follower count
// following   — following count
// avatarUrl   — profile picture URL from GitHub API

function UserCard({ name, login, bio, repos, followers, following, avatarUrl }) {
  // Compute initials from name for avatar fallback
  const initials = name
    ? name
        .split(" ")
        .map(word => word[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()
    : login.slice(0, 2).toUpperCase();

  return (
    <div className="user-card">

      {/* Avatar — real image if available, initials circle if not */}
      {avatarUrl ? (
        <img
          src={avatarUrl}
          alt={`${name || login}'s avatar`}
          className="avatar-img"
        />
      ) : (
        <div className="avatar-initials">{initials}</div>
      )}

      {/* User info */}
      <div className="user-info">
        <h2 className="user-name">{name || login}</h2>
        <p className="user-login">@{login}</p>

        {/* Only render bio if it exists — short-circuit rendering */}
        {bio && <p className="user-bio">{bio}</p>}

        {/* Stats row */}
        <div className="user-stats">
          <span><strong>{repos}</strong> repos</span>
          <span><strong>{followers}</strong> followers</span>
          <span><strong>{following}</strong> following</span>
        </div>

        {/* Link to GitHub profile */}
        <a
          href={`https://github.com/${login}`}
          target="_blank"
          rel="noopener noreferrer"
          className="gh-link"
        >
          View on GitHub
        </a>
      </div>

    </div>
  );
}

export default UserCard;

// ============================================
// USAGE (in App.jsx):
// ============================================
//
// import UserCard from "./components/UserCard";
//
// <UserCard
//   name={user.name}
//   login={user.login}
//   bio={user.bio}
//   repos={user.public_repos}
//   followers={user.followers}
//   following={user.following}
//   avatarUrl={user.avatar_url}
// />
//
// ============================================
// JSX CONCEPTS USED:
// ============================================
// - Function component with destructured props
// - Ternary: {avatarUrl ? <img> : <div>}
// - Short-circuit: {bio && <p>...</p>}
// - Fallback: {name || login}
// - Template literal in href: `https://github.com/${login}`
// - {} to embed JS expressions throughout