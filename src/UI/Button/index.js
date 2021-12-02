import React from "react";
import "./style.css";

export const Button = ({ children, ...props }) => {
  return (
    <button onClick={props.onClick} className="btn-ui">
      {children}
    </button>
  );
};
