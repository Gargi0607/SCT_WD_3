const questions = [
    {
        question: "Which language is used for styling web pages?",
        answers: [
            { text: "HTML", correct: false },
            { text: "CSS", correct: true },
            { text: "Python", correct: false },
            { text: "Java", correct: false }
        ]
    },
    {
        question: "Which is not a JavaScript framework?",
        answers: [
            { text: "React", correct: false },
            { text: "Angular", correct: false },
            { text: "Vue", correct: false },
            { text: "Django", correct: true }
        ]
    },
    {
        question: "Which tag is used to link JavaScript file?",
        answers: [
            { text: "<script>", correct: true },
            { text: "<style>", correct: false },
            { text: "<link>", correct: false },
            { text: "<js>", correct: false }
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const scoreContainer = document.getElementById("score-container");
const scoreText = document.getElementById("score-text");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.style.display = "none";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.addEventListener("click", () => selectAnswer(answer.correct));
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = "none";
    answerButtons.innerHTML = "";
}

function selectAnswer(correct) {
    if (correct) {
        score++;
    }
    nextButton.style.display = "block";
}

function showScore() {
    questionElement.innerText = "";
    answerButtons.innerHTML = "";
    nextButton.style.display = "none";
    scoreContainer.classList.remove("hide");
    scoreText.innerText = "Your Score: " + score + " / " + questions.length;
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
});

startQuiz();
