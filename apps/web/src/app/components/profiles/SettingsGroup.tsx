import { ReactNode } from "react";
import "./SettingsGroup.css";

export function SettingsGroup({ 
    label, 
    children, 
    variant = 'default'
  }: { 
    label: string; 
    children: ReactNode;
    variant?: 'default' | 'futurist';
  }) {
    return (
      <div className={`settings-group ${variant}`}>
        <label>{label}</label>
        <div className="settings-content">{children}</div>
      </div>
    );
  }