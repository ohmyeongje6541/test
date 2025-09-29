import React from 'react'
import Child from './Child'

export default function Parent() {
  return (
    <div className='' id='' onClick="">

      {/* 데이터(props, 자식 컴포넌트의 속성)를 전달 하는 방법 */}
      {/* child 컴포넌트의 name 속성 age  속성 */}
      <Child name="홍길동" age={20} />
      <Child name="김철수" age={25} />  
      <Child name="영희" age={30} />
    </div>
  )
}
