import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div>
      {/* to 속성 : 어떤 주소로 이동을할것인지? */}
      <h1 className="font-bold text-4xl">홈 페이지</h1>
      <NavLink to="/">홈</NavLink>
      <br />
      <NavLink to="/about">소개</NavLink>
      <br />
      <NavLink to="/profile"> 사용자 정보</NavLink>
    </div>
  );
}
