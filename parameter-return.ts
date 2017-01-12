function typeCheck(p: string | number): string | number{
    return p;
}

function funcTest(p: string | boolean): boolean{
    return typeof(p) == "boolean";
}

let type = typeCheck(1);
let type2 = typeCheck("1");
console.log(typeof type, type);
console.log(typeof type2,type2);

console.log(funcTest("true"));
console.log(funcTest(true));

let myName : string = "Alice";



