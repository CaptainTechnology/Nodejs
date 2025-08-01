/**
 * 📦 Node.js 'path' Module
 * 
 * The 'path' module is a built-in Node.js module used to work with file and directory paths.
 * 
 * ✅ No need to install (it's part of Node.js)
 * ✅ Helps handle file paths across different OS (Windows \ vs Linux/Mac /)
 * ✅ Avoids manual string operations with slashes
 * 
 * 🔧 Common Use Cases:
 * - Get the directory of a file      → path.dirname()
 * - Get the file name                → path.basename()
 * - Get the file extension           → path.extname()
 * - Join multiple path segments      → path.join()
 * - Resolve full absolute paths      → path.resolve()
 * - Normalize messy paths            → path.normalize()
 * - Parse full path into parts       → path.parse()
 * - Build path from parts            → path.format()
 * - Check if a path is absolute      → path.isAbsolute()
 */


// console.log(__filename)// current file path
// console.log("Directry name :",__dirname)// takes nothing
// Import the built-in 'path' module to work with file and directory paths

const path = require("path");

// Get the directory path of the current file (__filename)
// console.log("Directory name:", path.dirname(__filename));//takes file path or directory as input and gives the directory path one level up
// Example Output: /Users/yourname/project

// // Get the filename (with extension) from the current file path
// console.log("File name", path.basename(__filename));
// Example Output: index.js

// // Get the file extension from the current file
// console.log("file extension", path.extname(__filename));
// console.log("directry extension", path.extname(__dirname));//.path module if there is no . then it will return nothing
// // Example Output: .js

// // Join multiple path segments into a single, clean path
// const joinPath = path.join("/user", "documents", "node", "projects");
// console.log("Joined path", joinPath);
// // Output: /user/documents/node/projects

// // Resolve path into an absolute path starting from the current directory /User/sidd-tech...../crtdir/path
// const resolvePath = path.resolve("user", "documents", "node", "project");
// console.log("Resolve path:", resolvePath);
// // Output (example): /current/dir/user/documents/node/project

// // Normalize a messy path (removes ., .., and extra slashes)
const normalizePath = path.normalize("/user/.documents/../node/projects");
console.log("normalizePath", normalizePath);
// // Output: /user/node/projects
