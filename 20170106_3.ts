class Test{
    constructor(){}

    private toString():string{
        return "Test";
    }

    public toString2():string{
        return "Test";
    }
}

var test:Test = new Test();
console.log(test.toString2());