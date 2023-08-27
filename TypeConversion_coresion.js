//Type Conversion:
// Type conversion is the explicit process of converting a value from one data type to another. It's initiated by the programmer and typically involves using built-in functions or methods.

let num = 42;
let str = String(num);  // Convert number to string explicitly


// Type coercion is the automatic and implicit process of converting values from one data type to another during operations or comparisons. JavaScript performs type coercion when you perform operations involving different data types.

let result = "3" + 2;  // JavaScript coerces the number 2 to a string and concatenates
console.log(result);   // Output: "32"


// In this example, the number 2 is coerced into a string and concatenated with the string "3".

// JavaScript's type coercion can lead to unexpected behavior if not understood properly. It's important to be aware of how different data types are converted in various scenarios.

// Some common type coercion rules in JavaScript include:

// When using the + operator with a string and another value, JavaScript tends to convert the non-string value to a string and perform string concatenation.
// When using comparison operators (== and ===), JavaScript may coerce values to the same type before comparing them, particularly with the == operator. The === operator performs a strict comparison without type coercion.
// Boolean values can be coerced to numbers (true becomes 1, false becomes 0) in numeric operations.
// It's a good practice to be explicit about type conversion when needed to ensure clarity and avoid unexpected results. When dealing with type coercion, it's essential to understand the coercion rules to prevent unintended behavior in your code.