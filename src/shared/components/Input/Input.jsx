import React from "react";

import "./Input.scss";

export function Input({ label, ...inputProps }) {
  return (
    <div className="input">
      <label className="input__label">{label}</label>
      <input className="input__input" {...inputProps} />
    </div>
  );
}
