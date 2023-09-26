// In JavaScript, classes are a way to define and create objects with shared properties and behaviors. Classes were introduced in ECMAScript 6 (ES6) and provide a more structured and object-oriented approach to creating objects compared to the traditional constructor functions and prototypes. Here's a basic overview of how classes work in JavaScript:

// ### Defining a Class

// You can define a class using the `class` keyword followed by the class name. Inside the class, you can define properties and methods.

// ```javascript
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     greet() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }
// }
// ```

// In this example, we define a `Person` class with a constructor method (`constructor`) and a `greet` method.

// ### Creating Objects from a Class

// You can create objects (instances) from a class using the `new` keyword.

// ```javascript
// const person1 = new Person('Alice', 30);
// const person2 = new Person('Bob', 25);
// ```

// Now, `person1` and `person2` are instances of the `Person` class.

// ### Class Methods and Properties

// Methods defined inside a class are shared among all instances (objects) of that class. Properties can also be defined within the class, and each instance can have its own values for those properties.

// ```javascript
// console.log(person1.name); // "Alice"
// console.log(person2.age);  // 25

// person1.greet(); // "Hello, my name is Alice and I am 30 years old."
// person2.greet(); // "Hello, my name is Bob and I am 25 years old."
// ```

// ### Inheritance

// JavaScript classes support inheritance, allowing you to create a subclass that inherits properties and methods from a parent class. You can use the `extends` keyword to define a subclass.

// ```javascript
// class Student extends Person {
//     constructor(name, age, school) {
//         super(name, age); // Call the parent class constructor
//         this.school = school;
//     }

//     study() {
//         console.log(`${this.name} is studying at ${this.school}.`);
//     }
// }

// const student1 = new Student('Eve', 22, 'University XYZ');
// student1.greet(); // "Hello, my name is Eve and I am 22 years old."
// student1.study(); // "Eve is studying at University XYZ."
// ```

// In this example, the `Student` class extends the `Person` class and adds its own properties and methods.

// JavaScript classes provide a cleaner and more structured way to work with objects and inheritance in your code. They are widely used in modern JavaScript development for building complex applications and managing code organization.