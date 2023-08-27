//
//Objects:
// In JavaScript, objects are the most basic form of a keyed collection. They allow you to store data as key-value pairs, where the keys are strings (or Symbols) and the values can be of any data type. Objects are often used when you need to associate named properties with values.
const person = {
  name: "John",
  age: 30,
  occupation: "Developer",
};













//  Maps:
// Maps are a more versatile form of a keyed collection introduced in ECMAScript 2015 (ES6). Unlike objects, maps can have keys of any data type, not just strings or Symbols. This makes them suitable for scenarios where you want to use complex data types as keys.
const myMap = new Map();
const keyObj = {};
const keyFunc = () => {};

myMap.set(keyObj, "Value associated with an object key");
myMap.set(keyFunc, "Value associated with a function key");






//Sets:
// Sets are another keyed collection introduced in ES6. Unlike maps, sets store only keys without associated values. They maintain a collection of unique values and can be useful for scenarios where you need to manage a collection of distinct items.
const mySet = new Set();
mySet.add(1);
mySet.add("Hello");
mySet.add(true);




// Keyed collections provide benefits like efficient lookups and modifications of data based on keys, and they are crucial for organizing and managing data in various programming tasks.
