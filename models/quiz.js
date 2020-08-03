const mongoose = require('mongoose');

const QuizSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,

  },
  questions: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Answers'
  }
    

});

const Quiz = mongoose.model('Quiz', QuizSchema);

module.exports = Quiz;
