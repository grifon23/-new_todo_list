import React, { useEffect, useState } from "react";
import "./App.css";
import { PageRoute } from "./modules/root/PageRoute";
import { BrowserRouter } from "react-router-dom";
import { AuthContext } from "./modules/auth/AuthContext";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (localStorage.getItem("password") && localStorage.getItem("userName")) {
      setIsAuth(true);
    }
    setIsLoading(false);
  }, []);
  return (
    <AuthContext.Provider
      value={{ isAuth, setIsAuth, isLoading, setIsLoading }}
    >
      <BrowserRouter>
        <PageRoute />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
