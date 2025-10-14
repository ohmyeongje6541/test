import React from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import PATHS from "../constants/path";
export default function AuthLayout() {
  const baseClass = "border-2 border-amber-300 p-2";
  const activeClass = "bolder-2 bolder-red-900";

  return (
    <div>
      <div className="text-center text-5xl">
        <NavLink className={({isActive}) => `${baseClass} ${isActive? activeClass: ""}`} to={PATHS.AUTH.INDEX}>
          인증 홈페이지
        </NavLink>
        <NavLink className={({isActive}) => `${baseClass} ${isActive? activeClass: ""}`} to={PATHS.AUTH.LOGIN}>
          로그인 페이지
        </NavLink>
        <NavLink className={({isActive}) => `${baseClass} ${isActive? activeClass: ""}`} to={PATHS.AUTH.SIGNUP}>
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
