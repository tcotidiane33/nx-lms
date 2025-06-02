
import "./StatItem.css";
 // Components extracted for better reusability
export function StatItem({ value, label, variant = 'default' }: { value: string; label: string; variant?: 'default' | 'hologram' }) {
  return (
    <div className={`stat-item ${variant}`}>
      <span className="stat-value">{value}</span>
      <span className="stat-label">{label}</span>
      {variant === 'hologram' && <div className="hologram-effect"></div>}
    </div>
  );
}