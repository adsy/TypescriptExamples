"use strict";
// Namepsace example - object that contains other code. Provides a wrapper of sorts keeping it out of global scope
var FirstNamespace;
(function (FirstNamespace) {
    FirstNamespace.homeworld = "Jakku";
    function sayName() {
        alert("Rey");
    }
    FirstNamespace.sayName = sayName;
})(FirstNamespace || (FirstNamespace = {}));
FirstNamespace.sayName();
