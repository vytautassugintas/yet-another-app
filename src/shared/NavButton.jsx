import React from "react";

import "./NavButton.scss";

export function NavButton({ label, icon, isActive, onClick }) {
  return (
    <div
      className={`navButton ${isActive ? "navButton--active" : ""}`}
      onClick={onClick}
    >
      <div className="navButton__icon">{icon}</div>
      <div className="navButton__label">{label}</div>
    </div>
  );
}
