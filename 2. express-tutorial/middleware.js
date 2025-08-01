// 🔷 EXPRESS MIDDLEWARE DEMO FILE (Middleware Only)
// ✅ Explains all types of middleware in Express
// ✅ No routes – focused on middleware only
// ✅ Suitable for learning, debugging, and interview prep

// ==================== 1️⃣ SETUP ====================
const express = require('express');
const app = express();
const PORT = 3000;

// ==================== 2️⃣ WHAT IS MIDDLEWARE? ====================
/**
 * Middleware is a function that runs between receiving a request and sending a response.
 * It can:
 * ✅ Run logic (e.g., logging, authentication, validation)
 * ✅ Modify request (req) or response (res) objects
 * ✅ End the request-response cycle
 * ✅ Call next() to pass control to the next middleware
 */

// Example of a basic middleware structure
function sampleMiddleware(req, res, next) {
  console.log("👉 Sample custom middleware");
  next(); // Call next() to continue
}

// ==================== 3️⃣ BUILT-IN MIDDLEWARE ====================
// Built-in middleware for JSON data
app.use(express.json()); // Parses JSON payloads

// Built-in middleware for URL-encoded form data
app.use(express.urlencoded({ extended: true }));

// ==================== 4️⃣ CUSTOM MIDDLEWARE ====================
// Custom middleware: Add a custom property to the request object
app.use((req, res, next) => {
  req.user = "Ateek"; // You can use this in other middleware/routes
  console.log("🧠 [Custom] Added req.user = 'Ateek'");
  next();
});

// Custom middleware: Block request conditionally
app.use((req, res, next) => {
  if (req.query.block === 'true') {
    console.log("⛔ [Custom] Request blocked due to query param");
    return res.send("Request blocked by middleware");
  }
  next();
});

// ==================== 5️⃣ APPLICATION-LEVEL MIDDLEWARE ====================
// Runs on EVERY request to the app
app.use((req, res, next) => {
  console.log(`📦 [App-Level] ${req.method} ${req.url}`);
  next();
});

// Middleware for only /admin path and subpaths
app.use('/admin', (req, res, next) => {
  console.log("🔐 [App-Level] Middleware only for /admin route");
  next();
});

// ==================== 6️⃣ ROUTER-LEVEL MIDDLEWARE ====================
// Create a router for user-related routes
const userRouter = express.Router();

// Middleware applied to all /user/* routes
userRouter.use((req, res, next) => {
  console.log("👤 [Router-Level] User route middleware");
  next();
});

// Mount the user router (routes can be added later)
app.use('/user', userRouter);

// ==================== 🔟 START SERVER ====================
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
