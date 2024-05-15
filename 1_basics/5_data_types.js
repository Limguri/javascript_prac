/**
 * Data types
 * 
 * 여섯개의 primitive Type과
 * 한개의 오브젝트 타입이있다.
 * 
 * 1) number(숫자)
 * 2) String(문자열)
 * 3) Boolean(불리언)
 * 4) undefined (언디파인드)
 * 5) null(널)
 * 6) Symbol(심볼)
 * 
 * 7) object(객체)
 *  Function
 *  Array
 *  Object
 */

// Nubmer type
const age = 32;
const tem = -19;
const pi = 3.14;

console.log(typeof(age));

console.log(typeof(tem));

console.log(typeof(pi));
console.log('----------');

const infinity = Infinity;
const ninfinity = -Infinity;

console.log(typeof infinity);
console.log(typeof ninfinity);

// 2. 스트링

const codeFactory = '코드팩토리';
console.log(typeof codeFactory);

const ive = "'아이브' 안유진";
console.log(ive);

// Template  Literal
const iveYuJin = '아이브안유진'

const smallQuitoation = '아이브\'코드팩토리';
console.log(smallQuitoation);

const iveWonYoung2 = `아이브
장원영`;
console.log(iveWonYoung2);

const groupName = '아이브';
console.log(groupName + ' 안유진');
console.log(`${groupName} 안유진`);

const isTrue = true;
const isFalse = false;
console.log(typeof isTrue);

// undefined

let noInit;

console.log(noInit);
console.log(typeof noInit);

// null

let init = null;
console.log(init);
console.log(typeof init);
console.log('---------------');

// symBol타입
// 유일무이한 값을 생성할때 사용
// 다른 프리미티브 값들과 다르게 symbol 함수를 호출해서 사용

const test1 = '1';
const test2 = '1';

console.log(test1 === test2);

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');

console.log(symbol1 === symbol2);

/**
 * Object타입
 * 
 * Map
 * 키:벨류의 쌍으로 이루어져있다
 * key:value
 */

const dictionary = {
    red : '빨간색',
    orange: '주황색',
    yellow : '노란색',
};

console.log(dictionary)
console.log(dictionary['red']);
console.log(dictionary['orange']);
console.log(dictionary['yellow']);

console.log(typeof dictionary);

/**
 * array
 */

const iveMembersArray = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];

console.log(iveMembersArray[5]);

iveMembersArray[0] = '코드팩토리'
console.log(iveMembersArray);
console.log(typeof iveMembersArray);