// // String to Number
// let str = "42";
// let num1 = Number(str); // Using Number() function
// // or
// let num2 = parseFloat(str); // Using parseFloat()
// // or
// let num3 = parseInt(str); // Using parseInt()


// //Number to String
// let num = 42;
// let str1 = String(num); // Using String() function
// // or
// let str2 = num.toString(); // Using toString() method


// // Boolean to String:
// let bool = true;
// let str3 = String(bool); // Using String() function


// // String to Boolean:
// let str5 = "true";
// let bool1 = Boolean(str); // Using Boolean() function




// Explicit type casting, also known as type conversion, is the deliberate and manual process of converting a value from one data type to another in a programming language. In JavaScript, you can perform explicit type casting using various methods to ensure that a value is treated as a specific data type for a particular operation. Here are some examples of explicit type casting in JavaScript:

// String to Number:
// javascript
// Copy code

// let str = "42";
// let num = Number(str); // Using Number() function
// // or
// let num = parseFloat(str); // Using parseFloat()
// // or
// let num = parseInt(str); // Using parseInt()
// Number to String:
// javascript
// Copy code
// let num = 42;
// let str = String(num); // Using String() function
// // or
// let str = num.toString(); // Using toString() method







// Boolean to String:
// javascript
// Copy code

// let bool = true;
// let str = String(bool); // Using String() function
// String to Boolean:
// javascript
// Copy code
// let str = "true";
// let bool = Boolean(str); // Using Boolean() function


// Explicit Type Casting Operators:
// JavaScript has operators that can be used for explicit type casting in specific contexts:

// The + operator can be used for explicit casting to numbers or strings:
// javascript
// Copy code
// let strNum = "42";
// let num = +strNum; // Converts to a number
// The String() constructor can be used for explicit string conversion:
// javascript
// Copy code
// let num = 42;
// let str = String(num); // Converts to a string
// The Boolean() constructor can be used for explicit boolean conversion:
// javascript
// Copy code
// let num = 0;
// let boolValue = Boolean(num); // Converts to a boolean
// It's important to understand the rules and potential implications of explicit type casting. While explicit type casting can be helpful for clarifying intentions in code, it's essential to handle type conversions carefully to avoid unexpected behavior or errors.