// Logical operators in JavaScript are used to perform logical operations on Boolean values. They allow you to combine or manipulate Boolean values to make decisions and control the flow of your code. JavaScript has three main logical operators: && (logical AND), || (logical OR), and ! (logical NOT). Here's how each of them works:

// Logical AND (&&):

// Returns true if both operands are true, otherwise returns false.
// If the first operand is false, it doesn't evaluate the second operand (short-circuiting).
// javascript
// Copy code
// let isTrue = true;
// let isFalse = false;

// console.log(isTrue && isTrue);   // true
// console.log(isTrue && isFalse);  // false
// console.log(isFalse && isTrue);  // false
// console.log(isFalse && isFalse); // false
// Logical OR (||):

// Returns true if at least one operand is true, otherwise returns false.
// If the first operand is true, it doesn't evaluate the second operand (short-circuiting).
// javascript
// Copy code
// let isTrue = true;
// let isFalse = false;

// console.log(isTrue || isTrue);   // true
// console.log(isTrue || isFalse);  // true
// console.log(isFalse || isTrue);  // true
// console.log(isFalse || isFalse); // false
// Logical NOT (!):

// Inverts the Boolean value of an operand.
// Returns true if the operand is false, and returns false if the operand is true.
// javascript
// Copy code
// let isTrue = true;
// let isFalse = false;

// console.log(!isTrue);  // false
// console.log(!isFalse); // true
// Logical operators are commonly used in conditional statements (if, else if, else), loops, and other decision-making structures to control the flow of a program based on conditions. They allow you to create more complex conditions by combining multiple Boolean values or expressions.