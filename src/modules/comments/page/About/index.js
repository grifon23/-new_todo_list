import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPostsCommentsReq, getPostsIdReq } from "../../../../api/api.posts";
import { Content } from "../../../../UI/LoadingAtom";
import { CommentList } from "../../components/CommentList";
export const About = () => {
  const [comments, setComments] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [post, setPost] = useState({});
  const { id } = useParams();
  const LoadOnePost = async () => {
    try {
      setLoading(true);
      const response = await getPostsIdReq(id);
      setPost(response.data);
      setLoading(false);
    } catch (e) {
      console.log("erorr", e);
    }
  };
  const loadComment = async () => {
    try {
      setLoading(true);
      const response = await getPostsCommentsReq(id);
      setComments(response.data);
      setLoading(false);
    } catch (e) {
      console.log("erorr", e);
    }
  };
  useEffect(() => {
    LoadOnePost();
    loadComment();
  }, []);
  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
        }}
      >
        <Content />
      </div>
    );
  }

  return (
    <div>
      {!comments.length > 0 ? (
        <h1 style={{ textAlign: "center", marginTop: "100px" }}>No comments</h1>
      ) : (
        <>
          <h1>Comments post: {post.id}</h1>
          <h2>Post: {post.title}</h2>
          <CommentList comments={comments} />
        </>
      )}
    </div>
  );
};
