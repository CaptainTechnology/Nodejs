// 🔹 What is npm?
// npm stands for Node Package Manager.
// It comes automatically installed with Node.js.
// It is used to manage JavaScript packages (install, uninstall, update, etc.).

// ✅ To check npm version:
// console.log("Run in terminal: npm -v");

// 🔸 Common npm Commands:

// 📁 Initialize a project and create package.json
// npm init        // Interactive
// npm init -y     // Auto-create with default settings

// 📦 Install a package locally (saved to node_modules)
// npm install <package-name>

{
    // 🔸 If you run `npm install express` without `npm init`:
// - It still installs Express
// - It auto-generates a minimal package.json file with dependencies
// - You can use Express normally
// - But: you won't have other fields like name, version, scripts, etc.

// ✅ Best practice: run `npm init -y` first to fully define your project
// ❌ What you miss by skipping `npm init`:
// - No custom scripts (`npm start`, `npm run dev`)
// - No metadata (name, version, author, license, etc.)
// - Harder tool integration (Jest, TypeScript, Webpack)
// - Can't easily share or publish project
// ✅ Best practice: Run `npm init -y` at the start of every project

}

// 🌍 Install a package globally (accessible system-wide)
// npm install -g <package-name>

// 🔄 Install all dependencies from package.json
// npm install

// ❌ Uninstall a package
// npm uninstall <package-name>

// ⬆️ Update all packages
// npm update

// 📜 List installed packages
// npm list

// 🧓 Check outdated packages
// npm outdated

// 🔧 Example: Installing Express
// npm install express

// 📝 package.json holds:
// - Project metadata
// - Dependencies
// - Scripts like "start": "node index.js"



const lodash = require("lodash");

const names = ["sangam", "john", "terry", "alex", "mia"];
const capitalize = lodash.map(names, lodash.capitalize);

console.log(capitalize);
console.log("hello")