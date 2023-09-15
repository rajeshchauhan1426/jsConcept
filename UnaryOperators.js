// In JavaScript, unary operators are operators that work with only one operand, which means they operate on a single value or variable. Unary operators are used to perform various operations such as negation, type conversion, and more. Here are some common unary operators in JavaScript:

// Unary Plus (+): The unary plus operator is used to convert its operand into a number, if it's not already. It's essentially a no-op for numbers but can convert strings to numbers.

// javascript
// Copy code
// var x = "5";
// var y = +x; // y will be 5 (a number)
// Unary Negation (-): The unary minus operator is used to negate a number.

// javascript
// Copy code
// var x = 5;
// var y = -x; // y will be -5
// Logical NOT (!): The logical NOT operator is used to negate a boolean value.

// javascript
// Copy code
// var x = true;
// var y = !x; // y will be false
// Bitwise NOT (~): The bitwise NOT operator inverts the bits of its operand.

// javascript
// Copy code
// var x = 5; // Binary representation: 0000 0101
// var y = ~x; // y will be -6 (Binary representation: 1111 1010)
// typeof Operator: The typeof operator is used to determine the type of its operand.

// javascript
// Copy code
// var x = 42;
// var y = "Hello";
// console.log(typeof x); // "number"
// console.log(typeof y); // "string"
// Void Operator: The void operator evaluates an expression but returns undefined. It is sometimes used to prevent the browser from navigating to a new page when clicking on a link.

// javascript
// Copy code
// var result = void 0; // result will be undefined
// These unary operators are important in JavaScript for various purposes, including data manipulation, type checking, and controlling program flow. Understanding how they work is crucial when working with JavaScript.