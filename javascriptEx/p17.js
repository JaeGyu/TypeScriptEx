var myNumber = new Number(23);
var myNumberLiteral = 23;
console.log(myNumber.constructor, myNumberLiteral.constructor);

var myString = new String('male');
var myStringLiteral = 'male';
console.log(myString.constructor, myStringLiteral.constructor);

var myObject = new Object();
var myObjectLiteral = {};
console.log(myObject.constructor, myObjectLiteral.constructor);