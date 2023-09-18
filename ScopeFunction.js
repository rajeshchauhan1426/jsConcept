// In JavaScript, the concept of scope refers to the region of your code where a particular variable or function is visible and can be accessed. When a function is called, a new scope is created, forming what is often referred to as the "function scope" or "execution context." These scopes are organized in a stack-like structure called the "call stack."

// Here's a simplified explanation of how scopes and the function stack work:

// 1. **Global Scope:** This is the outermost scope, representing variables and functions declared outside of any function. Variables declared in the global scope are accessible from anywhere in your code.

// 2. **Function Scope:** Each time a function is called, a new scope is created for that function. This scope contains the local variables and function parameters specific to that function. Variables declared within a function are not accessible from outside the function.

// 3. **Block Scope (ES6 and later):** With the introduction of `let` and `const` in ECMAScript 6 (ES6), JavaScript also supports block-level scoping. Variables declared with `let` and `const` within a block (e.g., inside an `if` statement or a `for` loop) have a scope limited to that block.

// When a function is called, it's pushed onto the call stack, creating a new execution context with its own scope. When the function finishes executing, it's popped off the stack, and its scope is destroyed. This stack-based approach ensures that variables and functions don't interfere with each other, and it helps manage memory efficiently.

// Here's an example to illustrate the function stack and scope:

// ```javascript
// var globalVariable = "I'm global"; // Global scope

// function outerFunction() {
//   var outerVariable = "I'm in outerFunction"; // Outer function scope
  
//   function innerFunction() {
//     var innerVariable = "I'm in innerFunction"; // Inner function scope
//     console.log(innerVariable); // Accesses innerVariable
//     console.log(outerVariable); // Accesses outerVariable
//     console.log(globalVariable); // Accesses globalVariable
//   }

//   innerFunction();
// }

// outerFunction();
// console.log(globalVariable); // Accesses globalVariable
// console.log(outerVariable); // Error: outerVariable is not defined
// console.log(innerVariable); // Error: innerVariable is not defined
// ```

// In this example:

// - `globalVariable` is accessible from anywhere because it's in the global scope.
// - `outerVariable` is accessible within `outerFunction`, but not outside of it.
// - `innerVariable` is only accessible within `innerFunction`.

// The call stack reflects the order of function calls and their respective scopes:

// 1. `outerFunction` is pushed onto the stack.
// 2. `innerFunction` is pushed onto the stack (inside `outerFunction`).
// 3. `innerFunction` completes and is popped off the stack.
// 4. `outerFunction` completes and is popped off the stack.

// As a result, when you try to access `outerVariable` and `innerVariable` outside their respective scopes, you get reference errors.