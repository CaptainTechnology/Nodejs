// A cookie is a small piece of data that your browser stores when you visit a website.
// Think of it like a note your browser keeps for a website — it might store your name, login info, or shopping cart so the website "remembers" you when you come back.

// ==============================
// 🍪 Simple Cookie Example in Node.js with Express
// ==============================

const express = require("express");
const cookieParser = require("cookie-parser"); // Helps us read and set cookies easily

const app = express();
const PORT = 3000;

// Enable cookie parsing middleware
app.use(cookieParser());

// ==============================
// 🔹 Route: Home Page
// ==============================
app.get("/", (req, res) => {
    res.send("🏠 Welcome to the Home Page");
});

// ==============================
// 🔹 Route: Set Cookie
// ==============================
// This sets a cookie named 'username' with value 'ateek' for 10 seconds
app.get("/set", (req, res) => {
    res.cookie("username", "ateek", {
        maxAge: 10000,      // Cookie will last for 10 seconds
        httpOnly: true      // Can't be accessed by JavaScript (for security)
    });
    res.send("✅ Cookie has been set: username=ateek");
});

// ==============================
// 🔹 Route: Get Cookie
// ==============================
// This reads the 'username' cookie and shows it
app.get("/get", (req, res) => {
    const username = req.cookies.username;
    if (username) {
        res.send(`👤 Your cookie value: username = ${username}`);
    } else {
        res.send("❌ No cookie found");
    }
});

// ==============================
// 🔹 Route: Clear Cookie
// ==============================
// This clears/deletes the cookie from the browser
app.get("/clear", (req, res) => {
    res.clearCookie("username");
    res.send("🗑️ Cookie has been cleared");
});

// ==============================
// 🚀 Start Server
// ==============================
app.listen(PORT, () => {
    console.log(`🚀 Server running at: http://localhost:${PORT}`);
});
