// Hoisting is a behavioral aspect of JavaScript that allows variable and function declarations to be moved to the top of their respective scopes during the compilation phase before the code is executed. This means that you can use variables and call functions before they are actually declared in the code.


// Hoisting of Variable Declarations:
// When you declare a variable using var, the declaration is hoisted to the top of the current scope (either the function scope or the global scope).
// The variable's assignment (initialization) remains in place, so the variable is effectively initialized with the value undefined before its actual assignment in the code.
// If you try to access the variable before the declaration, it will have the value undefined rather than throwing an error.

console.log(myVar); // Output: undefined
var myVar = 10;
console.log(myVar); // Output: 10





// Hoisting of Function Declarations:
// Function declarations are also hoisted, meaning you can call a function before its actual declaration in the code.
// Unlike variables, the entire function (including its code) is hoisted, so you can call the function and execute its logic even before the point where the function is declared.

sayHello(); // Output: "Hello, world!"
function sayHello() {
  console.log("Hello, world!");
}

// let and const declarations are hoisted to the top of the block (lexical scope), but unlike var, they are not initialized. They are in the "temporal dead zone" until the point of declaration. If you try to access the variable before the declaration, it will result in a ReferenceError.

console.log(myVar); // ReferenceError: Cannot access 'myVar' before initialization
let myVar = 10;
console.log(myVar); // Output: 10
