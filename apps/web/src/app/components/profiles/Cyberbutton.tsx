import "./CyberButton.css";

export function CyberButton({ children, variant = 'default' }: { 
    children: React.ReactNode;
    variant?: 'default' | 'neon';
  }) {
    return (
      <button className={`cyber-button ${variant}`}>
        <span className="button-content">{children}</span>
        <div className="button-decoration"></div>
      </button>
    );
  }