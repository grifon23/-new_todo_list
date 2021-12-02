import React, { useState } from "react";
import { MyInpyt } from "../../../../UI/MyInput";
import { Button } from "../../../../UI/Button";
export const PostForm = ({ create }) => {
  const [form, setForm] = useState({
    name: "",
    comment: "",
  });
  const addNewPost = (e, id) => {
    e.preventDefault();
    const newPost = {
      ...form,
      id: Date.now(),
    };
    create(newPost);
    setForm({ name: "", comment: "" });
  };
  return (
    <form
      onSubmit={addNewPost}
      style={{
        width: "200px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <h4>Add post</h4>
      <MyInpyt
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        value={form.name}
        type="text"
        placeholder="enter post"
        style={{ marginBottom: "10px" }}
      />
      <MyInpyt
        onChange={(e) => setForm({ ...form, comment: e.target.value })}
        value={form.comment}
        type="text"
        placeholder="enter comments"
      />

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "20px",
        }}
      >
        <Button type="submit">add posts</Button>
        <Button>cancel</Button>
      </div>
    </form>
  );
};
