// In JavaScript, relational operators are used to compare two values and determine the relationship between them. These operators return a Boolean value (true or false) depending on whether the comparison is true or false. Here are the common relational operators in JavaScript:

// 1. **Equality (==)**: The equality operator compares two values for equality, but it performs type coercion if the operands have different types. This means it can convert the operands to a common type before making the comparison.

//    ```javascript
//    var x = 5;
//    var y = "5";
//    console.log(x == y); // true (after type coercion)
//    ```

// 2. **Inequality (!=)**: The inequality operator checks if two values are not equal, again performing type coercion if needed.

//    ```javascript
//    var x = 5;
//    var y = "5";
//    console.log(x != y); // false (after type coercion)
//    ```

// 3. **Strict Equality (===)**: The strict equality operator compares two values for equality without performing type coercion. It checks both the value and the data type.

//    ```javascript
//    var x = 5;
//    var y = "5";
//    console.log(x === y); // false (because the types are different)
//    ```

// 4. **Strict Inequality (!==)**: The strict inequality operator checks if two values are not strictly equal, meaning it compares both the value and the data type.

//    ```javascript
//    var x = 5;
//    var y = "5";
//    console.log(x !== y); // true (because the types are different)
//    ```

// 5. **Greater Than (>)**: The greater-than operator checks if the left operand is greater than the right operand.

//    ```javascript
//    var x = 10;
//    var y = 5;
//    console.log(x > y); // true
//    ```

// 6. **Less Than (<)**: The less-than operator checks if the left operand is less than the right operand.

//    ```javascript
//    var x = 5;
//    var y = 10;
//    console.log(x < y); // true
//    ```

// 7. **Greater Than or Equal To (>=)**: The greater-than-or-equal-to operator checks if the left operand is greater than or equal to the right operand.

//    ```javascript
//    var x = 10;
//    var y = 10;
//    console.log(x >= y); // true
//    ```

// 8. **Less Than or Equal To (<=)**: The less-than-or-equal-to operator checks if the left operand is less than or equal to the right operand.

//    ```javascript
//    var x = 5;
//    var y = 10;
//    console.log(x <= y); // true
//    ```

// Relational operators are frequently used in conditional statements, loops, and other control structures to make decisions based on comparisons between values. Understanding how these operators work and their behavior with different data types is crucial in JavaScript programming.