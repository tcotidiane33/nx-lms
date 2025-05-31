import type { ReactElement } from 'react';
import './team-member.css';

export function TeamMember({
  name,
  role,
  bio,
  image,
  socialLinks
}: {
  name: string;
  role: string;
  bio: string;
  image: string;
  socialLinks: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    behance?: string;
  };
}): ReactElement {
  return (
    <div className="team-member">
      <div className="member-image">
        <img src={image} alt={name} />
        <div className="social-links">
          {socialLinks.twitter && (
            <a href={socialLinks.twitter} aria-label={`Twitter de ${name}`}>
              <i className="fab fa-twitter"></i>
            </a>
          )}
          {socialLinks.linkedin && (
            <a href={socialLinks.linkedin} aria-label={`LinkedIn de ${name}`}>
              <i className="fab fa-linkedin"></i>
            </a>
          )}
          {socialLinks.github && (
            <a href={socialLinks.github} aria-label={`GitHub de ${name}`}>
              <i className="fab fa-github"></i>
            </a>
          )}
          {socialLinks.behance && (
            <a href={socialLinks.behance} aria-label={`Behance de ${name}`}>
              <i className="fab fa-behance"></i>
            </a>
          )}
        </div>
      </div>
      <div className="member-info">
        <h3 className="member-name">{name}</h3>
        <p className="member-role">{role}</p>
        <p className="member-bio">{bio}</p>
      </div>
    </div>
  );
}