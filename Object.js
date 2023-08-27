// Creating an empty object using object literal syntax
const person = {};

// Adding properties to the object
person.firstName = "John";
person.lastName = "Doe";
person.age = 30;

// Accessing properties
console.log(person.firstName);  // Output: John
console.log(person.lastName);   // Output: Doe
console.log(person.age);        // Output: 30









// You can also create objects using the object constructor or by using class syntax (ES6):
// Using the object constructor
const person1 = new Object();
person1.firstName = "John";
person1.lastName = "Doe";

// Using class syntax (ES6)
class person2 {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const person2 = new person2("John", "Doe");











// Objects can also have methods, which are functions that are associated with the object:
const calculator = {
    add: function(a, b) {
      return a + b;
    },
    subtract: function(a, b) {
      return a - b;
    }
  };
  
  console.log(calculator.add(5, 3));      // Output: 8
  console.log(calculator.subtract(10, 4)); // Output: 6
  







//   Using Objects for Structured Data:

// Creating an object to represent a book
const book = {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    year: 1979,
    genre: "Science Fiction",
  };
  
  // Accessing properties of the book object
  console.log(book.title);   // Output: The Hitchhiker's Guide to the Galaxy
  console.log(book.author);  // Output: Douglas Adams
  console.log(book.year);    // Output: 1979
  console.log(book.genre);   // Output: Science Fiction
  



//   Using Objects for Configurations:
// Configuration object for a web application
const appConfig = {
    apiUrl: "https://api.example.com",
    maxRequests: 10,
    debugMode: false,
  };
  
  // Usage of configuration
  function fetchData() {
    if (appConfig.debugMode) {
      console.log("Fetching data from:", appConfig.apiUrl);
    }
    // ... logic to fetch data
  }
  
  fetchData();
  


//   Using Objects for Functionality:

// Object with methods for a simple calculator
const calculator = {
    add: function(a, b) {
      return a + b;
    },
    subtract: function(a, b) {
      return a - b;
    },
    multiply: function(a, b) {
      return a * b;
    },
    divide: function(a, b) {
      return a / b;
    },
  };
  
  console.log(calculator.add(5, 3));       // Output: 8
  console.log(calculator.multiply(4, 2));  // Output: 8
  console.log(calculator.divide(10, 2));   // Output: 5

  


//   Using Objects for Data Organization:
// Creating an object to represent a user profile
const userProfile = {
    username: "jsCoder",
    email: "jsCoder@example.com",
    age: 28,
    address: {
      street: "123 Main St",
      city: "Anytown",
      country: "USA",
    },
  };
  
  // Accessing nested properties
  console.log(userProfile.address.city);  // Output: Anytown
  





//   Using Objects for Iteration and Storage:
// Storing objects in an array
const products = [
    { name: "iPhone", price: 999 },
    { name: "Samsung Galaxy", price: 799 },
    { name: "Google Pixel", price: 699 },
  ];
  
  // Iterating over the products array
  for (const product of products) {
    console.log(`${product.name} - $${product.price}`);
  }
  