import React, { useState } from "react";
import { useInterval } from "../../hooks/useInterval";

import "./Button.scss";

export function Button({
  label,
  type = "button",
  block,
  isPulsing,
  ...buttonProps
}) {
  const [pulse, setPulse] = useState(isPulsing);
  const buttonClassNames = block ? "button--block" : "";
  const buttonAnimationClasses = pulse ? "button--pulse" : "";

  if (isPulsing) {
    useInterval(() => {
      setPulse(!pulse);
    }, 1000);
  }

  return (
    <button
      className={`button ${buttonClassNames} ${buttonAnimationClasses}`}
      type={type}
      {...buttonProps}
    >
      {label}
    </button>
  );
}
