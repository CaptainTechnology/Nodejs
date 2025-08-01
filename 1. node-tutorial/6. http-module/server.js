// 📘 Node.js HTTP Module Example (Without Express)
// The http module in Node.js is a built-in core module used to create servers and handle HTTP requests/responses.

const http = require("http");
const PORT = 3001;

// ✅ Creating a basic HTTP server
const server = http.createServer((req, res) => {
  console.log("🟢 Server received a request.");

  // 📦 Accessing request details
  // console.log("🔗 URL:", req.url);             // e.g., "/", "/products"
  // console.log("📨 Method:", req.method);       // Usually GET by default in browser
  // console.log("🧾 Headers:", req.headers);     // Metadata about the request

  // 🛠 Setting the response header for HTML content
  res.setHeader("Content-Type", "text/html");

  // 🧱 Starting HTML response
  res.write("<html>");
  res.write("<head><title>Node HTTP Server</title></head>");

  // 🌐 Routing logic (manual, since we're not using Express)
  if (req.url === "/") {
    res.write("<body><h1>🏠 Welcome to the Home Page</h1></body>");
    res.write("</html>");
    return res.end("root / is ended"); // ⛔ Prevent further execution after ending the response
  } else if (req.url === "/products") {
    res.write("<body><h1>🛍️ This is the Products Page</h1></body>");
    res.write("</html>");
    return res.end(); // ⛔ Prevent further execution after ending the response
  }

  // ⚠️ Default 404 page if route doesn't match
  res.write("<body><h1>❌ 404 - Page Not Found</h1></body>");
  res.write("</html>");
  res.end();
});

// 🚀 Starting the server
server.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}/`);
});
