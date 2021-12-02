import React, { useState } from "react";
import { MyInpyt } from "../../../../UI/MyInput";
import { Button } from "../../../../UI/Button";
export const PostForm = ({ create, setVisible }) => {
  const [form, setForm] = useState({
    title: "",
    body: "",
  });
  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      title: form.title,
      body: form.body,
      id: Date.now(),
    };
    create(newPost);
    setForm({ title: "", body: "" });
  };
  const close = (e) => {
    e.preventDefault();
    setVisible(false);
  };
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <h4>Add post</h4>
      <MyInpyt
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        value={form.title}
        type="text"
        placeholder="enter post"
        style={{ marginBottom: "10px" }}
      />
      <MyInpyt
        onChange={(e) => setForm({ ...form, body: e.target.value })}
        value={form.body}
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
        <Button onClick={addNewPost}>add posts</Button>
        <Button onClick={close}>cancel</Button>
      </div>
    </form>
  );
};
