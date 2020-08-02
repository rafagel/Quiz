const mongoose = require('mongoose');

const QuizSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: true
  },
    A1: {
    type: String,
    required: true
  },
  A2: {
    type: String,
    required: true
  },
  A3: {
    type: String,
    required: true
  },
  A4: {
    type: String,
    required: true
  },

});

const Quiz = mongoose.model('quiz', QuizSchema);

module.exports = Quiz;
