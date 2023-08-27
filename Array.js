// Creating an array of fruits
let fruits = ["apple", "banana", "orange", "grape"];

// Accessing elements using indexes
console.log(fruits[0]);  // Output: "apple"
console.log(fruits[2]);  // Output: "orange"

// Changing an element
fruits[1] = "kiwi";      // Now the array is ["apple", "kiwi", "orange", "grape"]

// Adding an element to the end of the array
fruits.push("strawberry");  // Now the array is ["apple", "kiwi", "orange", "grape", "strawberry"]

// Finding the number of elements in the array
console.log("Number of fruits:", fruits.length);  // Output: 5

// Iterating through the array
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
