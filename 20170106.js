var pow1 = function (x) {
    return x * x;
};
console.log(pow1(3));
var pow2 = function (x) {
    return x * x;
};
console.log(pow2(4));
var sumAfterMap2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(function (e) {
    return e % 2 == 0;
}).map(function (e) {
    return e * 2;
}).reduce(function (x, y) {
    return x + y;
});
console.log(sumAfterMap2);
(function (x) {
    console.log(x * x);
})(3);
