import React from "react";

import "./NavButton.css";

export function NavButton({ label, icon }) {
  return (
    <div className="navButton">
      <div className="icon">{icon}</div>
      <div className="label">{label}</div>
    </div>
  );
}
