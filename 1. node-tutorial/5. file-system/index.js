// The fs (File System) module is a built-in Node.js module that allows you to interact with the file system — like reading, writing, updating, deleting files and folders.
// 📦 Import core modules
const fs = require("fs");
const path = require("path");

// 📁 Paths
const folderPath = path.join(__dirname, "data");
// without full path the fs work from the terminal from where it is called
const filePath = path.join(folderPath, "info.txt");


// =========================================================
// 📁 1. Create Folder
// =========================================================

// ✅ Synchronous
// if (!fs.existsSync(folderPath)) {
//   fs.mkdirSync(folderPath);
//   console.log("📁 Folder created (Sync): data");
// }

// ✅ Asynchronous
// fs.access(folderPath, (err) => {
//   if (err) {
//     fs.mkdir(folderPath, (err) => {
//       if (err) throw err;
//       console.log("📁 Folder created (Async): data");
//     });
//   }
// });


// =========================================================
// 📝 2. Write File
// =========================================================

// ✅ Synchronous (blocks execution)
// function createRealSync() {
//   console.log("▶ Writing file (Sync)...");
//   fs.writeFileSync(filePath, "This is a synchronous file write.");
//   console.log("✅ Done writing (Sync)");
// }

// ✅ Asynchronous (non-blocking)
// function createRealAsync() {
//   console.log("▶ Writing file (Async)...");
//   fs.writeFile(filePath, "This is an asynchronous file write.", (err) => {
//     if (err) throw err;
//     console.log("✅ Done writing (Async)");
//   });
// }


// =========================================================
// 📖 3. Read File
// =========================================================

// ✅ Synchronous
// console.log("🔽 Reading File (Sync)...");
// const content = fs.readFileSync(filePath, "utf8");
// console.log("📖 File Content (Sync):", content);

// // ✅ Asynchronous
// fs.readFile(filePath, "utf8", (err, data) => {
//   if (err) {
//     console.log("❌ Error reading file (Async)");
//     return;
//   }
//   console.log("📖 File Content (Async):", data);
// });


// =========================================================
// ➕ 4. Append to File
// =========================================================

// ✅ Synchronous
// fs.appendFileSync(filePath, "\nAppended new line (Sync).");
// console.log("➕ Line appended (Sync)");

// // ✅ Asynchronous
// fs.appendFile(filePath, "\nAppended new line (Async).", (err) => {
//   if (err) throw err;
//   console.log("➕ Line appended (Async)");
// });


// =========================================================
// 🗑️ 5. Delete File
// =========================================================


// fs.writeFileSync("info.txt","this is the information file.")
// ✅ Synchronous
// fs.unlinkSync(filePath);
// console.log("🗑️ File deleted (Sync)");

// ✅ Asynchronous
// fs.unlink(filePath, (err) => {
//   if (err) throw err;
//   console.log("🗑️ File deleted (Async)");
// });


// =========================================================
// 🗃️ 6. Delete Folder (must be empty)
// =========================================================

// ✅ Synchronous
// fs.rmdirSync(folderPath);
// console.log("📂 Folder deleted (Sync)");

// ✅ Asynchronous
// fs.rmdir(folderPath, (err) => {
//   if (err) throw err;
//   console.log("📂 Folder deleted (Async)");
// });


// =========================================================
// 📌 Summary:
// =========================================================

// Synchronous operations block further code execution until completed.
// Asynchronous operations run in the background — they use callbacks, and don't stop the main thread.

// ▶ Use Sync for small scripts or startup tasks.
// ▶ Use Async for production apps, servers, or anything needing scalability and performance.

// utf8 (or UTF-8) (Unicode Transformation Format – 8-bit) is a character encoding used to represent text in computers. It tells Node.js how to convert bytes (binary data) into human-readable characters, and vice versa.