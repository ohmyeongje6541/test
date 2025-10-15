import { createBrowserRouter } from "react-router-dom";

import rootRoutes from "../routes/rootRoutes";
import authRoutes from "../routes/authRoutes";
import Notfound from "../pages/Notfound";


const router = createBrowserRouter([
  ...rootRoutes,
  ...authRoutes,
  {
    path: "*", // 별표 : 모든 것에 매핑(일치)되는 특수문자
    Component: Notfound,
  }
]);
export default router;
