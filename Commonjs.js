// CommonJS is a module system and module format for JavaScript. It was initially designed for server-side JavaScript environments like Node.js but has also been used in front-end development with tools like Browserify and webpack.

// CommonJS modules use a simple pattern for defining and importing modules:

// - `require`: To import a module, you use the `require` function. For example:

//   ```javascript
//   const fs = require('fs');
//   ```

//   In this example, the `fs` module is imported using `require`.

// - `module.exports` and `exports`: To export values from a module, you use the `module.exports` or `exports` objects. For example:

//   ```javascript
//   // Export a single value
//   module.exports = someValue;

//   // Export multiple values
//   exports.foo = 42;
//   exports.bar = 'hello';
//   ```

//   Other modules can then import these values using `require`.

// CommonJS modules are synchronous, which means they are loaded and executed in a blocking manner. This behavior is well-suited for server-side applications where blocking I/O operations are common.

// However, in front-end development, where asynchronous operations are prevalent and performance is crucial, the CommonJS module system is not ideal. As a result, tools like webpack and ES6 (ECMAScript 2015) modules have gained popularity in the front-end development community, as they offer more flexibility and better support for asynchronous module loading.

// In summary, CommonJS is a module system primarily used in server-side JavaScript (Node.js) and older front-end development workflows. Modern front-end development often relies on ES6 modules and build tools like webpack for module management.