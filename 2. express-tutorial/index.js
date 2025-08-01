/**
 * 🔷 EXPRESS.JS OVERVIEW 🔷
 * 
 * Express.js is a minimal and flexible Node.js web application framework.
 * It simplifies the creation of web servers and APIs using middleware and routing.
 * 
 * ✅ Basic Setup:
 */
const express = require('express');
const app = express();
const PORT = 3000;

/**
 * 🔷 app.use()
 * ✅ Purpose: Adds **middleware functions** that execute on **every request** (or requests to a specific path).
 * ✅ Signature: app.use([path], middlewareFunction)
 * ✅ Parameters:
 *   - [optional path]: e.g., '/admin' (default: '/')
 *   - middlewareFunction: function(req, res, next)
 * ✅ Behavior:
 *   - Runs on **all HTTP methods** (GET, POST, etc.)
 *   - If a path is given, it matches all methods on that path.
 *   - Call `next()` to pass to next middleware or route.
 */
app.use((req, res, next) => {
    console.log('🔄 Global middleware running');
    next(); // move to next middleware or route
});

/**
 * 🔷 app.get()
 * ✅ Purpose: Handle GET requests (used to fetch data/pages).
 * ✅ Signature: app.get(path, [middleware...], handlerFunction)
 * ✅ Parameters:
 *   - path: string (e.g., '/home')
 *   - handlerFunction: function(req, res)
 * ✅ Behavior:
 *   - Responds when client sends a GET request to the path
 */
app.get("/", (req, res) => {
    res.send("<h1>🏠 Home Page - GET method</h1>");
});

/**
 * 🔷 app.post()
 * ✅ Purpose: Handle POST requests (used to send data to server).
 * ✅ Signature: app.post(path, [middleware...], handlerFunction)
 * ✅ Behavior:
 *   - Used for submitting forms or sending data in the request body
 */
app.post("/submit", (req, res) => {
    res.send("<h1>✅ Data submitted - POST method</h1>");
});

/**
 * 🔷 app.put()
 * ✅ Purpose: Handle PUT requests (used to update existing data).
 * ✅ Signature: app.put(path, [middleware...], handlerFunction)
 * ✅ Behavior:
 *   - Commonly used in REST APIs to update a resource
 */
app.put("/user/:id", (req, res) => {
    const userId = req.params.id;
    res.send(`🔄 Updating user with ID: ${userId}`);
});

/**
 * 🔷 app.delete()
 * ✅ Purpose: Handle DELETE requests (used to delete data).
 * ✅ Signature: app.delete(path, [middleware...], handlerFunction)
 * ✅ Behavior:
 *   - Used to delete a resource
 */
app.delete("/user/:id", (req, res) => {
    const userId = req.params.id;
    res.send(`🗑️ Deleting user with ID: ${userId}`);
});

/**
 * 🔷 app.all()
 * ✅ Purpose: Handle all HTTP methods for a route
 * ✅ Signature: app.all(path, handlerFunction)
 */
app.all("/everything", (req, res) => {
    res.send(`🌐 You made a ${req.method} request`);
});

/**
 * 🔷 app.listen()
 * ✅ Purpose: Starts the server
 * ✅ Signature: app.listen(port, [callback])
 */
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
