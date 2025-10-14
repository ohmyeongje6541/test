import { createBrowserRouter } from "react-router-dom";

import rootRoutes from "../routes/rootRoutes";
import authRoutes from "../routes/authRoutes";


const router = createBrowserRouter([
  ...rootRoutes,
  ...authRoutes,
]);
export default router;
