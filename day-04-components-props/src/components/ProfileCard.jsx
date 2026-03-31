import SkillBadge from "./SkillBadge";

export default function ProfileCard({ name, role, bio, avatar, skills }) {
  return (
    <div className="profile-card">
      <img src={avatar} alt={`${name}'s avatar`} className="avatar" />
      
      <div className="profile-info">
        <h2>{name}</h2>
        <h4 className="role">{role}</h4>
        <p className="bio">{bio}</p>
        
        {/* Component Composition here! */}
        <div className="skills-container">
          {skills.map((skill, index) => (
            <SkillBadge key={index} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}