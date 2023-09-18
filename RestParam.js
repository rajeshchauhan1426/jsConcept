// In JavaScript, the rest parameter allows you to represent an indefinite number of arguments as an array within a function's parameter list. This feature is handy when you want to work with a variable number of arguments passed to a function. The rest parameter is indicated by three dots (`...`) followed by a parameter name and must be the last parameter in the parameter list.

// Here's how you can use the rest parameter in JavaScript:

// ```javascript
// function sum(...numbers) {
//   let result = 0;
//   for (let number of numbers) {
//     result += number;
//   }
//   return result;
// }

// console.log(sum(1, 2, 3)); // Output: 6
// console.log(sum(4, 5, 6, 7, 8)); // Output: 30
// ```

// In the `sum` function, the rest parameter is `...numbers`, which allows you to pass any number of arguments. Inside the function, `numbers` is treated as an array containing all the arguments passed to the function. You can then loop through this array and perform operations on the values.

// You can also combine regular parameters with the rest parameter:

// ```javascript
// function multiply(factor, ...numbers) {
//   return numbers.map(num => num * factor);
// }

// console.log(multiply(2, 1, 2, 3)); // Output: [2, 4, 6]
// ```

// In this example, the `multiply` function takes a `factor` parameter followed by the rest parameter `...numbers`. The `factor` parameter receives the first argument, and `numbers` collects the rest of the arguments in an array.

// Keep in mind that only the last parameter in a function can be a rest parameter, and you can't have multiple rest parameters in a single function.