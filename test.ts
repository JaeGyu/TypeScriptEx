class Point{
    private x:number;
    private y:number;
    private color:string;

    constructor(x: number, y: number){
        this.x = x;
        this.y = y;
        this.color = "red";
    }

    dist(){
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    static origin = new Point(0,0);
}

var p = new Point(1,2);

console.log(p);
console.log(p.dist());
console.log(Point.origin);

class Point3D extends Point{
    constructor(x: number, y: number, public z:number = 0){
        super(x,y);
    }
}

var p3d = new Point3D(10,20,30);
console.log(p3d);


module Utils{
    export class Sum{
        private x:number;
        private y:number;

        constructor(x:number,y:number){
            this.x = x;
            this.y = y;            
        }

        run(){
            return this.x+this.y;
        }
    }
}

var u = new  Utils.Sum(1,2);
console.log(u.run());