import { useState } from "react";

// components/Calculator/Calculator.jsx
export default function Calculator() {
  const [x, setx] = useState(0);
  const [y, sety] = useState(0);
  const [result, setResult] = useState(0);

  function add() {
    console.log("x + y");
    // 상태 업데이트 로직

    // 계산 결과를 SetResult로 저장
    // Number()함수에 x, y값을 대입
    setResult(Number(x) + Number(y));
  }

  function subtract() {
    console.log("x - y");
    // 상태 업데이트 로직
    setResult(Number(x) - Number(y));
  }

  function multiply() {
    console.log("x * y");
    // 상태 업데이트 로직
    setResult(Number(x) * Number(y));
  }

  function divide() {
    console.log("x / y");
    // 상태 업데이트 로직
    setResult(Number(x) / Number(y));
  }

  function handleChange(event) {
    const target = event["target"]; // 이벤트가 발생한 input 요소
    // console.log(taregt); // input 요소 전체 로그 출력

    const { name, value } = target; // name과 value 속성 추출
    // console.log(name, value); // 예: "name" "x, y"

    if (name === "x") {
      setx(value);
    } else if (name === "y") {
      sety(value);
    }
  }

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-8">
        결과 값 : {result}
      </h2>
      <div>
        <input
          type="number"
          name="x"
          className="w-full p-2 mb-3 border"
          placeholder="x"
          value={x}
          onChange={(event) => {
            handleChange(event);
          }}
        />
        <input
          type="number"
          name="y"
          className="w-full p-2 mb-3 border"
          placeholder="y"
          value={y}
          onChange={(event) => {
            handleChange(event);
          }}
        />
      </div>
      <div className="flex gap-4">
        <button
          className="bg-blue-500 text-white px-6 py-2 cursor-pointer"
          onClick={() => {
            add();
          }}
        >
          더하기 +
        </button>
        <button
          className="bg-blue-500 text-white px-6 py-2 cursor-pointer"
          onClick={() => {
            subtract();
          }}
        >
          빼기 -
        </button>
        <button
          className="bg-blue-500 text-white px-6 py-2 cursor-pointer"
          onClick={() => {
            multiply();
          }}
        >
          곱하기 *
        </button>
        <button
          className="bg-blue-500 text-white px-6 py-2 cursor-pointer"
          onClick={() => {
            divide();
          }}
        >
          나누기 /
        </button>
      </div>
    </div>
  );
}
