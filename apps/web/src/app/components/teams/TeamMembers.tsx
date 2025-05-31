import type { ReactElement } from 'react';
import { TeamMember } from './TeamMember';
import './team-members.css';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  socialLinks: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export function TeamMembers(): ReactElement {
  const teamData: TeamMemberProps[] = [
    {
      name: 'Jean Dupont',
      role: 'Fondateur & CEO',
      bio: 'Expert en éducation avec 10 ans d\'expérience dans le domaine des technologies éducatives.',
      image: '/images/team/jean-dupont.jpg',
      socialLinks: {
        twitter: '#',
        linkedin: '#'
      }
    },
    {
      name: 'Marie Koné',
      role: 'Directrice Pédagogique',
      bio: 'Spécialiste des méthodologies d\'apprentissage et ancienne professeure à l\'Université.',
      image: '/images/team/marie-kone.jpg',
      socialLinks: {
        linkedin: '#'
      }
    },
    {
      name: 'Paul Amani',
      role: 'Lead Développeur',
      bio: 'Développeur full-stack passionné par la création de plateformes éducatives innovantes.',
      image: '/images/team/paul-amani.jpg',
      socialLinks: {
        github: '#',
        linkedin: '#'
      }
    },
    {
      name: 'Aïcha Diop',
      role: 'Responsable Design',
      bio: 'Designer UX/UI spécialisée dans les expériences d\'apprentissage engageantes.',
      image: '/images/team/aicha-diop.jpg',
      socialLinks: {
        twitter: '#',
        behance: '#'
      }
    }
  ];

  return (
    <section className="team-section section-padding">
      <div className="container">
        <h2 className="section-title text-center">Notre équipe</h2>
        <p className="section-subtitle text-center">
          Rencontrez les passionnés qui rendent tout cela possible
        </p>
        
        <div className="team-grid">
          {teamData.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}