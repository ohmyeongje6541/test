import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import PATHS from "../constants/path";

export default function RootLayout () {
  return (
    <div>
      <div className="">
        <Link to={PATHS.ROOT.INDEX}>홈페이지</Link>
        <Link to={PATHS.ROOT.ABOUT}>소개페이지</Link>
        <Link to={PATHS.ROOT.PROFILE}>사용자 정보 페이지</Link>
        <Link to={PATHS.AUTH.INDEX}>인증 페이지</Link>
        <Link to={PATHS.ROOT.POSTS}>게시글 페이지</Link>
      </div>
      <Outlet></Outlet>
    </div>
  );
}
