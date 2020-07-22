// Namepsace example - object that contains other code. Provides a wrapper of sorts keeping it out of global scope

namespace FirstNamespace {
  export let homeworld = "Jakku";
  export function sayName() {
    alert("Rey");
  }
}

FirstNamespace.sayName();
