// In JavaScript, the concept of an "object prototype" is fundamental to its object-oriented nature and plays a crucial role in inheritance and property delegation. Let's break down what an object prototype is and how it works.

// 1. **Prototype:**
//    A prototype is an object that serves as a template or blueprint for other objects. It provides a set of properties and methods that other objects can inherit.

// 2. **Object Prototype:**
//    In JavaScript, every object has a prototype. When you create an object, it inherits properties and methods from its prototype. This inheritance mechanism allows you to create new objects based on existing ones while sharing common behavior.

// 3. **`prototype` Property:**
//    Every constructor function in JavaScript (functions that are used to create objects, often with the `new` keyword) has a property named `prototype`. This property holds the prototype object that will be used as the prototype for objects created by that constructor function.

// 4. **Prototype Chain:**
//    When you try to access a property or method on an object, JavaScript first checks if the property exists on the object itself. If it doesn't find the property, it looks up the prototype chain by checking the prototype of the object, then the prototype of the prototype, and so on, until it either finds the property or reaches the end of the chain.



// Base constructor for creating animal objects
function Animal(name, sound) {
    this.name = name;
    this.sound = sound;
  }
  
  // Adding a method to the prototype of Animal
  Animal.prototype.makeSound = function() {
    console.log(`${this.name} makes a ${this.sound} sound.`);
  };
  
  // Creating animal objects using the constructor
  const cat = new Animal("Cat", "meow");
  const dog = new Animal("Dog", "woof");
  const cow = new Animal("Cow", "moo");
  
  // Calling the makeSound method inherited from the prototype
  cat.makeSound(); // Output: Cat makes a meow sound.
  dog.makeSound(); // Output: Dog makes a woof sound.
  cow.makeSound(); // Output: Cow makes a moo sound.
  

//   In this example, we have an Animal constructor that takes a name and a sound as parameters. The makeSound method is added to the prototype of Animal, and all animal objects created using the constructor will inherit this method.

// Then, we create instances of different animals, such as a cat, dog, and cow. When we call the makeSound method on these instances, they all correctly display the name of the animal and the sound it makes, thanks to the prototype inheritance.

// This example highlights how you can use prototypes to share behavior and properties across different objects in a more real-world context.