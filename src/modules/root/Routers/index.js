import React from "react";
import { Routes, Route } from "react-router-dom";
import { Posts } from "../../posts/page/Posts";
import { About } from "../../comments/page/About";

export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Posts />} />
      <Route path="comments/post/:id" element={<About />} />
    </Routes>
  );
};
