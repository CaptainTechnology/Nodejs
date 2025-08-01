// 🔷 EXPRESS ROUTES DEMO FILE
// ✅ Shows GET, POST, PUT, DELETE, dynamic & multiple routes
// ✅ Ready to run in VS Code

// ==================== 1️⃣ SETUP ====================
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ==================== 2️⃣ BASIC ROUTES ====================

// GET Route – Homepage
app.get('/', (req, res) => {
  res.send('🏠 Welcome to Home Page');
});

// POST Route – Submit form or data
app.post('/submit', (req, res) => {
  console.log('📥 Received Data:', req.body);
  res.send('✅ Data received successfully!');
});

// PUT Route – Update data
app.put('/update', (req, res) => {
  res.send('♻️ Data updated');
});

// DELETE Route – Delete data
app.delete('/delete', (req, res) => {
  res.send('🗑️ Data deleted');
});

// ==================== 3️⃣ ROUTE WITH PARAMETERS ====================
// Dynamic route using route parameters

app.get('/user/:username', (req, res) => {
  const username = req.params.username;
  res.send(`👤 Hello, ${username}`);
});

// ==================== 4️⃣ ROUTE WITH QUERY STRING ====================
// Example: http://localhost:3000/search?term=nodejs

app.get('/search', (req, res) => {
  const term = req.query.term;
  res.send(`🔍 You searched for: ${term}`);
});

// ==================== 5️⃣ MULTIPLE HANDLERS IN ROUTE ====================

function logger(req, res, next) {
  console.log("🧾 Logging request:", req.method, req.url);
  next();
}

function sendResponse(req, res) {
  res.send("✅ Multiple middleware in one route");
}

app.get('/multi', logger, sendResponse);

// ==================== 🔟 START SERVER ====================

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
