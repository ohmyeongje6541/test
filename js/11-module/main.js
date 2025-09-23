// 모듈을 불러오기
// import / from

// from :어디서 불어올 것이냐
// import : 무엇을 불어올 것이냐
import { add, substact, multifly, device } from './math.js'

console.log(add(1, 2))

console.log(substact(4, 2))

console.log(multifly(6, 7))

console.log(device(4, 2))

// 하나만 불러오기
// 내가 불어온 함수의 이름을 결정
import culculator from "./culculator.js"

console.log(culculator);
console.log(culculator.add(1, 2))
console.log(culculator.substact(1, 2))

