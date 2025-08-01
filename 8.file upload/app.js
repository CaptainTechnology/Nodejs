// Multer is a Node.js middleware for handling multipart/form-data, which is the encoding type used when a file is uploaded through an HTML form.

// ✅ Multer is used with Express.js to enable file uploads (like images, PDFs, etc.) from the client (browser) to the server.

const express = require('express');
const multer = require('multer');
const app = express();
const PORT = 3000;

// Configure Multer storage (upload folder and filename)
const storage = multer.diskStorage({
  destination: "upload/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Unique file name
  }
});

// Create upload middleware
const upload = multer({ storage: storage });

// Route: File upload (single file)
app.post('/upload', upload.single('image'), (req, res) => {
    // console.log(req.file)
    // console.log(req.body)
  if (!req.file) return res.send('❌ No file uploaded');
  res.send(`✅ File uploaded: ${req.file.filename} and name : ${req.body?.name} email: ${req.body?.email}`);
});

// Route: Simple upload form
app.get('/', (req, res) => {
  res.send(`
    <h2>Simple File Upload</h2>
    <form action="/upload" method="POST" enctype="multipart/form-data">
    <input type="text" name="name" />
    <input type="text" name="email" />
    <input type="file" name="image" />
    <button type="submit">Upload</button>
    </form>
  `);
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
