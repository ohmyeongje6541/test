import Home from "../pages/Home";
import About from "../pages/About";
import { createBrowserRouter } from "react-router-dom";
import Profile from "../pages/Profile";

const router = createBrowserRouter([
  {
    path: "/", // 주소(URL)
    Component: Home, // 주소에 해당하는 컴포넌트
  },
  {
    path: "About",
    Component: About, // component 속성과 동일한 기능을 하지만 컴포넌트 이름이 아니라 컴포넌트 태그를 설정
  },
  {
    path: "Profile",
     Component: Profile
  }
]);
export default router;
