//global scope
let globalVar = "I'm global"; // Declared in global scope

function exampleFunction() {
  console.log(globalVar); // Accessible within the function
}

exampleFunction(); // Output: "I'm global"
console.log(globalVar); // Output: "I'm global"


//local scope 
// Variables declared within a function or a code block (inside curly braces { }) have local scope.
// Local variables are only accessible within the function or block in which they are declared.
// There can be different local variables with the same name in different functions or blocks, and they won't conflict with each other.
// Function Scope (Using var):

function exampleFunction() {
    var localVar = "I'm local"; // Declared in function scope
    console.log(localVar); // Accessible within the function
  }
  
  exampleFunction(); // Output: "I'm local"
  console.log(localVar); // Throws an error, localVar is not defined here
  

  if (true) {
    let blockVar = "I'm local"; // Declared in block scope
    const anotherBlockVar = "I'm also local"; // Declared in block scope
    console.log(blockVar); // Accessible within the block
    console.log(anotherBlockVar); // Accessible within the block
  }
  
  console.log(blockVar); // Throws an error, blockVar is not defined here
  console.log(anotherBlockVar); // Throws an error, anotherBlockVar is not defined here
  