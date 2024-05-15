/**
 * operators
 * 
 * 연산자
 */

/**
 * 산술 연산자
 * 
 * 1 덧셈
 * 2 뺄셈
 * 3 곱셈
 * 4 나눗셈
 * 5 나머지
 */

console.log(10+ 10);
console.log(10)

console.log(10 * (10+10));

/**
 *  wmdrkdhk rkath
 */

let number = 1;

number ++;
console.log(number);

number --;
console.log(number);

let result = 1;
console.log(result);

result = number ++;
console.log(result, number);

result = number --;
console.log(result, number);

result = ++number;
console.log(result, number);


let sample = '99';

console.log(+sample);
console.log(typeof +sample);

sample = true;
console.log(+sample);
console.log(typeof +sample);

sample = '안유진';
console.log(+sample);

/**
 * 할당 연산자(assignment oper)
 */

number = 100;
console.log(number);

number+=10;
console.log(number);

number -=10;
console.log(number);


/**
 * 1 값의 비교
 * 2 값과 타입의 비교
 * 
 */
console.log(5==5);
console.log(5 == '5');
console.log(0 =='');
console.log(true ==1);
console.log(true =='1');

console.log('-----------------');


console.log( 5===5)
console.log(5 === '5');

/**
 * 대소 관계 연산자
 */

console.log(100>1);
console.log(100<1);
console.log(100 <=1);
console.log(100>=1);


console.log(10**2);

console.log('--------------------');

/**
 * null 연산자
 */
let name;
console.log(name);

name = name ?? '코드팩토리';
console.log(name);

name = name ?? '아이브';
console.log(name);

let name2;
name2 ??= '코드팩토리';
console.log(name2);