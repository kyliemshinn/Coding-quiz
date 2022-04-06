// all needed global variables for the game to pull from throughout

//all buttons
var startButton= document.getElementById("start-btn");
var questionBox= document.getElementById("question-box");
var nextButton=  document.getElementById("next-btn");
var answerButtons= document.querySelector("ans-btn")

//for the questions
var container = document.getElementById("quiz-container")
var questionEl= document.getElementById("quiz-questions");
var answerEl= document.getElementById("answer-btns");
var questionIndex= 0;
var score=0;

//for highscores
var highScoreList= document.getElementById("high-scores-list")
var highscores= document.getElementById("highscore-btn");
var endQuizResults= document.getElementById("end-quiz")
var calculatedPoints= 0;

//for the timer during the quiz
var timer= document.getElementById("timer");
var timerStart= 60;
var timeRemain= timerStart;

//to get the buttons to shuffle at random
var shuffledQuestions;
var questionIndex;

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
    end=false;
    
    startButton.classList.add("hide");
    questionBox.classList.remove("hide");
    container.classList.remove("hide");
    nextButton.classList.remove("hide");
    highScoreList.classList.add("hide");
    endQuizResults.classList.add("hide");



timer.style.display = `block`;

shuffledQuestions= questions.sort(() => Math.random() - .5);//either less than zero or above zero 50% of time
questionIndex = 0;


nextQuestion();
startTimer();
}

//setting parameters of the timer
function startTimer() {
    end=false;
    var timerInterval = setInterval(function() {
        if(end) { 
            clearInterval(timerInterval); 
            return;
        }
        if(timeRemain < 1) { 
            clearInterval(timerInterval); 
            endGame(); 
        }

        timer.textContent = timeRemain; 
        timeRemain--; 
    }, 1000); 

    return;
}
//when next button is clicked, execute the nextQuestion function
nextButton.addEventListener("click", nextQuestion);

//creating a function to transition to the next question
function nextQuestion() {
    
    displayQuestions(shuffledQuestions[questionIndex]); 
    
    questionIndex++;
    if (questionIndex >= questions.question.length){ 
        endGame(); 
    } else { 
        displayQuestions(shuffledQuestions[questionIndex]); 
    
    
} 

function displayQuestions(question) {
    questionEl.innerText=question.question;
  
  
    answerEl.innerText=question.possibleAnswers;
    console.log(answerEl)

}


//what happens when you select the correct answer
function selectAnswer(e) {
if(possibleAnswers === correctAnswer) {
    alert("Correct!")
} else { alert("Wrong:(")

}

    
}

function endGame() {
    end=true;
    timer.style.display = "none";
    score=timeRemain;

    if(timeRemain <= 0) {
        (score= 0);
    }
    
    endQuizResults.classList.remove("hide");

    showHighscores();
}






function storeScores() {
    localStorage.setItem("Initials", score);
}


highscores.addEventListener("click", showHighscores);
//swtiching to showing the high scores list where you can input your intials and score
function showHighscores() {

startButton.classList.add("hide");
container.classList.add("hide");
questionBox.classList.add("hide");
nextButton.classList.add("hide");
highScoreList.classList.remove("hide");


document.querySelector("#hs-span").textContent= score;

}

}
