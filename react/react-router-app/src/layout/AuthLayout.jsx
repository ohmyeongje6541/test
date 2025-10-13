import React from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
export default function AuthLayout() {
  const baseClass = "border-2 border-amber-300 p-2";
  const activeClass = "bolder-2 bolder-red-900";

  return (
    <div>
      <div className="text-center text-5xl">
        <NavLink className={({isActive}) => `${baseClass} ${isActive? activeClass: ""}`} to="/auth">
          인증 홈페이지
        </NavLink>
        <NavLink className={({isActive}) => `${baseClass} ${isActive? activeClass: ""}`} to="/auth/login">
          로그인 페이지
        </NavLink>
        <NavLink className={({isActive}) => `${baseClass} ${isActive? activeClass: ""}`} to="/auth/signup">
          회원가입 페이지
        </NavLink>
        <NavLink className={({isActive}) => `${baseClass} ${isActive? activeClass: ""}`} to="/">
          홈페이지
        </NavLink>
      </div>
      <Outlet></Outlet>
    </div>
  );
}
