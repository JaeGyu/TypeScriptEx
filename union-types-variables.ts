/*
  union 타입은 여러개의 타입 후보들 중 하나의 타입만 유효하면 할당이 이루어진다.
*/
var unionX: string | number = 1;
var unionY: boolean | string = true;

//아래는 할당이 안 이루어지고 에러 발생 함
//var unionZ: string | number = true;

console.log(typeof unionX, unionX)
console.log(typeof unionY, unionY)