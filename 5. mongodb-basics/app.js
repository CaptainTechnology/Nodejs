// ==========================
// 🔷 MONGODB + NODE.JS GUIDE
// ==========================

// ✅ What is MongoDB?
// MongoDB is a NoSQL database used to store data in JSON-like format (BSON).
// It is schema-less, document-based, and great for modern web apps.

// ✅ What is Mongoose?
// Mongoose is an ODM (Object Data Modeling) library for MongoDB and Node.js.
// It simplifies writing MongoDB validation, queries, and model logic.

// ==========================
// 1️⃣ SETUP
// ==========================

// 🛠️ Install packages via terminal:
// npm install mongoose express

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// ==========================
// 2️⃣ DATABASE CONNECTION
// ==========================

async function connectToMongo() {
  try {
    await mongoose.connect('mongodb://localhost:27017/collage');
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1); // optional: stop the server if DB fails
  }
}

connectToMongo();
// ==========================
// 3️⃣ DEFINE A SCHEMA & MODEL
// ==========================

// Schema: defines structure of documents in a collection
const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  course: String
});

// Model: interacts with the database (MongoDB Collection: 'students')
const Student = mongoose.model('Student', studentSchema);

// ==========================
// 4️⃣ REST API ROUTES (CRUD)
// ==========================

// 🔹 Create a student (POST /students)
app.post('/students', async (req, res) => {
  try {
    const student = new Student(req.body);
    const savedStudent = await student.save();
    res.json({"success":true,message:"Student is added",name:req.body?.name});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// 🔹 Get all students (GET /students)
app.get('/students', async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

// 🔹 Get a student by ID (GET /students/:id)
app.get('/students/:id', async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).send("Not Found");
    res.json(student);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// 🔹 Update a student (PUT /students/:id)
app.put('/students/:id', async (req, res) => {
  try {
    const updated = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true, 
      runValidators: true
    });
    if (!updated) return res.status(404).send("Not Found");
    res.json(updated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// 🔹 Delete a student (DELETE /students/:id)
app.delete('/students/:id', async (req, res) => {
  try {
    const deleted = await Student.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).send("Not Found");
    res.send("✅ Student deleted");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// ==========================
// 5️⃣ START SERVER
// ==========================
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
