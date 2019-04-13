import React from "react";

import "./Input.scss";

export function Input({ label, rightLabel, ...inputProps }) {
  return (
    <div className="input">
      <label className="input__label">{label}</label>
      <input className="input__input" {...inputProps} />
      {rightLabel && <span className="input__label--right">{rightLabel}</span>}
    </div>
  );
}
