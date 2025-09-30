import React from 'react'
// child 컴포넌트를 불러와서
// <div>태그 사이에 child 컴포넌트를 배치
import Child from './Child'

export default function Parent() {
  return (
    <div>
      <Child>
        <div>
          <h1>난 길동</h1>
          <h1>27살</h1>
        </div>
      </Child>
      <Child>
        <div>
          <p>나는 철수</p>
          <p>떡잎</p>
        </div>
      </Child>
      <Child>
        <div>
          <p>짱구</p>
          <h1>짱구는 못말려</h1>
          <p>나는 7살</p>
        </div>
      </Child>
    </div>
  )
}
