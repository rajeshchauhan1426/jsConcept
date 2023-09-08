
// In JavaScript, Object.is() is a method that is used to compare two values for strict equality, which means it checks if two values are identical. It was introduced in ECMAScript 6 (ES6) and is often used as an alternative to the === (strict equality) operator.

// Here's the basic syntax of Object.is():

// javascript
// Copy code
// Object.is(value1, value2);
// The method returns true if value1 and value2 are the same (strictly equal), and false otherwise. Unlike the === operator, Object.is() can handle some edge cases where === might not behave as expected. For example:

// javascript
// Copy code
// console.log(Object.is(1, 1));         // true
// console.log(Object.is(NaN, NaN));     // true
// console.log(Object.is(0, -0));        // false
// console.log(Object.is(null, null));   // true
// console.log(Object.is(undefined, undefined)); // true
// As you can see, Object.is() returns true for NaN values and treats 0 and -0 as different values.

// However, in most cases, you can use the === operator for strict equality comparisons, and you won't need to use Object.is() unless you specifically want to handle these edge cases differently