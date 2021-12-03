import React from "react";
import { Posts } from "../../posts/page/Posts";
import { About } from "../../comments/page/About";
import { ErrorPage } from "../../erorr/Errorpage";
import { AuthPage } from "../../auth/page/AuthPage";

export const privateRouters = [
  { path: "/", element: <Posts />, exact: true },
  { path: "comments/post/:id", element: <About />, exact: true },
  { path: "error/:error", element: <ErrorPage />, exact: true },
];
export const publicRouters = [
  { path: "auth", element: <AuthPage />, exact: true },
];
