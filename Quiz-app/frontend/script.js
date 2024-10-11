const quizContainer = document.getElementById('quiz');
const submitBtn = document.getElementById('submit-btn');
const resultDisplay = document.getElementById('result');
const quizIdentifier = '60d5ec49e3c3f10015c5d6a0'; 

// Function to load the quiz data from the backend
async function loadQuiz() {
    try {
        const res = await fetch(`http://localhost:4000/api/quizzes/${quizIdentifier}`);
        if (!res.ok) {
            const errorDetails = await res.json();
            resultDisplay.innerText = errorDetails.message || 'Could not load quiz. Please try again.';
            return;
        }
        const quizData = await res.json();
        renderQuiz(quizData);
    } catch (err) {
        console.error('Quiz loading failed:', err);
        resultDisplay.innerText = 'Unable to load the quiz. Please try again later.';
    }
}

// Function to render quiz questions and choices
function renderQuiz(quizData) {
    quizContainer.innerHTML = `
        <h2>${quizData.title}</h2>
        <p>${quizData.description}</p>
    `;
    quizData.questions.forEach((q, i) => {
        const questionMarkup = `
            <div class="question">${i + 1}. ${q.question}</div>
            <div class="options">
                ${q.options.map((opt) => `
                    <label>
                        <input type="radio" name="question${i}" value="${opt}">
                        ${opt}
                    </label>
                `).join('')}
            </div>
        `;
        quizContainer.innerHTML += questionMarkup;
    });
}

submitBtn.addEventListener('click', () => {
    const userAnswers = Array.from(
        { length: quizContainer.querySelectorAll('.question').length }, 
        (_, i) => document.querySelector(`input[name="question${i}"]:checked`)?.value || null
    );

    const totalScore = userAnswers.filter(answer => answer === "4").length;
    resultDisplay.innerHTML = `You scored: ${totalScore} out of ${userAnswers.length}`;
});

loadQuiz();
