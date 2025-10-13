import { Outlet } from "react-router-dom"
import { Navigate } from "react-router-dom";
export default function ProtectLayout() {
  const isLogin = false;

  if (isLogin === true) {
    return <Navigate to="/auth/login"></Navigate>
  }
  return (
    <Outlet></Outlet>
  )
}
