import React from "react";
import { Button } from "../../../../UI/Button";

export const PostList = ({ posts, title, remove }) => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>{title}</h1>

      <ul style={{ listStyle: "none" }}>
        {posts.map((post, index) => (
          <li
            key={post.id}
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
                {index + 1} {post.name}
              </strong>
              <p>{post.comment}</p>
            </div>

            <Button onClick={() => remove(post)}>delete</Button>
          </li>
        ))}
      </ul>
    </>
  );
};
