// variable 종류 const, let
// const = 값 안 변함
// let = 값 변함
// let 값 변한 값 let 안 쓰고 작성
// 기본 적으로 const 사용, 필요할 때 let 사용, var 사용 금지
// var 대신 const, let 사용하는 이유 코드 의미 알 수 있음

const a = 10;
const b = 4;
let myName = "chaeyj";

console.log(a + b);
console.log(a / b);
console.log(a * b);
console.log("hello " + myName);

myName = "sdh210422"

console.log("your new name is " + myName)
