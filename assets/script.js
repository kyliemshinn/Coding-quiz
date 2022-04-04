// all needed global variables for the game to pull from throughout
var startButton= document.getElementById("start-btn")
var questionBox= document.getElementById("question-box")
var timer= document.getElementById("timer")
var highscores= document.getElementById("highscores")
var calculatedPoints= 0;
//questions and answers for each of the quiz questions displayed on the page- nest in objects
var questions=[
    {
        question: "What programming language makes up the structure of the webpage?",
        possibleAnswers: ["boolean", "HTML", "Bootstrap", "Javascript"],
        correctAnswer: "HTML"
    }, 
    {
        question: "What does CSS stand for?"
        possibleAnswers: ["Canvas Style Sheets", "Customizable"]
        correctAnswer: 
    }
]


//when the start button is clicked, it will initiate the game to start
startButton.addEventListener("click", startGame)

// a function that starts the game to play, the start button will hide, and the question box will pop up
function startGame () {

startButton.classList.add("hide");
questionBox.classList.remove("hide");
nextQuestion();

}



//creating a function to transition to the next question
function nextQuestion() {

} 



//what happens when you select the correct answer
function selectAnswer() {

}