import React from "react";

import "./Modal.scss";

export const Modal = ({ handleClose, show, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className={`Modal Modal--display-block`}>
      <section className="Modal__main">
        {children}
        <button onClick={handleClose}>close</button>
      </section>
    </div>
  );
};
