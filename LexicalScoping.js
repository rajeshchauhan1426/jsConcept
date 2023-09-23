// Lexical scoping, also known as static scoping or lexical scope, is a fundamental concept in JavaScript (and many other programming languages). It defines how variable access is determined based on the physical placement of variables and blocks of code within the source code, rather than the runtime flow of the program. In lexical scoping, a variable's scope is determined at the time of code compilation, not when the code is executed.

// In JavaScript, lexical scoping means that a variable declared inside a function is accessible within that function and any nested functions declared within it, regardless of when and where those nested functions are called. Here's a simple example:

// ```javascript
// function outer() {
//   var outerVar = 'I am from outer!';
  
//   function inner() {
//     console.log(outerVar); // inner can access outerVar
//   }

//   return inner;
// }

// var innerFunction = outer();
// innerFunction(); // Outputs: "I am from outer!"
// ```

// In this example:

// 1. `outerVar` is declared in the `outer` function's scope.
// 2. The `inner` function is defined inside the `outer` function.
// 3. When `inner` is called, it can access `outerVar`, even though it's declared in the parent function.

// Lexical scoping allows for the concept of closures in JavaScript. A closure is a function that "closes over" the variables from its surrounding lexical scope, even if those variables are no longer in scope when the function is executed. Closures are powerful and versatile, enabling various programming patterns, such as data encapsulation and the creation of private variables.

// Here's an example of a closure:

// ```javascript
// function createCounter() {
//   var count = 0;

//   return function () {
//     return ++count;
//   };
// }

// var counter = createCounter();
// console.log(counter()); // Outputs: 1
// console.log(counter()); // Outputs: 2
// ```

// In this example:

// 1. The `createCounter` function creates a closure by returning an anonymous function.
// 2. The inner function can still access the `count` variable even though `createCounter` has already executed and exited its scope.

// Lexical scoping is the default scoping mechanism in JavaScript, and it plays a crucial role in how variables and functions are accessed and interact with each other in the language. Understanding lexical scoping is essential for writing clean and maintainable JavaScript code.