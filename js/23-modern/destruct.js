// 구조 분해 할당

const object = {
  name: "홍길동",
  age: 20,
  name2: "홍길동",
  age2: 20,
};

// 구조 분해 할당을 활용하지 않은 경우
// 속성을 개별 변수에 할당
let name = object["name"]
let age = object["age"]

// 구조 분해 할당을 활용하는 경우
// 변수명과 객체의 속성명(key)가 동일해야한다
let { name2, age2 } = object
console.log(name);
console.log(name2);

const object2 = {
  id: 1,
  title: "갤럭시 99",
  description: "삼성 스마트폰",
  price: 9900,
};

// object2에서 title과 price 속성의 값만 필요
// 구조 분해 할당 활용
const { title, price } = object2;

// 배열 구조 분해 할당
const array = [1, 2, 3, 4, 5];
const [a, b, c, d, e] = array;

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)

// 객체를 인자로 전달받는 함수
function func(object) {
  // 구조 분해 할당으로 변수에 속성 값(vlaue)을 저장
  console.log(`Hello ${object["name"]}, I'm ${object["age"]}`)
}

function func({ name, age }) {
  
}

const user = {
  name: "홍길동",
  age: 20,
};
func(user); // Hello 홍길동, I`m 20