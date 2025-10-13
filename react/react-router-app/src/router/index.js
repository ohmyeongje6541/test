import { createBrowserRouter } from "react-router-dom";

// 레이아웃 컴포넌트 가져오기
import RootLayout from "../layout/RootLayout";
import AuthLayout from "../layout/AuthLayout";

import Home from "../pages/RootPages/Home";
import About from "../pages/RootPages/About";
import Profile from "../pages/RootPages/Profile";

import AuthHome from "../pages/AuthPages/AuthHome";
import Login from "../pages/AuthPages/Login";
import Signup from "../pages/AuthPages/Sinup";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      //중첩할 자식 경로 객체를 정의하는 배열
      {
        index: true, // index: true -> 부모 경로의 기본(root) 경로
        // 완성되는 path : "/" (부모 경로와 동일)
        Component: Home,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "profile",
        Component: Profile,
      },
    ],
  },
  {
    // AuthLayout 경로 설정
    path: "auth",
    Component: AuthLayout,
    children: [
      {
        index: true,
        Component: AuthHome,
      },
      {
        path: "signup",
        Component: Signup,
      },
      {
        path: "login",
        Component: Login,
      },
    ],
  },
]);
export default router;
