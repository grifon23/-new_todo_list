import React from "react";
import { CommentItem } from "../CommentItem";

export const CommentList = ({ comments }) => {
  return (
    <div>
      {comments.map((com, index) => (
        <CommentItem com={com} index={index} />
      ))}
    </div>
  );
};
