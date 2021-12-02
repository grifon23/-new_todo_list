import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPostsIdReq } from "../../../../api/api.posts";
export const About = () => {
  const [comments, setComments] = useState([]);
  const { id } = useParams();
  const loadComment = async () => {
    try {
      const response = await getPostsIdReq(id);
      setComments(response.data);
    } catch (e) {
      console.log("erorr", e);
    }
  };
  useEffect(() => {
    loadComment();
  }, []);
  console.log("com", comments);
  return (
    <div>
      <h1>Comments</h1>
      {comments.map((com) => (
        <li>{com.name}</li>
      ))}
    </div>
  );
};
