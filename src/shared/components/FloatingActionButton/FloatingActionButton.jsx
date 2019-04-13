import React, { useState } from "react";

import "./FloatingActionButton.scss";

export function FloatingActionButton() {
  const [shrink, setShrink] = useState(false);

  function onClick() {
    setShrink(true);
    setTimeout(() => {
      setShrink(false);
    }, 150);
  }

  return (
    <div
      onClick={onClick}
      className={`floatingActionButton ${
        shrink ? "floatingActionButton--shrink" : ""
      }`}
    >
      <i className="material-icons">add</i>
    </div>
  );
}
