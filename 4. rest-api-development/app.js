// 🔷 REST API DEMO WITH EXPRESS.JS

/**
 * REST API stands for Representational State Transfer Application Programming Interface.
 * It is a set of rules that allows two software systems to communicate over the web using HTTP.
 *
 * 🧠 Simple Explanation:
 * Think of a REST API like a waiter at a restaurant:
 *  - 🧑‍💻 Client (you) → makes a request to the API (waiter)
 *  - 🍽️ API → takes the request, interacts with the system (kitchen/database)
 *  - ✅ Then the API responds with what you asked for (food/data)
 *
 * ✅ Key Features of REST:
 *  1. Stateless – Each request is independent (no memory of past requests)
 *  2. Uses HTTP methods:
 *     - GET    → Read data
 *     - POST   → Create new data
 *     - PUT    → Update data
 *     - PATCH  → Partially update data
 *     - DELETE → Delete data
 *  3. Uses URLs to identify resources
 *  4. Returns data in JSON format (mostly)
 *
 * 📦 Example: Student API Endpoints
 *  ------------------------------------------
 *  Action               | HTTP Method | URL Endpoint
 *  ---------------------|-------------|-----------------
 *  Get all students     | GET         | /students
 *  Get one student      | GET         | /students/:id
 *  Add a new student    | POST        | /students
 *  Update a student     | PUT         | /students/:id
 *  Delete a student     | DELETE      | /students/:id
 *
 * Each endpoint performs a specific CRUD operation:
 *  - C → Create (POST)
 *  - R → Read   (GET)
 *  - U → Update (PUT or PATCH)
 *  - D → Delete (DELETE)
 */

// ================== EXPRESS SETUP ==================
const express = require('express');
const app = express();
app.use(express.json()); // Middleware to parse JSON body

// ================== STUDENT DATA ===================
let students = [
  { id: 1, name: "Ateek" },
  { id: 2, name: "Sara" }
];

// ================== ROUTES =========================

// ✅ Get all students
app.get('/students', (req, res) => {
  res.json(students);
});

// ✅ Get one student by ID
app.get('/students/:id', (req, res) => {
  const student = students.find(s => s.id == req.params.id);
  res.json(student || { message: "Student not found" });
});

// ✅ Add a new student
app.post('/students', (req, res) => {
  const newStudent = req.body;
  students.push(newStudent);
  res.status(201).json(newStudent);
});

// ✅ Update an existing student
app.put('/students/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = students.findIndex(s => s.id === id);
  if (index !== -1) {
    students[index] = req.body;
    res.json(students[index]);
  } else {
    res.status(404).send("Student not found");
  }
});

// ✅ Delete a student
app.delete('/students/:id', (req, res) => {
  students = students.filter(s => s.id != req.params.id);
  res.send("Student deleted");
});

// ================== START SERVER ===================
app.listen(3000, () => console.log('🚀 Server running at http://localhost:3000'));
