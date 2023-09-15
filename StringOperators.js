// In JavaScript, you can use several operators for working with strings. These operators allow you to manipulate, concatenate, and compare strings. Here are the most commonly used string operators in JavaScript:

// Concatenation Operator (+):
// The + operator is used for concatenating (joining together) two or more strings.

// javascript
// Copy code
// const str1 = "Hello";
// const str2 = " World";
// const result = str1 + str2; // "Hello World"
// String Length (.length):
// You can retrieve the length (number of characters) of a string using the .length property.

// javascript
// Copy code
// const str = "JavaScript";
// const length = str.length; // 10
// String Indexing ([]):
// You can access individual characters in a string using square brackets and the character's index (0-based).

// javascript
// Copy code
// const str = "JavaScript";
// const firstCharacter = str[0]; // "J"
// const fifthCharacter = str[4]; // "S"
// Substring Extraction (.substring()):
// You can extract a portion of a string using the .substring() method.

// javascript
// Copy code
// const str = "JavaScript";
// const subStr = str.substring(4, 7); // "Scr"
// String Comparison Operators:
// You can compare strings using the equality (=== and !==) and relational (<, >, <=, >=) operators.

// javascript
// Copy code
// const str1 = "apple";
// const str2 = "banana";

// const isEqual = str1 === str2; // false
// const isNotEqual = str1 !== str2; // true
// const isLessThan = str1 < str2; // true (lexicographically)
// String Interpolation (Template Literals):
// Template literals (enclosed in backticks ``) allow you to interpolate variables and expressions within a string using ${}.

// javascript
// Copy code
// const name = "John";
// const greeting = `Hello, ${name}!`; // "Hello, John!"
// String Concatenation Assignment (+=):
// You can use += to concatenate and assign a new value to an existing string variable.

// javascript
// Copy code
// let str = "Hello";
// str += " World"; // "Hello World"
// String Methods:
// JavaScript provides various string methods, such as .toUpperCase(), .toLowerCase(), .charAt(), .indexOf(), .replace(), and more, for manipulating and working with strings.

// javascript
// Copy code
// const str = "JavaScript is fun!";
// const upperCase = str.toUpperCase(); // "JAVASCRIPT IS FUN!"
// const indexOfIs = str.indexOf("is"); // 11
// const replacedString = str.replace("fun", "awesome"); // "JavaScript is awesome!"
// These operators and methods enable you to perform a wide range of string operations in JavaScript, making it a versatile language for working with text data.