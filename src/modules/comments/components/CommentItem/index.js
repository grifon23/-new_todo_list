import React from "react";

export const CommentItem = ({ com, index }) => {
  return (
    <li
      key={com.id}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        border: "4px solid rgb(36, 150, 226, 0.5)",
        margin: "20px 0 20px 0",
      }}
    >
      <div>
        <strong>
          {index + 1} {com.name}
        </strong>
        <p>{com.body}</p>
        <p>Email: {com.email}</p>
      </div>
    </li>
  );
};
