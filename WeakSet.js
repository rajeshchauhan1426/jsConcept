// Creating a WeakSet:
const myWeakSet = new WeakSet();

// Adding and Deleting Elements:
const obj1 = {};
const obj2 = {};

myWeakSet.add(obj1);
myWeakSet.add(obj2);

console.log(myWeakSet.has(obj1)); // true
console.log(myWeakSet.has(obj2)); // true

myWeakSet.delete(obj1);
console.log(myWeakSet.has(obj1)); // false


//Weak Refenences
// The key feature of a weak set is that it only holds weak references to its elements. This means that if there are no other references to an object, it will be automatically removed from the weak set when the JavaScript engine performs garbage collection:
const weakSet = new WeakSet();

(function () {
  const obj = {};
  weakSet.add(obj);
})(); // obj goes out of scope

// At this point, obj may be garbage collected and removed from the weak set.
