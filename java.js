const questions = [
    {
        category: "JavaScript",
        question: "What is the use of the 'let' keyword in JavaScript?",
        options: ["Declare variables", "Create constants", "Define functions", "Define classes"],
        correctAnswer: "Declare variables"
    },
    {
        category: "JavaScript",
        question: "Which method is used to parse a JSON string into a JavaScript object?",
        options: ["JSON.parse()", "JSON.stringify()", "JSON.toObject()", "JSON.parseObject()"],
        correctAnswer: "JSON.parse()"
    },
    {
        category: "JavaScript",
        question: "What is the output of 'typeof null' in JavaScript?",
        options: ["'object'", "'null'", "'undefined'", "'number'"],
        correctAnswer: "'object'"
    },
    {
        category: "JavaScript",
        question: "Which of the following is NOT a JavaScript data type?",
        options: ["Number", "String", "Boolean", "Character"],
        correctAnswer: "Character"
    },
    {
        category: "JavaScript",
        question: "Which method adds one or more elements to the end of an array and returns the new length?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        correctAnswer: "push()"
    },
    {
        category: "JavaScript",
        question: "What is the correct syntax for referring to an external script called 'app.js'?",
        options: ["<script src='app.js'>", "<script name='app.js'>", "<script href='app.js'>", "<script file='app.js'>"],
        correctAnswer: "<script src='app.js'>"
    },
    {
        category: "JavaScript",
        question: "Which company developed JavaScript?",
        options: ["Netscape", "Microsoft", "Sun Microsystems", "Oracle"],
        correctAnswer: "Netscape"
    },
    {
        category: "JavaScript",
        question: "Which of the following is used to define a class in JavaScript?",
        options: ["class", "def", "function", "object"],
        correctAnswer: "class"
    },
    {
        category: "JavaScript",
        question: "How do you create a function in JavaScript?",
        options: ["function myFunction()", "def myFunction()", "create myFunction()", "function:myFunction()"],
        correctAnswer: "function myFunction()"
    },
    {
        category: "JavaScript",
        question: "How do you write an array in JavaScript?",
        options: ["var colors = ['red', 'green', 'blue']", "var colors = (1:'red', 2:'green', 3:'blue')", "var colors = 'red', 'green', 'blue'", "var colors = {'red', 'green', 'blue'}"],
        correctAnswer: "var colors = ['red', 'green', 'blue']"
    },
    {
        category: "HTML",
        question: "What does HTML stand for?",
        options: ["HyperText Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "HyperTool Markup Language"],
        correctAnswer: "HyperText Markup Language"
    },
    {
        category: "HTML",
        question: "Which HTML element is used to specify a footer for a document or section?",
        options: ["<footer>", "<section>", "<bottom>", "<aside>"],
        correctAnswer: "<footer>"
    },
    {
        category: "HTML",
        question: "Which HTML element is used to define important text?",
        options: ["<strong>", "<important>", "<b>", "<i>"],
        correctAnswer: "<strong>"
    },
    {
        category: "HTML",
        question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
        options: ["alt", "title", "src", "href"],
        correctAnswer: "alt"
    },
    {
        category: "HTML",
        question: "Which HTML element is used to define a navigation link?",
        options: ["<nav>", "<navigate>", "<navigation>", "<navlink>"],
        correctAnswer: "<nav>"
    },
    {
        category: "HTML",
        question: "What is the correct HTML element for inserting a line break?",
        options: ["<br>", "<lb>", "<break>", "<linebreak>"],
        correctAnswer: "<br>"
    },
    {
        category: "HTML",
        question: "Which HTML element is used to specify a header for a document or section?",
        options: ["<header>", "<section>", "<top>", "<head>"],
        correctAnswer: "<header>"
    },
    {
        category: "HTML",
        question: "Which HTML attribute is used to define inline styles?",
        options: ["style", "class", "styles", "font"],
        correctAnswer: "style"
    },
    {
        category: "HTML",
        question: "Which HTML element is used to define a table?",
        options: ["<table>", "<tab>", "<tr>", "<td>"],
        correctAnswer: "<table>"
    },
    {
        category: "HTML",
        question: "Which HTML element is used to define emphasized text?",
        options: ["<em>", "<italic>", "<i>", "<strong>"],
        correctAnswer: "<em>"
    },
    {
        category: "CSS",
        question: "What does CSS stand for?",
        options: ["Cascading Style Sheets", "Colorful Style Sheets", "Creative Style Sheets", "Computer Style Sheets"],
        correctAnswer: "Cascading Style Sheets"
    },
    {
        category: "CSS",
        question: "Which HTML attribute is used to define inline styles?",
        options: ["style", "class", "id", "font"],
        correctAnswer: "style"
    },
    {
        category: "CSS",
        question: "Which is the correct CSS syntax?",
        options: ["body {color: black;}", "{body;color:black;}", "{body:color=black;}", "body:color=black;"],
        correctAnswer: "body {color: black;}"
    },
    {
        category: "CSS",
        question: "Which property is used to change the background color?",
        options: ["background-color", "color", "bgcolor", "background"],
        correctAnswer: "background-color"
    },
    {
        category: "CSS",
        question: "Which CSS property controls the text size?",
        options: ["font-size", "text-style", "text-size", "font-style"],
        correctAnswer: "font-size"
    },
    {
        category: "CSS",
        question: "What is the correct CSS syntax to make all the <p> elements bold?",
        options: ["p {font-weight: bold;}", "p {text-size: bold;}", "p {font-style: bold;}", "p {text-weight: bold;}"],
        correctAnswer: "p {font-weight: bold;}"
    },
    {
        category: "CSS",
        question: "How do you make each word in a text start with a capital letter?",
        options: ["text-transform: capitalize;", "text-style: capitalize;", "transform: capitalize;", "text-capitalize: true;"],
        correctAnswer: "text-transform: capitalize;"
    },
    {
        category: "CSS",
        question: "Which property is used to change the font of an element?",
        options: ["font-family", "font-style", "font-size", "font-weight"],
        correctAnswer: "font-family"
    },
    {
        category: "CSS",
        question: "Which property is used to center text?",
        options: ["text-align", "align-text", "center-text", "text-center"],
        correctAnswer: "text-align"
    },
    {
        category: "CSS",
        question: "How do you select an element with id 'demo'?",
        options: ["#demo", ".demo", "demo", "*demo"],
        correctAnswer: "#demo"
    }
];

// Initial state variables
let currentQuestionIndex = 0;
let correctAnswers = 0;
let timerInterval;
let timeRemaining = 20; // Time per question in seconds

// DOM elements
const questionTitle = document.getElementById('questionTitle');
const optionsList = document.getElementById('optionsList');
const submitAnswerBtn = document.getElementById('submitAnswer');
const resultCard = document.getElementById('resultCard');
const quizResult = document.getElementById('quizResult');
const restartQuizBtn = document.getElementById('restartQuiz');
const cancelQuizBtn = document.getElementById('cancelQuizBtn');
const filterButtons = document.querySelectorAll('.filterBtn');
const showAllBtn = document.getElementById('showAllBtn');

// Event listeners
submitAnswerBtn.addEventListener('click', submitAnswer);
restartQuizBtn.addEventListener('click', restartQuiz);
cancelQuizBtn.addEventListener('click', cancelQuiz);
filterButtons.forEach(button => button.addEventListener('click', filterByCategory));
showAllBtn.addEventListener('click', showAllQuestions);

// Display initial question
displayQuestion();

// Functions
function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionTitle.textContent = currentQuestion.question;

    // Clear previous options
    optionsList.innerHTML = '';

    // Display options
    currentQuestion.options.forEach(option => {
        const li = document.createElement('li');
        li.textContent = option;
        optionsList.appendChild(li);
    });

    // Start timer
    startTimer();
}

