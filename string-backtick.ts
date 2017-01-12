let multi_line: string = `
one = 1
two = 2
`;

console.log(multi_line);

let hello : string = "Hello World!";
let w: string = `
    ${hello}
`;

console.log(w);

console.log(` ${1+1}`);

function funcBackTick() : string{
    return "good bye ejk!";
}

console.log(`${funcBackTick()}`);