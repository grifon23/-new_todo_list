import React, { useContext, useState } from "react";
import { Button } from "../../../../UI/Button";
import { MyInpyt } from "../../../../UI/MyInput";
import { AuthContext } from "../../AuthContext";

export const AuthPage = () => {
  const { setIsAuth, isAuth } = useContext(AuthContext);

  const [form, setForm] = useState({
    name: "",
    password: "",
  });

  const logIn = (e) => {
    e.preventDefault();

    if (form.password !== "") {
      setIsAuth(true);
      localStorage.setItem("password", form.password);
      localStorage.setItem("userName", form.name);
    }
    return;
  };

  return (
    <form
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        width: "300px",
        border: "1px solid rgb(36, 150, 226, 0.5)",
        padding: "20px",
        borderRadius: "10px",
        marginTop: "50px",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Autorization</h1>
      <h3>User name</h3>
      <MyInpyt
        type="text"
        placeholder="user name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <h3>Password</h3>
      <MyInpyt
        type="password"
        placeholder="password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button onClick={logIn}>Enter</Button>
        <Button>Cancel</Button>
      </div>
    </form>
  );
};
