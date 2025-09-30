import React from "react";
import User from "./User";

export default function Container() {
  // 반복 랜더링할 배열 데이터
  const array = [1, 2, 3, 4, 5];

  const userArray = [
    { id: 1, name: "우영" },
    { id: 2, name: "길동" },
    { id: 3, name: "철수" },
    { id: 4, name: "짱구" },
    { id: 5, name: "영희" },
  ];

  return (
    <div>
      {array.map((element) => {
        return <li>{element}</li>;
      })}

      {userArray.map((user) => {
        
        return  <User key={user["id"]} user = {user}></User>
      })}
    </div>
  );
}
