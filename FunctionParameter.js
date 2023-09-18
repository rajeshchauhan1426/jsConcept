// In JavaScript, functions can accept parameters, which are values or variables that you can pass into the function when you call it. These parameters allow you to pass data to the function so that it can perform operations on that data. Here's how you define and use parameters in JavaScript functions:

// javascript
// Copy code
// // Function declaration with parameters
// function greet(name) {
//   console.log(`Hello, ${name}!`);
// }

// // Calling the function with an argument
// greet("John"); // Output: Hello, John!
// greet("Alice"); // Output: Hello, Alice!
// In this example, the greet function has one parameter named name. When you call greet("John"), the value "John" is passed as an argument to the name parameter, and the function uses it to create a greeting message.

// You can define multiple parameters in a function, separated by commas:

// javascript
// Copy code
// function add(a, b) {
//   return a + b;
// }

// const result = add(3, 5);
// console.log(result); // Output: 8
// In the add function, two parameters, a and b, are defined. When you call add(3, 5), the values 3 and 5 are passed as arguments, and the function returns their sum.

// You can also use default parameters, which provide a default value for a parameter if an argument is not provided:

// javascript
// Copy code
// function greet(name = "Guest") {
//   console.log(`Hello, ${name}!`);
// }

// greet(); // Output: Hello, Guest!
// greet("Alice"); // Output: Hello, Alice!
// In this example, if you call greet() without passing an argument, the name parameter will default to "Guest."

// Parameters in JavaScript functions allow you to make your functions more flexible and reusable by accepting different data inputs.