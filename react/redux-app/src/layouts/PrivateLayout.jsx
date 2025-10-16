import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom';

export default function PrivateLayout() {
  // 전역 상태 토큰 불러오기
  const token = useSelector((state) => state.auth.token);

  if (!token) {
    return <Navigate to="/profile" replace></Navigate>
  } else {
    return <Outlet></Outlet>
  }
}
