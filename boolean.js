let isTrue = true;
let isFalse = false;

if (isTrue) {
  console.log("This will be printed.");
}

if (!isFalse) {
  console.log("This will also be printed.");
}

// Logical Operators: JavaScript provides three main logical operators: && (logical AND), || (logical OR), and ! (logical NOT). These operators are used to combine or negate boolean values.

let a = true;
let b = false;

let result1 = a && b; // Logical AND
let result2 = a || b; // Logical OR
let result3 = !a;     // Logical NOT

console.log(result1); // Outputs: false
console.log(result2); // Outputs: true
console.log(result3); // Outputs: false


// Comparison Operators: Comparison operators, such as ==, ===, !=, !==, >, <, >=, and <=, are used to compare values and return boolean results.

let x = 5;
let y = 10;

let isEqual = x === y; // Strict equality check
let isGreaterThan = x > y;
let isLessThanOrEqual = x <= y;

console.log(isEqual);            // Outputs: false
console.log(isGreaterThan);      // Outputs: false
console.log(isLessThanOrEqual);  // Outputs: true
