// Promises are a built-in feature in JavaScript introduced to simplify working with asynchronous code. They provide a structured way to handle asynchronous operations and manage their results or errors. Promises help you avoid callback hell and make your code more readable and maintainable.

// A Promise represents a value that may not be available yet but will be resolved at some point in the future. Promises can be in one of three states:

// 1. **Pending**: The initial state, indicating that the asynchronous operation is ongoing and hasn't completed yet.

// 2. **Fulfilled (Resolved)**: The operation completed successfully, and the Promise has a resolved value.

// 3. **Rejected**: The operation failed, and the Promise has a reason (an error) for the failure.

// Here's how you can create and use Promises in JavaScript:

// 1. **Creating a Promise:**
//    You can create a new Promise using the `Promise` constructor. It takes a function with two arguments, `resolve` and `reject`, which are functions you call to indicate whether the Promise should be fulfilled or rejected.

//    ```javascript
//    const myPromise = new Promise((resolve, reject) => {
//      // Asynchronous operation
//      setTimeout(() => {
//        const success = true;
//        if (success) {
//          resolve("Operation completed successfully");
//        } else {
//          reject("Operation failed");
//        }
//      }, 1000);
//    });
//    ```

// 2. **Using `.then()` and `.catch()` for Handling Promise Results:**
//    You can chain `.then()` and `.catch()` methods to a Promise to handle the resolved value or catch errors.

//    ```javascript
//    myPromise
//      .then(result => {
//        console.log(result); // Output: "Operation completed successfully"
//      })
//      .catch(error => {
//        console.error(error); // Output: "Operation failed"
//      });
//    ```

// 3. **Chaining Promises:**
//    Promises can be chained together to perform a sequence of asynchronous operations. Each `.then()` returns a new Promise, allowing you to handle results or errors sequentially.

//    ```javascript
//    asyncOperation1()
//      .then(result1 => asyncOperation2(result1))
//      .then(result2 => asyncOperation3(result2))
//      .then(result3 => {
//        console.log("Final result:", result3);
//      })
//      .catch(error => {
//        console.error("An error occurred:", error);
//      });
//    ```

// 4. **Using `Promise.all()` for Concurrent Operations:**
//    `Promise.all()` is used to execute multiple Promises concurrently and wait for all of them to resolve. It returns a Promise that resolves to an array of results or rejects with the first encountered error.

//    ```javascript
//    const promises = [asyncOperation1(), asyncOperation2(), asyncOperation3()];

//    Promise.all(promises)
//      .then(results => {
//        console.log("All operations completed:", results);
//      })
//      .catch(error => {
//        console.error("An error occurred:", error);
//      });
//    ```

// 5. **Using `Promise.race()` for Fastest Result:**
//    `Promise.race()` is used to wait for the first Promise in an array to either resolve or reject. It returns a Promise that resolves or rejects with the result of the first Promise that completes.

//    ```javascript
//    const promises = [asyncOperation1(), asyncOperation2(), asyncOperation3()];

//    Promise.race(promises)
//      .then(result => {
//        console.log("First operation completed:", result);ß
//      })
//      .catch(error => {
//        console.error("An error occurred:", error);
//      });
//    ```

// Promises are an essential tool for managing asynchronous code in JavaScript, making it more organized and easier to work with. They are widely used in modern JavaScript development, and many libraries and APIs also use Promises for handling asynchronous operations.