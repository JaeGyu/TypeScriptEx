/*
    콜백 함수의 시그니처를 알고 있어야 한다.
*/
function printArray(element, index, array){
    console.log(`[ ${index} ] = ` + element);
    console.log(array);
}

[1,2,3,"four"].forEach(printArray);

[1,2,3].forEach(function(element,index,array){
    console.log(element * 2);
});

console.log("----------------------");
console.log([1,2,3].map(function(v,i,a){
    return v * 2;
}));

[1,2,3,4,5].forEach(function(e,i,a){
    let temp:string = "";
    for(var j=0;j<i+1;j++){
        temp += "*";
    }
    console.log(temp);
});

console.log("---------");

console.log([1,2,3,4,5,6,7,8,9,10].reduce(function(x,y){
    return x+y;
}));

let sumResult : number = [1,2,3,4,5,6,7,8,9,10].filter(function(item){
    return item % 2 == 0;
}).reduce(function(x,y){
    return x+y;
});

console.log(sumResult);

let sumAfterMap: number = [1,2,3,4,5,6,7,8,9,10].filter(function(item){
    return item % 2 == 0;
}).map(function(e,i,a){
    return e * 2;
}).reduce(function(x,y){
    return x+y;
});

console.log(sumAfterMap);