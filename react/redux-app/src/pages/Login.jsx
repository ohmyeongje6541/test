import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/authSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector((state) => {
    return state.auth.token;
  });
  useEffect(() => {
    if (token) {
      alert("로그인 상태입니다");
      console.log(token);
      // navigate("/profile");
    }
  }, [token]);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(login({ email: email, password: password }));
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input
          type="submit"
          value="로그인"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </form>
    </div>
  );
}
