"use strict";
//Call tsc app.ts in terminal to transpile into javascript file.
//function which only accepts string input in parameter
function sayHi(humanName) {
    alert(`Hello ${humanName}`);
}
//function only accepts 2 string inputs and must return a string.
let conCatString = (str1, str2) => (str1 + str2);
let ex1 = "test";
let ex2 = 4.1;
ex2 = 3;
ex2 = 3.0;
// This will fail as it is only allowed to be a string.
// ex1=2;
// Arrays Typescript
let pets = ["Elara", "Charlie"];
let anyArray = ["Elara", 1];
// Would fail as it has to be a string variable in array
// pets = [1,2];
// Tuples Typescript
let dog = ['Elara', 2];
// Would fail as it has to be string, number
// dog = [2,'Elara']
let returnDouble = (a, b) => ("returns: " + a + b);
// Would fail as it has to return a string.
// let returnDouble = (a:number, b:number):string => (a+b);
let person = {
    firstName: "test", lastName: "test", age: 52
};
// This would fail as typescript is strict on person having 3 properties all with the same name as above.
// person = {a:"test", b:"test", c:52};
// Union Types Typescript
let myAge = 52;
myAge = "52";
// myAge = true // this would return false
// Default Parameters - allows you to ommit a variable when calling function
const multNums = (a, b = 10) => (a * b);
console.log(multNums(1));
// Spread Typescript
// ... operator on a parameter mans it will take a spread of input and put it into an array a inside the function
const addNumbs = (...a) => a.reduce((acc, val) => acc + val);
const nums = [1, 2, 3, 4, 5];
console.log(addNumbs(...nums));
// Destructuring - grab the variables from the object into their own variables.
// Destructuring an object
const person2 = {
    firstName: "Billy", lastName: "Test", age: 26
};
const { firstName, lastName, age } = person2;
console.log(firstName);
console.log(lastName);
console.log(age);
// Destructuring an array
const vals = ['adam', 'brittain', 26];
const [firstname, lastname, age2] = vals;
// Swapping 2 variables without using a 3rd holder variable
let x = 1;
let y = 2;
[x, y] = [y, x];
