// 📦 Import required modules
const express = require("express");
const session = require("express-session");

const app = express();

// 🧠 Middleware to parse incoming JSON data from request bodies
app.use(express.json());

// 🔐 Configure express-session middleware
app.use(
  session({
    secret: "mySecretKey",            // Secret key to sign session ID cookie (keep it private)
    resave: false,                    // Don't save session if unmodified
    saveUninitialized: false,         // Don't save empty sessions
    cookie: { maxAge: 60000 },        // Session expires in 1 minute (60000ms)
  })
);

// 📍 Route: Home
app.get("/", (req, res) => {
  res.send("🏠 Welcome to the Home Page");
});

// 🔑 Route: Login - Creates a session and stores user info
app.post("/login", (req, res) => {
  const { username } = req.body;      // Get username from request
  req.session.user = username;        // Save username in session
  res.send(`✅ User ${username} logged in. Session created.`);
});

// 🔒 Route: Dashboard - Protected, only accessible if user is logged in
app.get("/dashboard", (req, res) => {
  if (req.session.user) {
    // If session exists, allow access
    res.send(`🎉 Welcome ${req.session.user} to your dashboard`);
  } else {
    // No session found
    res.status(401).send("🚫 Unauthorized! Please log in.");
  }
});

// 🚪 Route: Logout - Destroys the session
// app.get("/logout", (req, res) => {
//   req.session.destroy();              // Remove session from server
//   res.send("👋 Logged out. Session ended.");
// });

// 🚀 Start the Express server
app.listen(3000, () => {
  console.log("✅ Server is running at http://localhost:3000");
});

/*
📝 Summary:

🔐 What is a Session?
- A session is like a temporary memory stored on the server for each user.
- It helps track users across multiple requests (e.g., after login).

📦 Use Cases:
- Login system
- Shopping cart
- User preferences
- Protecting sensitive routes

🆚 Session vs Cookie:

| Feature       | Session         | Cookie                        |
|--------------|------------------|-------------------------------|
| Stored In     | Server           | Browser (Client)              |
| Security      | More secure      | Less secure (exposed client-side) |
| Size Limit    | Larger (in memory) | Max 4KB                      |
| Lifetime      | Controlled by server | Set with expiry             |
| Access        | Server only      | Server + client               |

🧪 How to Test:
1. POST /login → with JSON body: { "username": "ateek" }
2. GET /dashboard → shows welcome message if session exists
3. GET /logout → destroys session

*/
