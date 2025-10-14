import AuthLayout from "../layout/AuthLayout";
import AuthHome from "../pages/AuthPages/AuthHome";
import Login from "../pages/AuthPages/Login";
import Signup from "../pages/AuthPages/Sinup";

import PATHS from "../constants/path";

const authRoutes = [
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
]
export default authRoutes;