"use strict";
// Example of a class extending an interface
class Person {
    constructor(inName) {
        this._firstName = inName;
    }
    greet() {
        console.log(this._firstName);
    }
}
// as keyword below tells typscript typ checker to treat an object as being of a given type (INinja).
let ninja = {};
ninja.firstName = "test";
ninja.numSwords = 2;
