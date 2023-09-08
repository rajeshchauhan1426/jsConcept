
// In JavaScript, loops are used to repeatedly execute a block of code until a certain condition is met. There are several types of loops in JavaScript, including the following:

// for Loop:
// The for loop is used when you know in advance how many times you want to execute the loop. It has three parts: initialization, condition, and iteration.

// javascript
// Copy code
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }
// while Loop:
// The while loop repeatedly executes a block of code as long as a specified condition is true.

// javascript
// Copy code
// let i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }
// do...while Loop:
// The do...while loop is similar to the while loop, but it always executes the code block at least once, even if the condition is false.

// javascript
// Copy code
// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 5);
// for...in Loop: 
// The for...in loop is used to iterate over the properties of an object.

// javascript
// Copy code
// const person = {
//   name: 'John',
//   age: 30,
// };

// for (const key in person) {
//   console.log(key, person[key]);
// }
// for...of Loop:
// The for...of loop is used to iterate over iterable objects like arrays, strings, maps, sets, etc.

// javascript
// Copy code
// const colors = ['red', 'green', 'blue'];

// for (const color of colors) {
//   console.log(color);
// }
// These are the basic types of loops in JavaScript. Depending on your specific task and requirements, you can choose the loop that best suits your needs. Loops are essential for performing repetitive tasks and iterating over collections of data in your JavaScript programs