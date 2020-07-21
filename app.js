"use strict";
//Call tsc app.ts in terminal to transpile into javascript file.
var _a;
//function which only accepts string input in parameter
function sayHi(humanName) {
    alert("Hello " + humanName);
}
//function only accepts 2 string inputs and must return a string.
var conCatString = function (str1, str2) { return (str1 + str2); };
var ex1 = "test";
var ex2 = 4.1;
ex2 = 3;
ex2 = 3.0;
// This will fail as it is only allowed to be a string.
// ex1=2;
// Arrays Typescript
var pets = ["Elara", "Charlie"];
var anyArray = ["Elara", 1];
// Would fail as it has to be a string variable in array
// pets = [1,2];
// Tuples Typescript
var dog = ['Elara', 2];
// Would fail as it has to be string, number
// dog = [2,'Elara']
var returnDouble = function (a, b) { return ("returns: " + a + b); };
// Would fail as it has to return a string.
// let returnDouble = (a:number, b:number):string => (a+b);
var person = {
    firstName: "test", lastName: "test", age: 52
};
// This would fail as typescript is strict on person having 3 properties all with the same name as above.
// person = {a:"test", b:"test", c:52};
// Union Types Typescript
var myAge = 52;
myAge = "52";
// myAge = true // this would return false
// Default Parameters - allows you to ommit a variable when calling function
var multNums = function (a, b) {
    if (b === void 0) { b = 10; }
    return (a * b);
};
console.log(multNums(1));
// Spread Typescript
// ... operator on a parameter mans it will take a spread of input and put it into an array a inside the function
var addNumbs = function () {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    return a.reduce(function (acc, val) { return acc + val; });
};
var nums = [1, 2, 3, 4, 5];
console.log(addNumbs.apply(void 0, nums));
// Destructuring - grab the variables from the object into their own variables.
// Destructuring an object
var person2 = {
    firstName: "Billy", lastName: "Test", age: 26
};
var firstName = person2.firstName, lastName = person2.lastName, age = person2.age;
console.log(firstName);
console.log(lastName);
console.log(age);
// Destructuring an array
var vals = ['adam', 'brittain', 26];
var firstname = vals[0], lastname = vals[1], age2 = vals[2];
// Swapping 2 variables without using a 3rd holder variable
var x = 1;
var y = 2;
_a = [y, x], x = _a[0], y = _a[1];
