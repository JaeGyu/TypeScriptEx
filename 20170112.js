var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
console.log(Color);
var notSure = 4;
console.log(notSure);
notSure = "hhh";
console.log(notSure);
