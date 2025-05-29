import type {ReactElement} from "react";
import "./profile.scss";

export function Profile():  ReactElement {
  return (
    <div className="profile">
      <h1>Profile</h1>
      <p>This is the profile page.</p>
      <p>Here you can view and edit your profile information.</p>
      <p>Feel free to customize your profile settings.</p>
    </div>
  );
}
