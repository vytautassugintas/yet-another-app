import React from "react";

import "./Button.scss";

export function Button({ label, type = "button" }) {
  return (
    <button className="button" type={type}>
      {label}
    </button>
  );
}
