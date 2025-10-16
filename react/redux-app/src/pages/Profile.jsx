import React from "react";
// 로그아웃 버튼
// 만약에 로그인을 한 상태라면 사용자 정보를 출력
import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../store/authSlice";
import { useDispatch } from "react-redux";

export default function Profile() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const [decodeToken, setDecodeToken] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      setDecodeToken(jwtDecode(token));
    } else {
      // navigate("/login");
    }
  }, [token]);
  function handleLogout() {
    dispatch(logout());
  }
  return (
    <div>
      <div>{token ? token : "로그인을 해주세요"}</div>
      <div>{decodeToken ? `이메일: ${decodeToken.email}` : "로그인을 해주세요"}</div>
      <div>
        <button
          className="bolder-2"
          onClick={() => {
            handleLogout();
          }}
        >
          로그아웃
        </button>
      </div>
    </div>
  );
}
