// 🔐 What is Authentication?
// Authentication is the process of verifying the identity of a user.

// Example: User provides username and password, server checks if they match.

// 🛂 What is Authorization?
// Authorization is about granting access to resources based on user roles or permissions.

// Example: Admin can delete users, regular user cannot.


//  Tech Stack Used
// Node.js + Express – for server

// MongoDB + Mongoose – to store user data

// bcryptjs – to hash passwords

// jsonwebtoken (JWT) – for authentication tokens


// server.js
// server.js

const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');//bcryptjs is a library used to hash and compare passwords securely.
const jwt = require('jsonwebtoken');//jsonwebtoken is used to create and verify tokens (JWTs) for authentication.
const dotenv = require('dotenv');
const User = require('./models/Users');

dotenv.config();

const app = express();
app.use(express.json());

// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log("MongoDB error", err));

// 🔐 Register Route
app.post('/register', async (req, res) => {
  const { username, password, role } = req.body;

  // Check if username already exists
  const existing = await User.findOne({ username });
  if (existing) return res.send("User already exists");

  // Hash the password
  const hashed = await bcrypt.hash(password, 8);

  // Save user
  const user = new User({ username, password: hashed, role });
  await user.save();

  res.send("User registered");
});

// 🔓 Login Route
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (!user) return res.send("Invalid credentials");

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.send("Invalid credentials");

  // Create JWT token
  const token = jwt.sign({ username: user.username, role: user.role }, process.env.JWT_SECRET);
  res.json({ token });
});

// Middleware = a function that runs before your route to check or do something

// 🔐 Middleware to check if user is logged in
function auth(req, res, next) {
  // Get token from headers (it comes as "Bearer token123", so we split and get the token only)
  const token = req.headers.authorization;
  // If no token is found, user is not logged in
  if (!token) return res.send("⚠️ Token is missing. Please login first.");

  try {
    // Verify the token using secret key (to check if it's real)
    const data = jwt.verify(token, process.env.JWT_SECRET);

    // If token is valid, store user data (like username, role) in the request
    req.user = data;
    console.log(data)

    // Move to the next function (route or middleware)
    next();
  } catch {
    // If token is invalid (fake or expired)
    res.send("❌ Invalid token. Please login again.");
  }
}


// 👮 Admin-only Middleware
function adminOnly(req, res, next) {
  if (req.user.role !== 'admin') return res.send("Only admin allowed");
  next();
}

// 🧑 Protected Route
app.get('/dashboard', auth, (req, res) => {
  res.send(`Welcome ${req.user.username} detail is : ${req.user.role}`);
});

// 🗑️ Admin Route
app.delete('/admin', auth, adminOnly, (req, res) => {
  res.send("Admin can delete users");
});

// Start server
app.listen(process.env.PORT, () => {
  console.log("Server running on port", process.env.PORT);
});
