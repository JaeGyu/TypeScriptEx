//아래의 주석에 있는 node-0.12.d.ts 에 정의된 도움을 주는 스펙으로 인해 코딩시 도움말이 나온다.
//그래서 문법을 모르는 초보자라도 어느정도 가이드를 받으면서 코딩 할 수 있다. 
/// <reference path="typings/node/node-0.12.d.ts" />

//ES6 문법 
import {createServer} from "http";

export function simpleServer(port:number, msg:string){
    createServer((req,res) => {
        res.writeHead(200, {"Content-Type":"text/html"})
        res.write("<h1>" + msg + "</h1>");
        res.end();
    }).listen(port);
}