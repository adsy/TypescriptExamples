// Class and Properties example of Typescript in Javascript OOP
class Planet {
  // Member visibility
  // Private - will only be accessable by code within the class.
  // Protected - will only be accessable by code within the class and classes that extend Base class
  private _name: string | null;
  protected _mass: number | null;

  constructor(inName: string, inMass: number) {
    this._name = inName;
    this._mass = inMass;
  }

  // Static method - an instance does not need to be created to call this
  static isThisAPlanet() {
    return "yes it is";
  }

  // Instance method - will return the contents of the name function below as it is replacing the non visible this._name
  public printName() {
    console.log(this.name);
  }

  // Public getter function
  get name() {
    return `The name of this planet is ${this._name}`;
  }

  // Public setter function
  set name(inName: string) {
    this._name = inName;
  }
}

class Earth extends Planet {
  private oxygenAtmosphere: boolean = true;

  // Example of how you can overrid the number being passed into the constructor
  protected _mass: number = 5555;

  constructor() {
    super("Earth", 1234);
  }

  public printMass() {
    console.log(this._mass);
  }
}

let earth: Earth = new Earth();

// This will give an error as earth._name is private and can only be accessed via public functions.
// console.log(earth._name);
earth.name;

// We can set the private _name variable using this setter method
earth.name = "not Earth";

earth.name;

console.log(Planet.isThisAPlanet());
