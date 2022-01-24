// 이번 경우, isNaN 는 boolean 반환
// 문자 true, 숫자 false

const age = parseInt(prompt("How old are you?"));
// console.log(isNaN(age));

if (isNaN(age)) {
    console.log("Please write a number");
} else {
    console.log("Thank you for writing your age.")
}