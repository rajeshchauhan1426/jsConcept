// There are several types of Typed Arrays, each optimized for a specific type of data:

// Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array:
// These Typed Arrays are designed for working with 8-bit, 16-bit, and 32-bit integers. "Int" indicates signed integers, while "Uint" represents unsigned integers.

// Float32Array, Float64Array:
// These Typed Arrays are used for working with 32-bit and 64-bit floating-point numbers, which are commonly used for representing decimal numbers with fractional parts.

// Creating a Float32Array with some sample data
const data = new Float32Array([3.14, 2.718, 1.618]);

// Accessing elements using indexes
console.log(data[0]);  // Output: 3.14
console.log(data[1]);  // Output: 2.718
console.log(data[2]);  // Output: 1.618


// Creating a Uint8Array to represent pixel data of an image (each pixel has 4 components: R, G, B, A)
const imagePixels = new Uint8Array([
    255, 0, 0, 255,   // Red pixel
    0, 255, 0, 255,   // Green pixel
    0, 0, 255, 255,   // Blue pixel
]);

// Accessing and modifying pixel data using indexes
console.log(imagePixels[0]);  // Output: 255 (Red channel of the first pixel)
console.log(imagePixels[1]);  // Output: 0 (Green channel of the first pixel)

// Modifying a pixel's color (changing the green component)
imagePixels[1] = 128;  // Changing the green component of the second pixel to half intensity

// Accessing and printing the updated pixel data
console.log(imagePixels);

// Calculating the total number of pixels
const numPixels = imagePixels.length / 4; // Divide by 4 since each pixel has 4 components
console.log("Number of pixels:", numPixels);
