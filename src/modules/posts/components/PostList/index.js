import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { PostItem } from "../PostItem";
import "./style.css";

export const PostList = ({ posts, title, remove }) => {
  if (!posts.length) {
    return <h1 style={{ textAlign: "center" }}>No posts</h1>;
  }
  return (
    <>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      <TransitionGroup className="todo-list">
        {posts.map((post) => (
          <CSSTransition key={post.id} classNames="item" timeout={500}>
            <PostItem remove={remove} post={post} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  );
};
