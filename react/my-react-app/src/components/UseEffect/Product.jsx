import React from 'react'
// product는 개별 상품 정보를 저장하고 있는 객체 데이터
export default function Product({Product}) {
  return (
    <div>
      <p>{Product["title"]}</p>
      <p>{Product["description"]}</p>
    </div>
  )
}
