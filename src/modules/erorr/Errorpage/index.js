import React from "react";
import { useLocation } from "react-router";

export const ErrorPage = () => {
  const location = useLocation();

  return (
    <div>
      <h1> Ups...erorr url:{location.pathname} </h1>
    </div>
  );
};
