"use strict";
// Example of Abstract Typescript Class
class BasePlanet {
    constructor(inName, inRadius) {
        this.name = inName;
        this.radius = inRadius;
    }
    // This function is passed onto all extended classes already created
    calcDiameter() {
        return this.radius * 2;
    }
}
class Mars extends BasePlanet {
    constructor() {
        super("Mars", 1234);
    }
    collapseToBlackHole(inMoreMass) {
        console.log("END");
    }
}
let m = new Mars();
m.collapseToBlackHole(9000);
