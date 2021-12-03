import React, { useContext } from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import { privateRouters, publicRouters } from "../routers";
import { AuthContext } from "../../auth/AuthContext";
import { Content } from "../../../UI/LoadingAtom";

export function PageRoute() {
  const { isAuth, isLoading } = useContext(AuthContext);
  if (isLoading) {
    return <Content />;
  }

  return isAuth ? (
    <Routes>
      {privateRouters.map((router) => (
        <Route
          key={router.path}
          path={router.path}
          element={router.element}
          exact={router.exact}
        />
      ))}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  ) : (
    <Routes>
      {publicRouters.map((router) => (
        <Route
          key={router.path}
          path={router.path}
          element={router.element}
          exact={router.exact}
        />
      ))}
      <Route path="*" element={<Navigate to="/auth" />} />
    </Routes>
  );
}
