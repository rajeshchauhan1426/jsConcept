// Recursion in JavaScript refers to the practice of a function calling itself, either directly or indirectly, in order to solve a problem or perform a specific task. When a function calls itself, it creates a new execution context with its own scope, just like any other function call. This concept is important to understand because it impacts how variables and execution contexts are managed during recursive calls.

// Here's a breakdown of how recursion works in terms of scope and function execution:

// 1. **Function Definition and Scope:** When a function is defined, it is given a name and a function body. The function name becomes a variable within its containing scope. This means that the function name is accessible within its own body, and it can be used to call itself.

//    ```javascript
//    function factorial(n) {
//      if (n === 0) {
//        return 1;
//      } else {
//        return n * factorial(n - 1); // Recursive call to itself
//      }
//    }
//    ```

// 2. **Base Case:** Recursive functions typically include a base case that defines the condition under which the recursion stops. In the example above, the base case is `n === 0`. When this condition is met, the function returns a value (1 in this case) and stops making further recursive calls.

// 3. **Recursive Calls:** When the function is called recursively, a new execution context and scope are created for each call. This includes a new set of function arguments, local variables, and a new call stack entry. Each recursive call is independent of the others in terms of scope.

// 4. **Scope Chain:** When a variable is referenced within a recursive call, JavaScript looks up the scope chain to find the nearest variable with that name. It starts with the innermost scope (the current function's scope) and then moves outward to higher scopes until it finds a matching variable or reaches the global scope.

//    ```javascript
//    function factorial(n) {
//      if (n === 0) {
//        return 1;
//      } else {
//        // n and factorial are in the current scope
//        return n * factorial(n - 1); // Recursive call
//      }
//    }
//    ```

// 5. **Stack Frames:** Each recursive call creates a new stack frame (or execution context) on the call stack. The call stack keeps track of all active function calls, including their scopes and local variables. As the base case is reached and recursive calls return values, the stack frames are popped off the stack, and the results are used to compute the final result.

// Recursion can be a powerful and elegant technique for solving certain problems, but it should be used with caution. Inefficient or poorly designed recursive functions can lead to stack overflow errors due to excessive stack frame creation. Proper base cases and termination conditions are crucial to ensure that recursion terminates correctly.

// Here's an example of the factorial function using recursion:

// ```javascript
// function factorial(n) {
//   if (n === 0) {
//     return 1; // Base case
//   } else {
//     return n * factorial(n - 1); // Recursive call
//   }
// }

// console.log(factorial(5)); // Outputs: 120
// ```

// In this example, the function `factorial` calls itself recursively until it reaches the base case (`n === 0`), and then it starts returning values and computing the final result. Each recursive call has its own scope and execution context.