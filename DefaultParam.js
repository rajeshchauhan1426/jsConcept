// Default parameters in JavaScript allow you to specify default values for function parameters. If a value for a parameter is not provided when the function is called, the default value will be used instead. Default parameters are particularly useful when you want to make a function more flexible by allowing some parameters to be optional.

// Here's how you can use default parameters in JavaScript:

// ```javascript
// function greet(name = "Guest") {
//   console.log(`Hello, ${name}!`);
// }

// greet(); // Output: Hello, Guest!
// greet("Alice"); // Output: Hello, Alice!
// ```

// In this example, the `greet` function has a parameter `name` with a default value of "Guest." When you call `greet()` without providing an argument, it uses the default value, but you can also provide a different value when calling `greet("Alice")`.

// You can use default parameters with any type of function parameter, not just strings:

// ```javascript
// function multiply(a, b = 2) {
//   return a * b;
// }

// console.log(multiply(3)); // Output: 6 (b defaults to 2)
// console.log(multiply(3, 4)); // Output: 12 (b is provided as 4)
// ```

// In this example, the `multiply` function has a default parameter `b` set to 2. When you call `multiply(3)`, it uses the default value for `b`, but if you provide a value for `b`, like `multiply(3, 4)`, it uses the provided value.

// You can also use default parameters with functions that have multiple parameters:

// ```javascript
// function greet(name = "Guest", timeOfDay = "day") {
//   console.log(`Good ${timeOfDay}, ${name}!`);
// }

// greet(); // Output: Good day, Guest!
// greet("Alice"); // Output: Good day, Alice!
// greet("Bob", "evening"); // Output: Good evening, Bob!
// ```

// In this example, the `greet` function has two default parameters, `name` and `timeOfDay`, with default values of "Guest" and "day" respectively. You can call the function with different combinations of arguments, and it will use the defaults where necessary.