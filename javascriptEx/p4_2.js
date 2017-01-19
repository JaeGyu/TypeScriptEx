

var Fun = function(name){
    this.name = name;
    this.getName = function(){
        return this.name;
    };
};


var main = function(){
    var f = new Fun("Alice");
    console.log(f.getName());
};

main();