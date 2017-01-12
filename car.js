var MyCar = (function () {
    function MyCar(carName, numTier) {
        this._carName = carName;
        this._numTier = numTier;
    }
    MyCar.prototype.getCarName = function () {
        return this._carName;
    };
    Object.defineProperty(MyCar.prototype, "numTier", {
        get: function () {
            return this._numTier;
        },
        enumerable: true,
        configurable: true
    });
    return MyCar;
}());
var my = new MyCar("Happy", 4);
console.log(my.getCarName() + " 자동차 차이어 개수 : " + my.numTier);
