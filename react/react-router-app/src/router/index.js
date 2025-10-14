import { createBrowserRouter } from "react-router-dom";

// 레이아웃 컴포넌트 가져오기
import RootLayout from "../layout/RootLayout";
import AuthLayout from "../layout/AuthLayout";

import Home from "../pages/RootPages/Home";
import About from "../pages/RootPages/About";
import Profile from "../pages/RootPages/Profile";
import PostList from "../pages/RootPages/PostList";
import PostDetail from "../pages/RootPages/PostDetail";

import AuthHome from "../pages/AuthPages/AuthHome";
import Login from "../pages/AuthPages/Login";
import Signup from "../pages/AuthPages/Sinup";
import ProtectLayout from "../layout/ProtectLayout";

import PATHS from "../constants/path";

const router = createBrowserRouter([
  {
    path: PATHS["ROOT"]["INDEX"],
    Component: RootLayout,
    children: [
      //중첩할 자식 경로 객체를 정의하는 배열
      {
        index: true, // index: true -> 부모 경로의 기본(root) 경로
        // 완성되는 path : "/" (부모 경로와 동일)
        Component: Home,
      },
      {
        path: PATHS.ROOT.ABOUT,
        Component: About,
      },
      {
        path: PATHS.ROOT.POSTS,
        Component: PostList
      },
      {
        path: PATHS.ROOT.POST_DETAIL,
        Component: PostDetail,
      },
      {
        Component: ProtectLayout,
        // 보호할 경로와 컴포넌트 정의
        children: [
          {
            path: PATHS.ROOT.PROFILE,
            Component: Profile,
          }
        ]
     }
    ],
  },
  {
    // AuthLayout 경로 설정
    path: PATHS.AUTH.INDEX,
    Component: AuthLayout,
    children: [
      {
        index: true,
        Component: AuthHome,
      },
      {
        path: PATHS.AUTH.SIGNUP,
        Component: Signup,
      },
      {
        path: PATHS.AUTH.LOGIN,
        Component: Login,
      },
    ],
  },
]);
export default router;
