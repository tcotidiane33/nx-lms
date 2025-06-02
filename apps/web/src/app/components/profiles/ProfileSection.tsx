import "./ProfileSection.css";

export function ProfileSection({ title, children, variant = 'default' }: { 
    title: string; 
    children: React.ReactNode;
    variant?: 'default' | 'futurist';
  }) {
    return (
      <section className={`profile-section ${variant}`}>
        <div className="section-header">
          <h2>{title}</h2>
          <div className="section-decoration"></div>
        </div>
        {children}
      </section>
    );
  }