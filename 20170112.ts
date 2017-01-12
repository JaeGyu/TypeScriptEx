enum Color {Red=1,Green,Blue};

let c:Color = Color.Green;

console.log(c);
console.log(Color);

//값의 타입이 확실하지 않을경우 사용 한다.
let notSure:any = 4;

console.log(notSure);
notSure = "hhh";
console.log(notSure);