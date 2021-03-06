/*
  name:string | string[]
  처럼 유니온 타입으로 줄 수 있다. name은 string 혹은 string[] 타입으로 받을 수 있다.
  아래 본문에서 그에 맞게 처리를 하고 있다.

  age:number=12 처럼 초기값을 지정해 줄 수 있다.

*/
function printNames(name, age) {
    if (age === void 0) { age = 12; }
    var emails = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        emails[_i - 2] = arguments[_i];
    }
    var n;
    if (typeof name === "string") {
        n = name;
    }
    else {
        n = name.join(', ');
    }
    console.log(n);
    //ES6 문법이다.  
    console.log("name : " + n + ", age : " + age);
}
;
printNames("Red", 21, "a@a.com", "b@b.com");
printNames(["a", "b", "c"], 10, "a@a.com");
