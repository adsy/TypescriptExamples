// Example of Abstract Typescript Class

abstract class BasePlanet {
  name: string;
  radius: number;

  constructor(inName: string, inRadius: number) {
    this.name = inName;
    this.radius = inRadius;
  }

  // Abstract function hides away functionality so extended classes must implement functionality
  abstract collapseToBlackHole(inMoreMass: number): void;

  // This function is passed onto all extended classes already created
  public calcDiameter() {
    return this.radius * 2;
  }
}

class Mars extends BasePlanet {
  constructor() {
    super("Mars", 1234);
  }

  public collapseToBlackHole(inMoreMass: number): void {
    console.log("END");
  }
}

let m: Mars = new Mars();

m.collapseToBlackHole(9000);
