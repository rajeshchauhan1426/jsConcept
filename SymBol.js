let mySymbol = Symbol();



let namedSymbol = Symbol("This is a named symbol");




let obj = {
    [mySymbol]: "This is a symbol property",
  };
  
  console.log(obj[mySymbol]); // Outputs: "This is a symbol property"

  

  for (let key in obj) {
    console.log(key); // This loop won't log the symbol property.
  }
  
  console.log(Object.keys(obj)); // This array won't include the symbol property.





  let mySymbol1 = Symbol.for("mySymbolName"); // Retrieve or create a symbol with the given name.
let sameSymbol = Symbol.for("mySymbolName"); // Retrieve the same symbol as above.
console.log(mySymbol === sameSymbol); // Outputs: true

  