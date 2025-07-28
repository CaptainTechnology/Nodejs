
const runtimeError=()=>{
  // catched when programm is running not at the time of declairation 
  // console.log(x);
  // let num=10;
  // num()


  console.log("=== Node.js Runtime Error Examples ===\n");

// 1. ReferenceError
try {
  console.log(nonExistentVar); // Variable not defined
} catch (err) {
  console.error("ReferenceError caught:", err.message);
}

// 2. TypeError
try {
  let user = null;
  console.log(user.name); // Trying to access property of null
} catch (err) {
  console.error("TypeError caught:", err.message);
}

// 3. SyntaxError via JSON.parse
try {
  JSON.parse("{ name: 'John' }"); // Invalid JSON
} catch (err) {
  console.error("SyntaxError caught:", err.message);
}

// 4. RangeError - invalid array length
try {
  let arr = new Array(-1); // Negative length
} catch (err) {
  console.error("RangeError (array length) caught:", err.message);
}

// 5. RangeError - maximum call stack exceeded
try {
  function recurse() {
    recurse(); // Infinite recursion
  }
  // Uncomment below line to test it; will crash Node.js
  // recurse();
} catch (err) {
  console.error("RangeError (stack overflow) caught:", err.message);
}

// 6. Eval runtime SyntaxError
try {
  eval("let a = "); // Incomplete code
} catch (err) {
  console.error("Eval SyntaxError caught:", err.message);
}

console.log("\nAll runtime errors handled.");

}




module.exports=runtimeError;