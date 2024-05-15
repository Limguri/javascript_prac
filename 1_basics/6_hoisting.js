/**
 * Hoisting
 */

console.log("Hello");
console.log("world");


console.log(name);
var name = '코드팩토리';
console.log(name);

/**
 * Hoisting?
 * 
 * 모든 변수 선언문이 커드의 최상단으로 이동되는 것처럼 느껴지는 현상을 이야기
 */

console.log(yuJin);
let yuJin = '안유진';
console.log(yuJin);