// Interface example

let greet = (person: { firstName: string }) => {
  console.log(`Hello ${person.firstName}`);
};

// The code below would result in an error as the person argument NEEDS firstName.
// let person1 = { name: "test" };
// greet(person1);

// Example of interface template to reduce duplicate code
interface IPerson {
  firstName: string;
  // Method within an interface
  getGreeting(lastName?: String): void;
  lastName?: string;
  age?: number;
}

const person1 = {
  firstName: "Adam",
  lastName: "Brittain",
  age: 26,
  getGreeting() {
    console.log(`Hello ${this.firstName} ${this.lastName}`);
  },
};

let greeting = (person: IPerson) => {
  console.log(person.getGreeting());
};
let greetLOUDER = (person: IPerson) => {
  console.log(`HELLO ${person.firstName.toUpperCase()}`);
};
let greetProper = (person: IPerson) => {
  console.log(`Hello ${person.firstName} ${person.lastName}`);
};
let greetAge = (person: IPerson) => {
  console.log(`Age: ${person.age}`);
};

greeting(person1);
greetLOUDER(person1);
greetProper(person1);
greetAge(person1);
