//module.exports
//require


// 🔹 What is module.exports?
// In Node.js, every file is treated as a separate module.
// `module.exports` is the object that you export from a module (file),
// so that other files can import it using `require()`.
// If you don’t export anything using `module.exports`, nothing will be shared or accessible from outside that file.


// 🔹 What is require()?
// `require()` is used to import functions, objects, or classes that another module exports using `module.exports`.
// It loads the module and gives access to whatever has been exported.

// const firstModule = require("./first-module");
// const greet=require("./first-module")
// firstModule.greet();
// console.log(firstModule.add(10, 20));

// try {
//   console.log("trying to divide by zero");
//   let result = firstModule.divide(0, 10);
//   console.log(result, "result");
// } catch (error) {
//   console.log("Caught an error", error.message);
// }

const{add,divide,greet,substract}=require("./first-module")
console.log(add(10,30))
console.log(substract(10,30))
console.log(divide(10,30))
greet();// first module.js file name