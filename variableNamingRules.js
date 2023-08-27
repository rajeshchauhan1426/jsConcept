// Variable naming rules in JavaScript are important for writing clean, readable, and error-free code. Adhering to these rules makes your code more understandable and helps prevent naming conflicts or unexpected behavior. Here are the key rules for naming variables in JavaScript:

// Use Descriptive Names: Choose meaningful and descriptive names for your variables. This helps other developers (and your future self) understand the purpose and usage of the variable.

// Start with a Letter, Underscore (_), or Dollar Sign ($): Variable names must begin with a letter (uppercase or lowercase), an underscore, or a dollar sign. They cannot start with a number or any other character.

// Subsequent Characters: After the first character, variable names can include letters, numbers, underscores, or dollar signs. Avoid using special characters, spaces, or punctuation in variable names.

// Case Sensitivity: JavaScript is case-sensitive, so myVariable and myvariable are considered different variables. It's a good practice to use camelCase for variable names, starting with a lowercase letter and capitalizing the first letter of each subsequent word.

// Reserved Keywords: Do not use JavaScript reserved keywords as variable names. Reserved keywords are predefined by the language and have special meanings. Examples of reserved keywords include if, else, function, var, let, const, for, while, and many more.

// Avoid Ambiguity: Choose variable names that clearly represent the data they hold or the purpose they serve. Avoid using short, cryptic names that are hard to understand without additional context.

// // No Spaces: Variable names cannot contain spaces. If you need to represent multiple words in a variable name, use camelCase (e.g., myVariableName) or underscores (e.g., my_variable_name).


// Valid variable names
let age = 30;
let _privateVar = "secret";
let $price = 100;
let firstName = "John";
let numberOfApples = 5;

// Invalid variable names
let 1stPlace = "winner"; // Cannot start with a number
let my-variable = "error"; // Cannot use hyphens
let function = "syntax"; // Reserved keyword
