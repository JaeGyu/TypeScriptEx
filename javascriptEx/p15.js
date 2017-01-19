var fun = new Function("x", "y", "return x*y");

console.log(fun);
console.log(fun(13, 2));
console.log(fun.constructor);

a=2;
b=2;

var func2 = function(){

    this.a = 4;
    this.b = 4;

};

var func3 = function(){
    console.log(a+b);
};

var f = new func2();
func3();




