var pow1 = function(x){
    return x*x;
};

console.log(pow1(3));
var pow2 = (x)=>{
    return x*x;
};
console.log(pow2(4));

let sumAfterMap2: number = [1,2,3,4,5,6,7,8,9,10].filter((e)=>{
    return e % 2 == 0;
}).map((e)=>{
    return e * 2;
}).reduce((x,y)=>{
    return x+y;
});

console.log(sumAfterMap2);

((x)=>{
    console.log(x*x);
})(3);
