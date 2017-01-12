var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Animal = (function () {
    function Animal(name, leg) {
        this.name = name;
        this.leg = leg;
    }
    Animal.prototype.getLeg = function () {
        return this.leg;
    };
    Animal.prototype.getName = function () {
        return this.name;
    };
    return Animal;
}());
var Monkey = (function (_super) {
    __extends(Monkey, _super);
    function Monkey(name, leg) {
        return _super.call(this, name, leg) || this;
    }
    Monkey.prototype.isClimbing = function () {
        return true;
    };
    Monkey.prototype.superGetName = function () {
        return _super.prototype.getName.call(this);
    };
    return Monkey;
}(Animal));
var monkey = new Monkey("Lemur", 2);
console.log("\uC6D0\uC22D\uC774 \uC774\uB984 : " + monkey.name);
console.log("\uC0C1\uC704 \uD074\uB798\uC2A4\uC758 \uBA54\uC11C\uB4DC \uD638\uCD9C: " + monkey.superGetName());
