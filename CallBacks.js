// In JavaScript, a callback is a function that is passed as an argument to another function and is then executed within that other function. Callbacks are a fundamental concept in JavaScript and are often used to handle asynchronous operations, events, and to achieve code modularity and reusability.

// Here's how callbacks work:

// 1. **Passing a Function as an Argument:** You pass a function (the callback) as an argument to another function.

// 2. **Execution by the Higher-Order Function:** The higher-order function (the function that receives the callback) may execute the callback function at some point, often asynchronously, or in response to an event.

// Callbacks are commonly used in various scenarios, including:

// 1. **Asynchronous Operations:** For handling asynchronous operations like reading files, making network requests, or using timers (e.g., `setTimeout` and `setInterval`).

//    ```javascript
//    // Using a callback to handle asynchronous code
//    function fetchData(callback) {
//      setTimeout(function() {
//        const data = { name: "John", age: 30 };
//        callback(data);
//      }, 1000);
//    }

//    function processData(data) {
//      console.log(`Name: ${data.name}, Age: ${data.age}`);
//    }

//    fetchData(processData); // Pass the processData function as a callback
//    ```

// 2. **Event Handling:** In event-driven programming, callbacks are often used to respond to user interactions or other events.

//    ```javascript
//    // Adding an event listener with a callback
//    const button = document.getElementById("myButton");
//    button.addEventListener("click", function() {
//      console.log("Button clicked!");
//    });
//    ```

// 3. **Modular and Reusable Code:** Callbacks are used to create modular and reusable code by allowing you to define custom behavior for certain parts of your program.

//    ```javascript
//    function performOperation(value, callback) {
//      const result = callback(value);
//      console.log(`Result: ${result}`);
//    }

//    function doubleNumber(num) {
//      return num * 2;
//    }

//    function squareNumber(num) {
//      return num * num;
//    }

//    performOperation(5, doubleNumber); // Result: 10
//    performOperation(5, squareNumber); // Result: 25
//    ```

// Callbacks can be powerful, but they can also lead to callback hell (or "pyramid of doom") when dealing with nested or complex asynchronous code. To mitigate this issue, modern JavaScript uses Promises and async/await for more structured and readable asynchronous code.