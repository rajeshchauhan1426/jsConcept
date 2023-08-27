//variable declaration
let x;
console.log(x); // Outputs: undefined




//function Return
function doNothing() {
    // No return statement
  }
  
  console.log(doNothing()); // Outputs: undefined





  //Propert Or Index Access
  let obj = { key: "value" };
console.log(obj.nonExistentProperty); // Outputs: undefined

let arr = [1, 2, 3];
console.log(arr[10]); // Outputs: undefined



//Explict Assignment
let y = undefined;
console.log(y); // Outputs: undefined





//Compsrsions
console.log(undefined == null); // Outputs: true
console.log(undefined === null); // Outputs: false
console.log(undefined == undefined); // Outputs: true
// undefined == null is true because they are loosely equal in JavaScript.
// undefined === null is false because they are not the same type, and the strict equality check (===) includes type comparison.
// undefined == undefined is true because a value is always equal to itself in loose equality comparisons.