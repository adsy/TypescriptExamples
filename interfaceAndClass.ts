// Example of a class extending an interface

interface IPersonClass {
  _firstName: string;
  greet(): void;
}

class Person implements IPersonClass {
  _firstName: string;

  constructor(inName: string) {
    this._firstName = inName;
  }

  public greet() {
    console.log(this._firstName);
  }
}

// Example of an interface extending an interface

interface IName {
  firstName: string;
}

interface INinja extends IName {
  numSwords: number;
}
// as keyword below tells typscript typ checker to treat an object as being of a given type (INinja).
let ninja = {} as INinja;
ninja.firstName = "test";
ninja.numSwords = 2;
