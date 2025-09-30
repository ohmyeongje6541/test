import React from 'react'

export default function Card({user, onClickProps}) {
  return (
    <div>
      <button onClick={() => {
        // props로 전달받은 user를 매개변수로 전달
        onClickProps(user);
      }}
      >
        클릭
      </button>
    </div>
  )
}
