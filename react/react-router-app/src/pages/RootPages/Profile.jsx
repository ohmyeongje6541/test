import { Navigate, useNavigate } from "react-router-dom";

export default function Profile() {
  // 로그인 상태 표시 가정용 변수
  const isLigin = true;

  // 로그인 상태가 아니라면
  // "/" 주소로 다이렉트
  if (isLigin === false) {
    // Navigate는 컴포넌트라서 return 내부에 있어야함
    // replace 속성: history(사용자가 페이지를 이동한 내역)
    return <Navgate to="/" replace></Navgate>;
  }

  const navigate = useNavigate();

  return (
    <div>
      사용자 정보
      <button
        className="border p-2"
        onClick={() => {
          alert("홈페이지로 이동합니다")
          // 페이지 이동 전 특정 로직을 수행할 때 사용
          navigate("/");
        }}
      >
        홈페이지로 이동
      </button>
    </div>
  );
}
