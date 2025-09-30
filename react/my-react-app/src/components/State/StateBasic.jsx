import React from "react";
import { useState } from "react";

export default function StateBasic() {
  const [somethingState, setsomthingState] = useState();
  const [something, setsomething] = useState();

  // 문자열 데이터로 관리하는 상태(state)
  // string은 상태 데이터를 저장할 변수
  // setString은 상태 데이터를 변경할 함수

  const[string, setString] = useState("문자열");

  const [array, setArray] = useState([1, 2, 3]);

  function handeClick() {
    const newArray = [...array, 4]
    
    // 변수 newArray를 새로운 상태로 변경
    setArray(newArray)

      console.log("상태 변경");
      // 상태 데이터를 변경하는 코드

      // 상태 데이터를 저장한 변수를 직접 수정해서는 절대 안된다
      // string = "변경"

      // 변경할 데이터를 상태 변경 함수(setString)에 전달해야함
      setString("상태 변경")
  }

  return (
    <div>
      <button
        onClick={() => {
          handeClick();
        }}
      >
        원소 추가
      </button>
      {array.map((element) => {
        return <li>{element}</li>
     })}
    </div>
  );
}
