import React from "react";
import { use } from "react";
import { useState } from "react";

export default function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const options = [
    { id: 1, value: "신입" },
    { id: 2, value: "주니어" },
    { id: 3, value: "시니어" },
  ];

  const [checkedItems, setCheckedItems] = useState([]);

  function handleCheckboxChange(event) {
    const { value, checked } = event["target"];

    if (checked) {
      // 체크한 경우, 상태 배열에 새로운 값을 추가한다
      setCheckedItems([...checkedItems, value]);
    } else {
      // 체크 해제된 경우, 상태 배열에서 해당 값을 필터링하여 제거한다
      setCheckedItems(checkedItems.filter((item) => item !== value));
    }
  }

  function handleChange(event) {
    const target = event["target"];
    console.log(target);

    const { name, value } = target;
    console.log(name, value);

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "confirm") {
      setConfirm(value);
    }
  }

  return (
    <div
      style={{
        maxWidth: 400,
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center", fontWeight: "bold" }}>회원가입</h2>
      <form>
        <label htmlFor="email">이메일</label>
        <br />

        <input
          className="border-2"
          type="email"
          name="email"
          value={email}
          onChange={(event) => {
            handleChange(event);
          }}
        />
        <br />
        <label htmlFor="password">비밀번호</label>
        <br />
        <input
          className="border-2"
          type="password"
          name="password"
          value={password}
          onChange={(event) => {
            handleChange(event);
          }}
        />
        <br />
        <label htmlFor="confirm">비밀번호 확인</label>
        <br />
        <input
          className="border-2"
          type="password"
          name="confirm"
          value={confirm}
          onChange={(event) => {
            handleChange(event);
          }}
        />
        <br />

        <p>레벨</p>
        {/* 체크박스 목록을 리스트 렌더링을 활용해서 표현 */}
        {options.map((option) => (
          <label
            key={option.id}
            style={{
              marginRight: "15px",
              cursor: "pointer",
              userSelect: "none",
              fontSize: "14px",
            }}
          >
            <input
              type="checkbox"
              // 체크박스의 값
              value={option.value}
              // 현재 항목이 checkedItems 배열에 포함되어 있는지 여부로 checked 상태를 결정한다
              checked={checkedItems.includes(option.value)}
              onChange={(e) => {
                handleCheckboxChange(e);
              }}
            />
          
            {option.value}
          </label>
        ))}
        <br />

        <button type="submit"
          style={{
            width: "100%",
            backgroundColor: "#3182f6",
            color: "white",
            padding: "12px",
            fontSize: "16px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}>회원가입</button>
      </form>
    </div>
  );
}
