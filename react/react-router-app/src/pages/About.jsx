import React from "react";
import { NavLink } from "react-router-dom";

export default function About() {
  return (
    <div>
      <h1 className="font-bold text-4xl">소개 페이지</h1>
      <NavLink
        to="/"
        className={({isActive}) => {
          return isActive ? "text-red-900 font-bold text-5xl" : "";
        }}
      >
        홈
      </NavLink>
      <NavLink to="/about">소개</NavLink>
      <NavLink to="/profile"> 사용자 정보</NavLink>
    </div>
  );
}
