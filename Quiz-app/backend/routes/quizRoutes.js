const express = require('express');
const quizController = require('../controllers/quizController');

const router = express.Router();

// Fetch all quizzes
router.get('/', quizController.getQuizzes);

// Fetch a quiz by its ID
router.get('/:id', quizController.getQuizById);

// Submit answers and compute the score
router.post('/submit', quizController.submitQuiz);

// Retrieve the list of all quizzes
router.get('/quizzes', quizController.getAllQuizzes);

module.exports = router;
