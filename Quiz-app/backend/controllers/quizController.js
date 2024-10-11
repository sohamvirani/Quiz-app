const quizService = require('../services/quizService');

// Retrieve all quizzes
exports.getQuizzes = async (req, res, next) => {
    try {
        const quizzes = await quizService.fetchAllQuizzes();
        res.status(200).json(quizzes);
    } catch (err) {
        next(err);
    }
};

// Retrieve a single quiz by its ID
exports.getQuizById = async (req, res, next) => {
    try {
        const quiz = await quizService.fetchQuizById(req.params.id);
        res.status(200).json(quiz);
    } catch (err) {
        next(err);
    }
};

// Process quiz submission and calculate the score
exports.submitQuiz = async (req, res, next) => {
    try {
        const { quizId, userAnswers } = req.body;
        const score = await quizService.submitQuizAnswers(quizId, userAnswers);
        res.status(200).json({ score });
    } catch (err) {
        next(err);
    }
};

// Get all quizzes and handle empty result
exports.getAllQuizzes = async (req, res) => {
    try {
        const quizzes = await Quiz.find();
        if (!quizzes.length) {
            return res.status(404).json({ message: 'No quizzes available.' });
        }
        res.json(quizzes);
    } catch (err) {
        console.error(err); // Log the error for further investigation
        res.status(500).json({ message: 'Failed to load quizzes. Try again soon.' });
    }
};
