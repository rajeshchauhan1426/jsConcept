// Prototype inheritance is a fundamental concept in JavaScript's object-oriented programming model. It allows objects to inherit properties and methods from other objects, creating a chain of prototypes that facilitates code reuse and structure.

// Here's a breakdown of how prototype inheritance works:

// Prototype Chain:
// Each object in JavaScript has a prototype, which is another object from which it inherits properties and methods. This creates a chain of prototypes, commonly referred to as the "prototype chain."

// Constructor Functions and Prototypes:
// Constructor functions are used to create objects with shared properties and methods. The prototype property of a constructor function holds the prototype object that will be used as the template for objects created by that constructor.

// Inheriting Properties and Methods:
// When you access a property or method on an object, JavaScript first looks for that property or method on the object itself. If it doesn't find it, it searches the object's prototype, then the prototype's prototype, and so on, until it either finds the property/method or reaches the end of the prototype chain.



// Parent constructor
function Animal(name) {
    this.name = name;
  }
  
  // Method added to the prototype of Animal
  Animal.prototype.speak = function() {
    console.log(`${this.name} makes a sound.`);
  };
  
  // Child constructor inheriting from Animal
  function Dog(name) {
    // Call the parent constructor
    Animal.call(this, name);
  }
  
  // Set up the prototype chain
  Dog.prototype = Object.create(Animal.prototype);
  
  // Add a specific method to the Dog prototype
  Dog.prototype.bark = function() {
    console.log(`${this.name} barks loudly!`);
  };
  
  // Create instances of Dog
  const dog1 = new Dog("Buddy");
  const dog2 = new Dog("Max");
  
  // Access properties and methods through inheritance
  dog1.speak(); // Output: Buddy makes a sound.
  dog2.bark();  // Output: Max barks loudly!
  