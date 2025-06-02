import "./AvatarUpload.css";

export function AvatarUpload({ variant = 'default' }: { variant?: 'default' | 'holographic' }) {
    return (
      <div className={`profile-avatar ${variant}`}>
        <div className="avatar-container">
          <img src="/default-avatar.png" alt="Profile" />
          <div className="avatar-overlay">
            <button className="edit-avatar">
              <span className="icon">📷</span>
              <span>Upload</span>
            </button>
          </div>
          {variant === 'holographic' && <div className="holographic-ring"></div>}
        </div>
      </div>
    );
  }
  
  