const express = require('express');
const router = express.Router();

//Quiz page 
router.get('/questions', (req, res) => res.render('questions'));


// //Quiz
// router.get('/users/quiz/questions', (req,res)=> 
//   res.redirect('/users/quiz/questions')
// );

module.exports = router;