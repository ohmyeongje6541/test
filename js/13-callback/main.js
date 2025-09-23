// 각 원소에 + 1을 한 결과를 출력
const numbers4 = [1, 2, 3, 4, 5];

numbers4.forEach((element) => {
  // 배열의 원소에 반복적으로 수행할 로직 코드
  console.log(element + 1);
});

console.log("---------------------")
// 각 원소 중 2로 나눴을 때 나머지가 2인 원소만 출력
numbers4.forEach((element) => {
  if (element % 2 === 0) {
    console.log(element)
  }
});

console.log("---------------------")
// ---
// map()을 활용해서 원소 * 2를 한 데이터를 모은 새로운 배열 생성
const newArray2 = numbers4.map((element) => {
  return element * 2;
});
console.log(newArray2);

const numbers5 = [1, 2, 3, 4, 5];

numbers5.reduce((accvalue, currElement) => {
  // accvalue : 이전 반복동안 반환된 값을 누적한 데이터
  // currElement : 현재 원소

  // 반환값들이 누적된다
  return accvalue + 1;
  // accvalue + 1
  // -----------
  // 0        + 1 , =>  accvalue = 1
  // 1        +
});

console.log(result);

// sort()
// 배열을 정렬하는 고차 메서드
// 원소를 2개씩 비교하며 정렬

const numbers6 = [2, 6, 1, 9, 7];

// a b
// 2 6

numbers6.sort((a, b) => {
  // 정렬 기준
  // 반환값이 양수라면 a가 뒤로 이동
  // 반환값이 음수라면 a가 앞으로 배치
  // 반환값이 0이라면 같다

  // 오름차순 축약
  if (a < b) {
    return -1;
  } if (b < a) {
    return 1;
  }
  if (a === b) {
    return 0;
  }
});
console.log(numbers6);