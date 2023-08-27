let regularNumber = 12345678901234567890;
let bigIntValue = 12345678901234567890n;
let anotherBigInt = BigInt("987654321987654321987654321");

// Operations: You can perform arithmetic operations on BigInt values just like regular numbers.

let a = 123n;
let b = 456n;

let sum = a + b;
let difference = a - b;
let product = a * b;
let quotient = a / b;

console.log(sum); // Outputs: 579n
console.log(difference); // Outputs: -333n
console.log(product); // Outputs: 56088n
console.log(quotient); // Outputs: 0n



// Comparison: BigInt values can be compared using standard comparison operators.
let x = 12345678901234567890n;
let y = 987654321987654321n;

console.log(x > y); // Outputs: false
console.log(x < y); // Outputs: true
console.log(x === y); // Outputs: false


// Type Conversion: You can convert BigInt values to regular numbers (if they fit within the range) or convert regular numbers to BigInt using the Number() and BigInt() functions.

let bigInt = 12345678901234567890n;
let regularNumber1 = Number(bigInt);
let convertedBackToBigInt = BigInt(regularNumber);

