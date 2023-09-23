// `async` and `await` are modern JavaScript features that provide a more concise and readable way to work with asynchronous code, particularly Promises. They were introduced in ECMAScript 2017 (ES8) and have since become widely adopted for simplifying asynchronous programming in JavaScript.

// Here's how `async` and `await` work and how you can use them:

// 1. **`async` Function Declaration:**
//    To define an asynchronous function, you use the `async` keyword before the `function` keyword. An `async` function always returns a Promise, and it allows you to use the `await` keyword inside the function to pause execution until a Promise is resolved.

//    ```javascript
//    async function fetchData() {
//      // Asynchronous operations here
//    }
//    ```

// 2. **`await` Keyword:**
//    Inside an `async` function, you can use the `await` keyword to pause the execution of the function until a Promise is resolved. This makes your code appear more synchronous, which can be easier to read and understand compared to chaining `.then()` methods.

//    ```javascript
//    async function fetchUserData() {
//      const response = await fetch('https://api.example.com/user');
//      const data = await response.json();
//      return data;
//    }
//    ```

//    In the example above, `await` is used to pause the function execution until the HTTP request is complete and until the JSON data is parsed. This allows you to work with `data` as if it were available synchronously.

// 3. **Error Handling with `try...catch`:**
//    You can use `try...catch` to handle errors that may occur when using `await`. If a Promise is rejected within an `async` function, it will throw an exception that can be caught using a `try...catch` block.

//    ```javascript
//    async function fetchUserData() {
//      try {
//        const response = await fetch('https://api.example.com/user');
//        const data = await response.json();
//        return data;
//      } catch (error) {
//        console.error('An error occurred:', error);
//      }
//    }
//    ```

// 4. **Sequential and Parallel Execution:**
//    `async/await` allows you to write code that appears synchronous but can execute asynchronously. You can await multiple Promises sequentially or in parallel, depending on your needs.

//    - Sequential execution (awaiting one after the other):

//      ```javascript
//      async function sequentialExecution() {
//        const result1 = await asyncOperation1();
//        const result2 = await asyncOperation2();
//        // ...
//      }
//      ```

//    - Parallel execution (awaiting all at once using `Promise.all`):

//      ```javascript
//      async function parallelExecution() {
//        const [result1, result2] = await Promise.all([asyncOperation1(), asyncOperation2()]);
//        // ...
//      }
//      ```

//    `Promise.all` is useful for executing multiple asynchronous operations concurrently and waiting for all of them to complete.

// `async` and `await` make asynchronous code more readable and maintainable, as it closely resembles synchronous code. They are especially useful for managing complex asynchronous flows and handling errors in a more structured way. However, keep in mind that `await` can only be used inside `async` functions, and it's not compatible with older versions of JavaScript or environments that don't support ECMAScript 2017 or later.