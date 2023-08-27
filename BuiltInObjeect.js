// String Object: Provides methods for working with strings.
const str = "Hello, World!";
console.log(str.length);           // Output: 13
console.log(str.toUpperCase());    // Output: HELLO, WORLD!
console.log(str.indexOf("World")); // Output: 7



// Number Object: Provides methods for working with numbers.
const num = 42.12345;
console.log(num.toFixed(2));      // Output: 42.12
console.log(num.toPrecision(4));  // Output: 42.12
console.log(Number.isInteger(num));// Output: false


// Array Object: Provides methods for working with arrays.
const arr = [1, 2, 3, 4, 5];
console.log(arr.length);           // Output: 5
console.log(arr.reverse());        // Output: [5, 4, 3, 2, 1]
console.log(arr.indexOf(3));       // Output: 2


// Object Object: The root object for all objects in JavaScript.
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
  };
  console.log(Object.keys(person));   // Output: ["firstName", "lastName", "age"]
  console.log(Object.values(person)); // Output: ["John", "Doe", 30]

  
//   Math Object: Provides mathematical constants and functions.
console.log(Math.PI);           // Output: 3.141592653589793
console.log(Math.sqrt(16));     // Output: 4
console.log(Math.random());     // Output: a random number between 0 and 1


// Date Object: Provides methods for working with dates and times.
const today = new Date();
console.log(today.toLocaleDateString()); // Output: formatted date
console.log(today.getHours());           // Output: current hour


// RegExp Object: Provides methods for working with regular expressions.
const pattern = /hello/g;
console.log(pattern.test("hello world")); // Output: true
console.log(pattern.exec("hello world")); // Output: ["hello"]
