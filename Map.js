//The syntax of the map() function is as follow
const newArray = array.map(function(currentValue, index, array) {
  // Return the new value after applying some operation on currentValue
});



// Here's a breakdown of the parameters:

// currentValue: The current element being processed in the array.
// index: The index of the current element.
// array: The array that map() was called upon.
// The map() function returns a new array with the results of calling the provided function on every element in the original array. It does not modify the original array.


const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(function(number) {
  return number * number;
});

console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]





// In modern JavaScript, you can also use arrow functions for more concise code:


const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(number => number * number);

console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]


// The map() function is a powerful tool for transforming data in arrays and is commonly used in functional programming paradigms.