const mongoose, {Schema} = require('mongoose');

const QuestionSchema = new mongoose.Schema({
      a1: {
        type: String,
        required: true
      },
      a2: {
        type: String,
        required: true
      },
      a3: {
        type: String,
        required: true
      },
      a4: {
        type: String,
        required: true
      },
      correctAnswer:{
        type: String,
        required: true
      }
});

const Question = mongoose.model('Question', QuestionSchema);

module.exports = Quiz;
