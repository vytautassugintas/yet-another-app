import React from "react";

import "./Input.css";

export function Input({ label, onChange, value }) {
  return (
    <div className="input">
      <label>{label}</label>
      <input onChange={onChange} value={value} />
    </div>
  );
}
