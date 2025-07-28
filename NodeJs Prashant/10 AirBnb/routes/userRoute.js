
const express=require("express")
const userRoute=express.Router();
const path=require("path")
{
 
  /* 
  📁 What is the path Module in Node.js? (Detailed Explanation)
The path module in Node.js is a built-in core module that provides a set of utilities for working with file and directory paths. It allows developers to handle file paths in a way that is consistent across different operating systems—whether you're working on Windows, Linux, or macOS.

🔧 Why Do We Need the path Module?
Different operating systems use different path separators:

Windows uses backslashes (\)
Linux/macOS uses forward slashes (/)

To write cross-platform code, you should avoid hardcoding separators and instead use path methods to manipulate paths safely and reliably.
🧠 Use Cases
Building file paths dynamically

Handling file uploads or directory structures

Creating log file paths

Navigating filesystem directories

Ensuring cross-platform compatibility

📌 Summary
The path module is essential for file system operations.

It helps in writing cross-platform Node.js code.

You can manipulate paths without worrying about OS-specific separators.
  */
//  const path = require('path');

// const filePath = '/users/john/docs/letter.txt';

// console.log('Base name:', path.basename(filePath));     // letter.txt
// console.log('Directory:', path.dirname(filePath));      // /users/john/docs
// console.log('Extension:', path.extname(filePath));      // .txt
// console.log('Normalized:', path.normalize('/users//john/../doe')); // /users/doe
// console.log('Joined Path:', path.join('users', 'john', 'docs'));  // users/john/docs
// console.log('Absolute Path:', path.resolve('docs'));    // /current/working/dir/docs


}

userRoute.get("/",(req,res)=>{
  // res.send(`<h1> Home page</h1>
  //   <a href="/host/add-home" >Goto add home</a>`)
  console.log(path.join(__dirname));//give current working directory
  console.log(path.join(__dirname,"../","views","home.html"));// /home/captain/Desktop/NodeJs/10 airBnt/views/home.html

  // res.sendFile("/home/captain/Desktop/NodeJs/10 airBnt/views/home.html")
  // but better way is
  res.sendFile(path.join(__dirname,"../","views","home.html"))
  
})


module.exports=userRoute;
