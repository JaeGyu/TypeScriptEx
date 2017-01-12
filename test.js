var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Point = (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
        this.color = "red";
    }
    Point.prototype.dist = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };
    return Point;
}());
Point.origin = new Point(0, 0);
var p = new Point(1, 2);
console.log(p);
console.log(p.dist());
console.log(Point.origin);
var Point3D = (function (_super) {
    __extends(Point3D, _super);
    function Point3D(x, y, z) {
        if (z === void 0) { z = 0; }
        var _this = _super.call(this, x, y) || this;
        _this.z = z;
        return _this;
    }
    return Point3D;
}(Point));
var p3d = new Point3D(10, 20, 30);
console.log(p3d);
var Utils;
(function (Utils) {
    var Sum = (function () {
        function Sum(x, y) {
            this.x = x;
            this.y = y;
        }
        Sum.prototype.run = function () {
            return this.x + this.y;
        };
        return Sum;
    }());
    Utils.Sum = Sum;
})(Utils || (Utils = {}));
var u = new Utils.Sum(1, 2);
console.log(u.run());
