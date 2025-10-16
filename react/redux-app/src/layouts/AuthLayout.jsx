import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AuthLayout() {
  const token = useSelector((state) => state.auth.token);

  if (token) {
    return <Navigate to="/login" replace></Navigate>;
  } else {
    <Outlet></Outlet>;
  }
}
