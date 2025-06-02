import "./ToggleSwitch.css";

export function ToggleSwitch({ defaultChecked }: { defaultChecked?: boolean }) {
    return (
      <div className="cyber-toggle">
        <input type="checkbox" id="notifications" defaultChecked={defaultChecked} />
        <label htmlFor="notifications">
          <div className="toggle-slider"></div>
        </label>
      </div>
    );
  }
  