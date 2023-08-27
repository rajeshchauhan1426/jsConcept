function exampleFunction() {
    let localVar = 10;
    if (true) {
      let localVar = 20; // This is a separate variable within this block
      console.log(localVar); // Output: 20
    }
    console.log(localVar); // Output: 10
  }
  