import "./ActivityList.css";

export function ActivityList({ 
    activities, 
    variant = 'default'
  }: { 
    activities: Array<{ icon: string; text: string; time: string; variant?: string }>;
    variant?: 'default' | 'futurist';
  }) {
    return (
      <div className={`activity-list ${variant}`}>
        {activities.map((activity, index) => (
          <div key={index} className={`activity-item ${activity.variant || ''}`}>
            <div className="activity-icon">{activity.icon}</div>
            <div className="activity-content">
              <span className="activity-text">{activity.text}</span>
              <span className="activity-time">{activity.time}</span>
            </div>
            <div className="activity-decoration"></div>
          </div>
        ))}
      </div>
    );
  }