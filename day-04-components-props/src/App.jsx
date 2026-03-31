import ProfileCard from "./components/ProfileCard";
import "./App.css";

export default function App() {
  const users = [
    {
      id: 1,
      name: "Prajwal M Rao",
      role: "Frontend Developer",
      bio: "Passionate about React, JavaScript, and building great UIs.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Prajwal",
      skills: ["React", "JavaScript", "HTML", "CSS"]
    },
    {
      id: 2,
      name: "Sarah Jenkins",
      role: "UI/UX Designer",
      bio: "I make things look beautiful and easy to use.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      skills: ["Figma", "CSS", "Design Systems"]
    }
  ];

  return (
    <div className="app-container">
      <h1>Team Profiles</h1>
      <p>Practicing Components, Props, and Composition</p>
      
      <div className="profiles-grid">
        {users.map((user) => (
          <ProfileCard 
            key={user.id}
            name={user.name}
            role={user.role}
            bio={user.bio}
            avatar={user.avatar}
            skills={user.skills}
          />
        ))}
      </div>
    </div>
  );
}