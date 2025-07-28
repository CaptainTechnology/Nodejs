

const logicalEroor=()=>{


  let x=5;
  if(x=10){//assigning instead of comparison
    console.log("the value of x is 10",x);
  }else{
    console.log("the  value of x is not 10",x);
  }


// 🎯 Goal: Perform simple math operations and evaluations

// function calculateRectangleArea(length, width) {
//   // ❌ Logical Error: Adds instead of multiplies
//   return length + width; 
// }

// function isEven(number) {
//   // ❌ Logical Error: Wrong condition
//   return number % 2 === 1; // Should be === 0
// }

// function findMax(a, b, c) {
//   // ❌ Logical Error: Only compares first two numbers
//   if (a > b) return a;
//   else return b;
//   // It ignores 'c' completely
// }

// function calculateDiscount(price) {
//   // ❌ Logical Error: Gives discount on price <= 100 instead of > 100
//   if (price <= 100) {
//     return price * 0.9; // 10% discount wrongly applied
//   }
//   return price;
// }

// // --- Running all functions ---
// console.log("Area of 5x10 rectangle:", calculateRectangleArea(5, 10)); // Expected: 50
// console.log("Is 4 even?", isEven(4)); // Expected: true
// console.log("Max of 4, 8, 2:", findMax(4, 8, 2)); // Expected: 8
// console.log("Price after discount (₹120):", calculateDiscount(120)); // Expected: ₹108
// console.log("Price after discount (₹90):", calculateDiscount(90));  // Expected: ₹90

}

module.exports=logicalEroor;