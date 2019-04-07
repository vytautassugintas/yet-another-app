import React from "react";

import "./Button.css";

export function Button({ label, type = "button" }) {
  return (
    <button className="button" type={type}>
      {label}
    </button>
  );
}
