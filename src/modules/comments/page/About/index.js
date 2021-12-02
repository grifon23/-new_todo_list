import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPostsCommentsReq, getPostsIdReq } from "../../../../api/api.posts";
export const About = () => {
  const [comments, setComments] = useState([]);
  const [post, setPost] = useState({});
  const { id } = useParams();
  const LoadOnePost = async () => {
    try {
      const response = await getPostsIdReq(id);
      setPost(response.data);
    } catch (e) {
      console.log("erorr", e);
    }
  };
  const loadComment = async () => {
    try {
      const response = await getPostsCommentsReq(id);
      setComments(response.data);
    } catch (e) {
      console.log("erorr", e);
    }
  };
  useEffect(() => {
    LoadOnePost();
    loadComment();
  }, []);
  console.log("com", comments);
  return (
    <div>
      <h1>Comments post: {post.id}</h1>
      <h2>Post: {post.title}</h2>
      {comments.map((com, index) => (
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
      ))}
    </div>
  );
};
