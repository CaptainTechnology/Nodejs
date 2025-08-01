// models/User.js

const mongoose = require('mongoose');

// Create schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: 'user' } // 'user' or 'admin'
});

// Export model
module.exports = mongoose.model('User', userSchema);
