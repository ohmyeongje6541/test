// components/State/ArrayState.jsx

import { useState } from "react";

export default function ArrayState() {
  const [todo, setTodo] = useState([]);

  function addTodo() {
    console.log("할 일 추가");
    // 상태 업데이트 로직
    let newTodo = { id: todo.length + 1, text: `할 일 ${todo.length + 1}` }
    setTodo([...todo, newTodo])
  }

  function removeTodo() {
    console.log("마지막 할 일 제거");
    // 상태 업데이트 로직
    if (todo.length === 0) return;

    // 마지막 할 일 id 구하기
    const lastId = todo[todo.length - 1].id; 

  // 마지막 id와 다른 항목만 남긴 새 배열 생성
    const newTodo = todo.filter(todo => todo.id !== lastId );

  setTodo(newTodo);

    // setTodo(todo.slice(0, -1));
    // setTodo(newTodo);
  }

  function clearTodos() {
    console.log("모든 할 일 제거");
    // 상태 업데이트 로직
    setTodo([]);
  }

  return (
    <div className="flex flex-col items-center p-6 border rounded-lg">
      <h2 className="text-2xl font-bold mb-4">배열 상태 관리</h2>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">할 일 목록:</h3>
        <ul className="list-disc list-inside">
          <li>할 일이 없습니다</li>
        </ul>
      </div>
      <div className="flex gap-2 flex-wrap justify-center">
        <button className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => {
            addTodo();
          }}
        >
          할 일 추가
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={() => {
            removeTodo();
          }}
        >
          마지막 할 일 제거
        </button>
        <button className="bg-gray-500 text-white px-4 py-2 rounded"
          onClick={() => {
            clearTodos();
          }}
        >
          모든 할 일 제거
        </button>
      </div>
    </div>
  );
}
