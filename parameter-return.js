function typeCheck(p) {
    return p;
}
function funcTest(p) {
    return typeof (p) == "boolean";
}
var type = typeCheck(1);
var type2 = typeCheck("1");
console.log(typeof type, type);
console.log(typeof type2, type2);
console.log(funcTest("true"));
console.log(funcTest(true));
var myName = "Alice";
