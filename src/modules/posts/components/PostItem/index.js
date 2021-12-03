import React from "react";
import { Button } from "../../../../UI/Button";
import { useNavigate } from "react-router-dom";
export const PostItem = ({ post, remove }) => {
  const navigate = useNavigate();
  const loadComments = () => {
    navigate(`comments/post/${post.id}`);
  };
  return (
    <li
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
          {post.id} {post.title}
        </strong>
        <p>{post.body}</p>
      </div>
      <div style={{ display: "flex" }}>
        <Button onClick={loadComments}>Comments</Button>
        <Button onClick={() => remove(post)}>delete</Button>
      </div>
    </li>
  );
};
