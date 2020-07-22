"use strict";
// Interface example
let greet = (person) => {
    console.log(`Hello ${person.firstName}`);
};
const person1 = {
    firstName: "Adam",
    lastName: "Brittain",
    age: 26,
    getGreeting() {
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    },
};
let greeting = (person) => {
    console.log(person.getGreeting());
};
let greetLOUDER = (person) => {
    console.log(`HELLO ${person.firstName.toUpperCase()}`);
};
let greetProper = (person) => {
    console.log(`Hello ${person.firstName} ${person.lastName}`);
};
let greetAge = (person) => {
    console.log(`Age: ${person.age}`);
};
greeting(person1);
greetLOUDER(person1);
greetProper(person1);
greetAge(person1);
