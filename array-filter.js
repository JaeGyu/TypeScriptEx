function positiveNumber(value) {
    return value > 0;
}
var result = [-1, -3, 0, 1, 2, 3].filter(positiveNumber);
console.log(result);
var result2 = [-1, 1].filter(positiveNumber);
console.log(result2);
function filterOption(value) {
    return value % 3 == 0;
}
var result3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(filterOption);
console.log(result3);
