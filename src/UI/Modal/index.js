import React from "react";
import "./style.css";

export const Modal = ({ children, visible, setVisible }) => {
  return (
    <div
      onClick={() => setVisible(false)}
      className={visible ? "modal activeModal" : "modal"}
    >
      <div onClick={(e) => e.stopPropagation()} className="modalContent">
        {children}
      </div>
    </div>
  );
};
