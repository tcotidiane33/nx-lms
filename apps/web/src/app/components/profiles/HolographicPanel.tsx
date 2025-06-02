import { ReactNode, CSSProperties } from "react";
import "./HolographicPanel.css";

interface HolographicPanelProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
  color?: string;
  style?: CSSProperties;
}

export function HolographicPanel({
  children,
  className = "",
  intensity = 0.1,
  color = "#4fd1c5",
  style = {},
}: HolographicPanelProps) {
  const panelStyle = {
    ...style,
    "--hologram-intensity": intensity,
    "--hologram-color": color,
  } as CSSProperties;

  return (
    <div className={`holographic-panel ${className}`} style={panelStyle}>
      <div className="holographic-overlay"></div>
      <div className="holographic-content">{children}</div>
      <div className="holographic-grid"></div>
    </div>
  );
}