function startTimer() {
    timeRemaining = 20;
    clearInterval(timerInterval);
    timerInterval = setInterval(updateTimer, 1000);
    updateTimer();
}

function updateTimer() {
    if (timeRemaining > 0) {
        timeRemaining--;
    } else {
        clearInterval(timerInterval);
        // Auto submit if time runs out
        submitAnswer();
    }
}

function submitAnswer() {
    clearInterval(timerInterval);

    const selectedOption = optionsList.querySelector('li.selected');
    if (!selectedOption) {
        alert('Please select an answer!');
        return;
    }

    const selectedAnswer = selectedOption.textContent;
    const currentQuestion = questions[currentQuestionIndex];
    
    if (selectedAnswer === currentQuestion.correctAnswer) {
        correctAnswers++;
    }

    // Move to next question or show result
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        displayResult();
    }
}

function displayResult() {
    quiz.style.display = 'none';
    resultCard.style.display = 'block';

    quizResult.textContent = `You got ${correctAnswers} out of ${questions.length} questions correct.`;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    correctAnswers = 0;
    quiz.style.display = 'block';
    resultCard.style.display = 'none';
    displayQuestion();
}

function cancelQuiz() {
    clearInterval(timerInterval);
    alert('Quiz cancelled.');
    quiz.style.display = 'none';
    resultCard.style.display = 'block';
    quizResult.textContent = 'Quiz Cancelled';
}

function filterByCategory(event) {
    const category = event.target.dataset.category;
    const filteredQuestions = questions.filter(question => question.category === category);
    if (filteredQuestions.length > 0) {
        currentQuestionIndex = 0;
        questions.splice(0, questions.length, ...filteredQuestions);
        restartQuiz();
    } else {
        alert(`No questions found for category: ${category}`);
    }
}

function showAllQuestions() {
    currentQuestionIndex = 0;
    questions.splice(0, questions.length, ...questions);
    restartQuiz();
}