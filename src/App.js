import React, { useState } from "react";
import { PostForm } from "./modules/posts/components/PostForm";
import { PostList } from "./modules/posts/components/PostList";
import { SelectPostSort } from "./UI/SelectPostSort/index";
function App() {
  const [selectedSort, setSelectedSort] = useState("");
  const [posts, setPosts] = useState([
    {
      id: 1,
      name: "Post review",
      comment:
        "Тип елемента недійсний: очікувався рядок (для вбудованих компонентів) або клас/функція (для складених компонентів), але отримав: невизначений.",
    },
    {
      id: 2,
      name: "Post commit",
      comment:
        "Ймовірно, ви забули експортувати свій компонент із файлу, у якому він визначено, або ви переплутали імпорт за замовчуванням та імпортуванням.",
    },
    {
      id: 3,
      name: "Post app",
      comment: "Check the render method of Posts",
    },
  ]);
  const createPost = (newPost, la) => {
    setPosts([...posts, newPost]);
  };
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };
  const sortPost = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
    console.log("sort", sort);
  };
  return (
    <div style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>
      <PostForm create={createPost} remove={removePost} />
      <hr style={{ margin: "15px 0" }} />
      <SelectPostSort
        value={selectedSort}
        onChange={sortPost}
        defaultValue="Сортировать"
        options={[
          { value: "name", name: "По названию" },
          { value: "comment", name: "По коментарию" },
        ]}
      />
      {posts.length !== 0 ? (
        <PostList posts={posts} remove={removePost} title="Post list" />
      ) : (
        <h1 style={{ textAlign: "center" }}>No posts</h1>
      )}
    </div>
  );
}

export default App;
