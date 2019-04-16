import React from "react";

import "./Modal.scss";

export const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show
    ? "Modal--display-block"
    : "Modal--display-none";

  return (
    <div className={`Modal ${showHideClassName}`}>
      <section className="Modal__main">
        {children}
        {/* <button onClick={handleClose}>close</button> */}
      </section>
    </div>
  );
};
