import { type ReactElement } from "react";
import "./profile.css";
import { ActivityList } from "@components/profiles/ActivityList";
import { AvatarUpload } from "@components/profiles/AvatarUpload";
import { CyberButton } from "@components/profiles/Cyberbutton";
import { InputField } from "@components/profiles/InputField";
import { ProfileSection } from "@components/profiles/ProfileSection";
import { StatItem } from "@components/profiles/StatItem";
import { ThemeSelector } from "@components/profiles/ThemeSelector";
import { ToggleSwitch } from "@components/profiles/ToggleSwitch";
import { SettingsGroup } from "@components/profiles/SettingsGroup";
import { HolographicPanel } from "@components/profiles/HolographicPanel";
import { NeuralNetworkBackground } from "@components/profiles/NeuralNetworkBackground";


export function Profile(): ReactElement {
  return (
    
      <div className="profile-futurist">
        {/* Fond avec réseau neuronal animé */}
        <NeuralNetworkBackground 
          intensity={0.3} 
          color="#4fd1c5"
          speed={0.5}
        />
        
        {/* Header with Holographic Stats */}
        <header className="profile-header-futurist">
          <div className="header-content">
            <h1 className="holographic-title">USER PROFILE</h1>
            <div className="profile-stats-futurist">
              <StatItem value="42" label="Courses" variant="hologram" />
              <StatItem value="15" label="Badges" variant="hologram" />
              <StatItem value="98%" label="Completion" variant="hologram" />
              <StatItem value="3.5" label="Rating" variant="hologram" />
            </div>
          </div>
        </header>

        {/* Main Content with Floating Panels */}
        <main className="profile-content-futurist">
          {/* Personal Info Section */}
          <HolographicPanel className="floating-panel" intensity={0.2}>
            <ProfileSection title="PERSONAL DATA" variant="futurist">
              <div className="profile-grid-futurist">
                <AvatarUpload variant="holographic" />
                <div className="info-fields-futurist">
                  <InputField 
                    label="Name" 
                    defaultValue="John Doe" 
                    type="text" 
                    variant="cyber"
                  />
                  <InputField 
                    label="Email" 
                    defaultValue="john.doe@example.com" 
                    type="email" 
                    variant="cyber"
                  />
                  <InputField 
                    label="Neural ID" 
                    defaultValue="NX-8472-2957" 
                    type="text" 
                    variant="cyber"
                    readOnly
                  />
                </div>
              </div>
            </ProfileSection>
          </HolographicPanel>

          {/* Account Settings Section */}
          <HolographicPanel className="floating-panel" intensity={0.1}>
            <ProfileSection title="SYSTEM SETTINGS" variant="futurist">
              <div className="settings-grid-futurist">
                <SettingsGroup label="Security Protocols" variant="futurist">
                  <CyberButton variant="neon">ENCRYPT PROFILE</CyberButton>
                  <CyberButton variant="neon">CHANGE PASSWORD</CyberButton>
                </SettingsGroup>
                
                <SettingsGroup label="Notification Matrix" variant="futurist">
                  <ToggleSwitch 
                    defaultChecked 
                    labels={["ACTIVE", "SILENT"]} 
                    variant="cyberpunk"
                  />
                  <ToggleSwitch 
                    defaultChecked={false} 
                    labels={["SYSTEM", "PERSONAL"]} 
                    variant="cyberpunk"
                  />
                </SettingsGroup>
                
                <SettingsGroup label="Interface Theme" variant="futurist">
                  <ThemeSelector 
                    themes={[
                      { name: "NEON", value: "neon", color: "#4fd1c5" },
                      { name: "CYBER", value: "cyber", color: "#ff2a6d" },
                      { name: "MATRIX", value: "matrix", color: "#00ff41" },
                      { name: "VOID", value: "void", color: "#7f00ff" }
                    ]}
                    variant="holographic"
                  />
                </SettingsGroup>
              </div>
            </ProfileSection>
          </HolographicPanel>

          {/* Activity Section */}
          <HolographicPanel className="floating-panel" intensity={0.15}>
            <ProfileSection title="NEURAL ACTIVITY" variant="futurist">
              <ActivityList 
                activities={[
                  { icon: "🧠", text: "Completed Python Neural Course", time: "2 days ago", variant: "cyber" },
                  { icon: "⚡", text: "Earned 'Quantum Learner' Badge", time: "1 week ago", variant: "cyber" },
                  { icon: "🔒", text: "Security Protocol Updated", time: "3 days ago", variant: "cyber" }
                ]} 
                variant="futurist"
              />
            </ProfileSection>
          </HolographicPanel>
        </main>
      </div>
 
  );
}