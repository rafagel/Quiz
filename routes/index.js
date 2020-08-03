const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));

//Quiz page 
router.get('/quiz', (req, res) => res.render('quiz'));

//Questions page 
router.get('/questions', (req, res) => res.render('questions'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    user: req.user
  })
);

//Quiz
router.get('/users/quiz', (req,res)=> 
  res.redirect('/users/quiz')
);

module.exports = router;
