

// JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write, and easy for machines to parse and generate. It's widely used for transmitting data between a server and a web application, as well as for configuration files and data storage. JSON is based on a subset of the JavaScript Programming Language, and it's language-independent, meaning it can be used with many programming languages.



// JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write, and easy for machines to parse and generate. It's widely used for transmitting data between a server and a web application, as well as for configuration files and data storage. JSON is based on a subset of the JavaScript Programming Language, and it's language-independent, meaning it can be used with many programming languages.

// JSON Syntax:
// JSON data is represented in key-value pairs, where keys are strings and values can be strings, numbers, boolean values, arrays, objects, or null. JSON uses a few simple symbols to define its structure:

// {}: Represents an object (collection of key-value pairs).
// []: Represents an array (an ordered list of values).
// :: Separates a key from its value.
// ,: Separates key-value pairs or elements in an array


{
    "firstName": "John",
    "lastName": "Doe",
    "age": 30,
    "isStudent": false,
    "hobbies": ["reading", "swimming", "gardening"],
    "address": {
        "street": "123 Main St",
        "city": "Anytown",
        "zipcode": "12345"
    }
}














// Parsing JSON in JavaScript:
// In JavaScript, you can use the built-in JSON object to parse JSON strings into JavaScript objects and to stringify JavaScript objects into JSON strings.

// Parsing JSON
const jsonStr = '{"name": "Alice", "age": 25}';
const parsedObj = JSON.parse(jsonStr);
console.log(parsedObj.name); // Outputs: Alice

// Stringifying JavaScript object to JSON
const person = { name: "Bob", age: 30 };
const jsonString = JSON.stringify(person);
console.log(jsonString); // Outputs: {"name":"Bob","age":30}









// Usage in Web APIs:
// JSON is widely used in web development for communication between a web browser and a server. Many web APIs (Application Programming Interfaces) provide data in JSON format.

// For example, making a request to a hypothetical API might return JSON data:
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => {
        console.log(data); // Process JSON data received from the API
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
