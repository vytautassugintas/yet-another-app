import React from 'react';

import './Input.scss';

export function Input({
  label, rightLabel, error, ...inputProps
}) {
  return (
    <>
      <div className="input">
        {label && <label className="input__label">{label}</label>}
        <input className="input__input" {...inputProps} />
        {rightLabel && (
          <span className="input__label--right">{rightLabel}</span>
        )}
      </div>
      {error && <div className="input__error">{error}</div>}
    </>
  );
}
