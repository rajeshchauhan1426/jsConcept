let myVariable1 = null;


// Checking for null: You can use the equality operator (==) or the strict equality operator (===) to check if a value is null. The strict equality operator (===) is recommended because it ensures type equality.

let myVariable = null;

if (myVariable === null) {
  console.log("The variable is null.");
} else {
  console.log("The variable is not null.");
}



// typeof null: The typeof operator applied to null returns "object", which is a historical quirk in JavaScript. It's important to note that null is not an object; it's a primitive value.

console.log(typeof null); // Outputs: "object"







let x; // This variable is assigned the value undefined by default.
let y = null; // This variable is explicitly assigned the value null.





let optionalValue = null; // Indicate that this value is optional and not currently set.



