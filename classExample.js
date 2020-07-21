"use strict";
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
// Class and Properties example of Typescript in Javascript OOP
var Planet = /** @class */ (function () {
    function Planet(inName, inMass) {
        this._name = inName;
        this._mass = inMass;
    }
    // Static method - an instance does not need to be created to call this
    Planet.isThisAPlanet = function () {
        return "yes it is";
    };
    // Instance method - will return the contents of the name function below as it is replacing the non visible this._name
    Planet.prototype.printName = function () {
        console.log(this.name);
    };
    Object.defineProperty(Planet.prototype, "name", {
        // Public getter function
        get: function () {
            return "The name of this planet is " + this._name;
        },
        // Public setter function
        set: function (inName) {
            this._name = inName;
        },
        enumerable: false,
        configurable: true
    });
    return Planet;
}());
var Earth = /** @class */ (function (_super) {
    __extends(Earth, _super);
    function Earth() {
        var _this = _super.call(this, "Earth", 1234) || this;
        _this.oxygenAtmosphere = true;
        // Example of how you can overrid the number being passed into the constructor
        _this._mass = 5555;
        return _this;
    }
    Earth.prototype.printMass = function () {
        console.log(this._mass);
    };
    return Earth;
}(Planet));
var earth = new Earth();
// This will give an error as earth._name is private and can only be accessed via public functions.
// console.log(earth._name);
earth.name;
// We can set the private _name variable using this setter method
earth.name = "not Earth";
earth.name;
console.log(Planet.isThisAPlanet());
