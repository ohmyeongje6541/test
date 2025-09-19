// 반복문이 없는 코드
// 변수 number를 선언하고, 0을 할당
// 변수 number를 3번 출력
// 1씩 증가하면서
let number = 0; // 초기화

console.log(number)
console.log(number + 1)

console.log(number)
console.log(number + 1)

console.log(number)
console.log(number + 1)

for (let number2 = 0; number2 < 3; number2 = number2 + 1) {
  console.log(number2);
}

// 내가 어떤 코드를 5번 반복
// i++ => i = i + 1
for (let i = 0; i < 5; i++) {
  console.log(`${i + 1} 번 실행`);
}

let N = 10;
for (let i = 0; i < N; i++) {
  console.log(`${i + 1} 번 실행`);
}

// 숫자를 0부터 5까지 출력