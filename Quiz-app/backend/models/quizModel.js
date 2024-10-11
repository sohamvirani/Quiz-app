const mongoose = require('mongoose');

// Schema for individual questions
const questionSchema = new mongoose.Schema({
    questionText: {
        type: String,
        required: [true, 'Question text is required']
    },
    answerChoices: {
        type: Array,
        required: [true, 'Answer choices are required']
    },
    correctAnswer: {
        type: Number,
        required: [true, 'Correct answer index is required']
    }
});

// Schema for the quiz model
const quizSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Quiz title is required']
    },
    description: {
        type: String,
        default: '' // Optional description
    },
    questions: [questionSchema]
});

// Export the Quiz model
module.exports = mongoose.model('Quiz', quizSchema);
