// // Creating two objects with similar methods
// const object1 = {
//     name: "Object 1",
//     greet: function() {
//       console.log(`Hello from ${this.name}`);
//     }
//   };
  
//   const object2 = {
//     name: "Object 2"
//   };
  
//   // Borrowing the greet function from object1 and using it in object2
//   object1.greet.call(object2); // Using call() to set the 'this' context to object2
//   // Output: Hello from Object 2
  