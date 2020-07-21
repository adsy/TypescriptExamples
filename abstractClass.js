"use strict";
// Example of Abstract Typescript Class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BasePlanet = /** @class */ (function () {
    function BasePlanet(inName, inRadius) {
        this.name = inName;
        this.radius = inRadius;
    }
    // This function is passed onto all extended classes already created
    BasePlanet.prototype.calcDiameter = function () {
        return this.radius * 2;
    };
    return BasePlanet;
}());
var Mars = /** @class */ (function (_super) {
    __extends(Mars, _super);
    function Mars() {
        return _super.call(this, "Mars", 1234) || this;
    }
    Mars.prototype.collapseToBlackHole = function (inMoreMass) {
        console.log("END");
    };
    return Mars;
}(BasePlanet));
var m = new Mars();
m.collapseToBlackHole(9000);
