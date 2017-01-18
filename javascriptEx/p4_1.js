
var Person = function(living, age, gender){
    this.living = living;
    this.age = age;
    this.gender = gender;
    this.getGender = function () {
        return this.gender;
    };
};

var cosy = new Person(true, 33, 'male');

console.log(cosy);
console.log(this.living);
console.log(cosy.constructor);
console.log(typeof cosy);

var fun = new Function();

console.log(fun);
console.log(typeof  fun);
console.log(fun.constructor);



