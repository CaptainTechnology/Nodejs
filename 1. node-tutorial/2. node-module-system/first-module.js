function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Divide by zero is not allowed");
  }

  return a / b;
}

module.exports = {
  add,
  substract,
  divide,
};

module.exports.greet=function(){// it will aslo export and work 
  console.log("this is inside the first module.js ")
  console.log(__dirname)
  console.log(__filename)
}


