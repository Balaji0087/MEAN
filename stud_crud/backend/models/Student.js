const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3 },
  email: { type: String, required: true, unique: true, match: /.+\@.+\..+/ },
  course: { 
    type: String, 
    enum: ['Computer Science', 'Mathematics', 'Physics', 'Chemistry', 'Biology'], 
    required: true 
  },
  age: { type: Number, required: true, min: 18, max: 60 },
}, { timestamps: true });

module.exports = mongoose.model('Student', studentSchema);
