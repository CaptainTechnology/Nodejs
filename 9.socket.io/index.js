// 📦 Socket.IO Introduction
// Socket.IO is a Node.js library used for real-time, bidirectional, and event-based communication 
// between the browser and the server.

// 🔁 It enables both client and server to send and receive messages at any time 
// (not just client-request and server-response like HTTP).

// 📦 When to Use Socket.IO?
// - 💬 Chat applications
// - 🧠 Live notifications (e.g., Facebook messages, alerts)
// - 📈 Real-time dashboards (e.g., live analytics, stock market)
// - 👨‍💻 Collaborative apps (like Google Docs with live typing)

// 🧠 How It Works:
// - Both the client (browser) and the server (Node.js) can emit and listen to events.
// - Internally, Socket.IO uses WebSockets for fast real-time communication.
// - If WebSockets are not supported, it gracefully falls back to HTTP long-polling.
// - It maintains a persistent connection between client and server.

//  Socket.IO is based on the EventEmitter pattern — both on the client-side (browser) and server-side (Node.js).




// 1. Import libraries
const express = require('express');
const http = require('http'); // Required for socket.io
const socketIO = require('socket.io');

// 2. Create Express app and HTTP server
const app = express();
const server = http.createServer(app); // Attach HTTP to Express
const io = socketIO(server); // Attach Socket.IO to HTTP server

// 3. Serve static HTML
app.use(express.static('public'));

// 4. Listen for client connections
io.on('connection', (socket) => {
  console.log('🟢 New user connected:', socket.id);

  // 5. Listen to messages from client
  socket.on('chatMessage', (msg) => {
    console.log(`💬 Message from ${socket.id}:`, msg);

    // 6. Broadcast message to all clients
    io.emit('chatMessage', msg);
  });

  // 7. On disconnect
  socket.on('disconnect', () => {
    console.log('🔴 User disconnected:', socket.id);
  });
});

// 8. Start server
server.listen(3000, () => {
  console.log('🚀 Server running at http://localhost:3000');
});
