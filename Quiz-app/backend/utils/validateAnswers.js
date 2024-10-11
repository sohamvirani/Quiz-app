module.exports = (quiz, userAnswers) => {
    let totalScore = 0;

    quiz.questions.forEach((question, idx) => {
        if (userAnswers[idx] === question.correctAnswer) {
            totalScore++;
        }
    });

    return totalScore;
};
