
const questions = [
    {
        question: "Capital of France?",
        options: ["Paris", "London", "Rome", "Berlin"],
        answer: "Paris"
    },
    {
        question: "5 + 3 = ?",
        options: ["5", "8", "9", "6"],
        answer: "8"
    },
    {
        question: "HTML stands for?",
        options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyperlinking Text Management Language"],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "CSS is used for?",
        options: ["Styling", "Scripting", "Structuring", "Calculating"],
        answer: "Styling"
    },
    {
        question: "JavaScript runs on?",
        options: ["Browser", "Server", "Desktop", "All"],
        answer: "All"
    },
    {
        question: "Largest planet?",
        options: ["Earth", "Venus", "Jupiter", "Mars"],
        answer: "Jupiter"
    },
    {
        question: "Fastest land animal?",
        options: ["Lion", "Tiger", "Cheetah", "Leopard"],
        answer: "Cheetah"
    },
    {
        question: "Water formula?",
        options: ["CO2", "H2O", "O2", "NaCl"],
        answer: "H2O"
    },
    {
        question: "Which is a frontend framework?",
        options: ["React", "Node", "Express", "MongoDB"],
        answer: "React"
    },
    {
        question: "Which is a JS runtime?",
        options: ["React", "Vue", "Node.js", "Angular"],
        answer: "Node.js"
    },
];

const questionNumberElement = document.getElementById("question-number");
const questionElement = document.getElementById("question");
const optionElements = document.querySelectorAll(".option"); // Changed to querySelectorAll
const timerElement = document.getElementById("timer");
const nextBtnElement = document.getElementById("next-btn");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");

let currentQuestion = 0;
let score = 0;
let timeLeft = 60;
let timer;
let answerSelected = false;

function loadQuestion() {
    const { question, options } = questions[currentQuestion];
    questionNumberElement.textContent = `Question ${currentQuestion + 1}/${questions.length}`; // Fixed template literal
    questionElement.textContent = question;
    
    optionElements.forEach((option, index) => { // Added index parameter
        option.textContent = options[index];
        option.classList.remove("correct", "incorrect");
        option.onclick = () => selectOption(option); // Pass the option element
    }); 
    
    answerSelected = false;
    nextBtnElement.disabled = true;
    startTimer();
}

function selectOption(selectedOption) { // Added parameter
    if (!answerSelected) {
        answerSelected = true;
        const selectedAnswer = selectedOption.textContent;
        const correctAnswer = questions[currentQuestion].answer;
        
        if (selectedAnswer === correctAnswer) {
            score++;
            selectedOption.classList.add("correct");
            scoreElement.textContent = `Score: ${score}`;
        } else {
            selectedOption.classList.add("incorrect");
            optionElements.forEach(opt => {
                if (opt.textContent === correctAnswer) {
                    opt.classList.add("correct");
                }
            });
        }
        nextBtnElement.disabled = false;
    }
}

function loadNextQuestion() {
    clearInterval(timer)
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {

        showresult();
    }
}

nextBtnElement.addEventListener("click", () => {
    loadNextQuestion();
});

function startTimer(){
    clearInterval(timer);
    timeLeft = 60;
    timerElement.textContent = `Time left : ${timeLeft}s`;
    timer = setInterval(()=>{
        timeLeft--;
        timerElement.textContent = `Time left : ${timeLeft}s`;
        if(timeLeft <=0){
            clearInterval(timer);
            if(!answerSelected){
                 loadNextQuestion();
            }

        }
    },700)
}

function showresult(){
    const quizElement =document.getElementById("quiz");
    quizElement.classList.add("hide");
    resultElement.classList.remove("hide");
    scoreElement.textContent = `${score} out of ${questions.length}`;
}
// Start the quiz
loadQuestion();
