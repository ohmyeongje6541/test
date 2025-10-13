import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function RootLayout () {
  return (
    <div>
      <div className="">
        <Link to="/">홈페이지</Link>
        <Link to="/abot">소개페이지</Link>
        <Link to="/profile">사용자 정보 페이지</Link>
        <Link to="/auth">인증 페이지</Link>
      </div>
      <Outlet></Outlet>
    </div>
  );
}
