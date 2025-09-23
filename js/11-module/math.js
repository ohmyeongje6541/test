// 외부 파일(모듈)로 분리할 코드
function add(n1, n2) {
  return n1 + n2
}

// 빼기
// substact
function substact(n1, n2) {
  return n1 - n2
}

export { substact };
// 곱하기
// multifly
function multifly(n1, n2) {
  return n1 * n2
}

export { multifly };
// 나누기
// device
function device(n1, n2) {
  return n1 / n2
}

export { device };
//각 함수를 만들고, 내보내기 및 불러오기


// 함수 add 내보내기
export { add };