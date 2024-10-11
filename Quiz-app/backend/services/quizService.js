const Quiz = require('../models/quizModel');
const validateAnswers = require('../utils/validateAnswers');

// Retrieve all available quizzes
exports.fetchAllQuizzes = async () => {
    const allQuizzes = await Quiz.find({});
    return allQuizzes;
};

// Retrieve a single quiz by its ID
exports.fetchQuizById = async (quizId) => {
    const selectedQuiz = await Quiz.findById(quizId);
    if (!selectedQuiz) {
        throw new Error('Quiz not found');
    }
    return selectedQuiz;
};

// Process quiz submission and score calculation
exports.submitQuizAnswers = async (quizId, userAnswers) => {
    const quizData = await Quiz.findById(quizId);
    if (!quizData) {
        throw new Error('Quiz not found');
    }

    const calculatedScore = validateAnswers(quizData, userAnswers);
    return calculatedScore;
};
