// all needed global variables for the game to pull from throughout

//all buttons
var startButton= document.getElementById("start-btn");
var questionBox= document.getElementById("question-box");

//for the questions
var questionEl= document.getElementById("quiz-questions");
var answerEl= document.getElementById("answer-btns");
var questionIndex= 0;
var score=0;

//for highscores
var highscores= document.getElementById("highscores");
var calculatedPoints= 0;

//for the timer during the quiz
var timer= document.getElementById("timer");
var timerStart= 60;
var timeRemain= timerStart;

//to get the buttons to shuffle at random
var shuffledQuestions;
var currentQuestionIndex;

var end= true;

//questions and answers for each of the quiz questions displayed on the page- nest in objects
var questions=[
    {
        question: "What programming language makes up the structure of the webpage?",
        possibleAnswers: ["boolean", "HTML", "Bootstrap", "Javascript"],
        correctAnswer: "HTML"
    }, 
    {
        question: "What does CSS stand for?",
        possibleAnswers: ["Canvas Style Sheets", "Coding Sample Sheet", "Cascading Style Sheet", "Customizable Shade Schemes"],
        correctAnswer: "Cascading Style Sheets"
    },
    {
        question: "What Javascript feature lets you run the same block of code multiple times?",
        possibleAnswers: ["Booleans", "Maps", "Arrays", "For loops"],
        correctAnswer: "For loops"
    },
    {
        question: "In Javascript, what are the containers called used to store data?",
        possibleAnswers: ["Methods", "Templates", "Documents", "Variables"],
        correctAnswer: "Variables"
    },
    {
        question: "What is the small image displayed next to the title tab called in HTML?",
        possibleAnswers: ["Dogs", "Tag Friend", "Favicon", "Head"],
        correctAnswer: "Favicon"
    },
    {
        question: "Who invented jQuery?",
        possibleAnswers: ["John Resig", "Steve Jobs", "God", "Mark Zuckerberg"],
        correctAnswer: "Favicon"
    }
]


//when the start button is clicked, it will initiate the game to start
startButton.addEventListener("click", startGame)

// a function that starts the game to play, the start button will hide, and the question box will pop up
function startGame () {

startButton.classList.add("hide");
questionBox.classList.remove("hide");

shuffledQuestions= questions.sort(() => Math.random() - .5);
currentQuestionIndex = 0;

timer.style.display = `block`;

nextQuestion();
}

//setting parameters of the timer
function startTimer() {
    var timerInterval = setInterval(function() {
        if(end) { 
            clearInterval(timerInterval); 
            return;
        }
        if(timeLeft < 1) { 
            clearInterval(timerInterval); 
            endGame(); //end game out of time scenario
        }

        timerTag.textContent = timeLeft; //update timer tag to latest time
        timeLeft--; //decrement timer after all code runs
    }, 1000); //1 second intervals

    return;
}


//creating a function to transition to the next question
function nextQuestion() {
    displayQuestions(shuffledQuestions[currentQuestionIndex])

} 

function displayQuestions(question) {
    questionEl.innerText=question.question;
}

//what happens when you select the correct answer
function selectAnswer() {

}


function countDown () {

}