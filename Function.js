// Certainly! In JavaScript, you can define functions to encapsulate a block of code that can be executed when the function is called. Here's how you can create and use functions in JavaScript:

// ```javascript
// // Defining a simple function
// function greet(name) {
//   console.log(`Hello, ${name}!`);
// }

// // Calling the function
// greet("John"); // Output: Hello, John!
// ```

// In the example above, we've defined a function called `greet` that takes a parameter `name`. When the function is called with an argument, it prints a greeting message including the provided name.

// Here are some key points about functions in JavaScript:

// 1. **Function Declaration**: You can declare a function using the `function` keyword, followed by the function name, a list of parameters (if any), and the function body enclosed in curly braces `{}`.

// 2. **Parameters**: Functions can accept zero or more parameters. These parameters act as variables that hold the values passed to the function when it is called.

// 3. **Return Values**: A function can return a value using the `return` statement. If a function doesn't explicitly return a value, it returns `undefined` by default.

// ```javascript
// function add(a, b) {
//   return a + b;
// }

// const result = add(5, 3);
// console.log(result); // Output: 8
// ```

// 4. **Function Expressions**: You can also define functions using function expressions, which allow you to create anonymous functions (functions without a name) and assign them to variables.

// ```javascript
// const multiply = function(a, b) {
//   return a * b;
// };

// console.log(multiply(4, 2)); // Output: 8
// ```

// 5. **Arrow Functions**: Arrow functions provide a concise way to define functions, especially for simple one-liner functions.

// ```javascript
// const square = (x) => x * x;

// console.log(square(3)); // Output: 9
// ```

// 6. **Function Invocation**: To execute a function, you call it by its name followed by parentheses, passing any required arguments inside the parentheses.

// 7. **Scope**: Functions have their own scope, which means variables declared within a function are local to that function and cannot be accessed from outside.

// 8. **Hoisting**: Function declarations are hoisted in JavaScript, which means you can call a function before it's defined in the code. Function expressions are not hoisted in the same way.

// ```javascript
// hoistedFunction(); // This works
// function hoistedFunction() {
//   console.log("This function is hoisted.");
// }

// nonHoistedFunction(); // This would result in an error
// const nonHoistedFunction = function() {
//   console.log("This function is not hoisted.");
// };
// ```

// Functions are fundamental in JavaScript and are used for code organization, reusability, and creating modular code.