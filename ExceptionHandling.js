// Exception handling in JavaScript is done using try, catch, finally, and throw statements. This mechanism allows you to gracefully handle errors and unexpected situations in your JavaScript code. Here's an overview of how exception handling works in JavaScript:

// try: The try block is used to enclose the code that may potentially throw an exception.
// javascript
// Copy code
// try {
//     // code that may throw an exception
// } catch (error) {
//     // code to handle the exception
// }
// catch: The catch block is executed when an exception is thrown inside the corresponding try block. It takes one parameter, which is an error object that contains information about the exception.
// javascript
// Copy code
// try {
//     // code that may throw an exception
// } catch (error) {
//     // code to handle the exception
//     console.error("An error occurred:", error.message);
// }
// finally: The finally block is optional and is executed regardless of whether an exception was thrown or caught. It is often used for cleanup operations, such as closing resources.
// javascript
// Copy code
// try {
//     // code that may throw an exception
// } catch (error) {
//     // code to handle the exception
// } finally {
//     // cleanup code
// }
// throw: The throw statement is used to manually throw a custom exception. You can throw any value as an exception, but it's common to throw an Error object or a custom error object.
// javascript
// Copy code
// function divide(a, b) {
//     if (b === 0) {
//         throw new Error("Division by zero is not allowed");
//     }
//     return a / b;
// }

// try {
//     const result = divide(10, 0);
//     console.log(result);
// } catch (error) {
//     console.error("An error occurred:", error.message);
// }
// In the example above, we have defined a custom error message using the throw statement and caught it using the try...catch block.

// Exception handling is essential for making your JavaScript code more robust and ensuring that errors don't crash your application. It allows you to gracefully handle unexpected situations and provide meaningful error messages to users or log them for debugging purposes.