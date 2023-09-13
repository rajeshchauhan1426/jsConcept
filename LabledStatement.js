// In JavaScript, a labeled statement is a way to provide a label to a block of code so that you can refer to it later using the label. Labeled statements are not commonly used in JavaScript, but they can be helpful in certain situations, particularly when working with nested loops or control structures.

// The basic syntax for a labeled statement is as follows:

// javascript
// Copy code
// labelName: statement
// Here's an example of how you might use a labeled statement with a for loop:

// javascript
// Copy code
// outerLoop: for (let i = 0; i < 3; i++) {
//   innerLoop: for (let j = 0; j < 3; j++) {
//     if (i === 1 && j === 1) {
//       // Use the break statement with the label to break out of the outer loop
//       break outerLoop;
//     }
//     console.log(`i: ${i}, j: ${j}`);
//   }
// }
// In this example, we have two nested loops, and we've labeled the outer loop as "outerLoop" and the inner loop as "innerLoop." When the condition i === 1 && j === 1 is met, we use the break statement with the label "outerLoop" to break out of the outer loop, effectively skipping the remaining iterations of both loops.

// Labeled statements can also be used with the continue statement to continue to the next iteration of a specific loop when working with nested loops.

// While labeled statements can be useful in some cases, they should be used sparingly, as they can make your code more complex and harder to read. In most situations, you can achieve the same result using other control flow mechanisms without the need for labels.