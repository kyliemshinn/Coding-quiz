//questions and answers for each of the quiz questions displayed on the page- nest in objects
const questions = [
  {
    question:
      "What programming language makes up the structure of the webpage?",
    possibleAnswers: ["boolean", "HTML", "Bootstrap", "Javascript"],
    correctAnswer: "HTML"
  },
  {
    question: "What does CSS stand for?",
    possibleAnswers: [
      "Canvas Style Sheets",
      "Coding Sample Sheet",
      "Cascading Style Sheet",
      "Customizable Shade Schemes"
    ],
    correctAnswer: "Cascading Style Sheets"
  },
  {
    question:
      "What Javascript feature lets you run the same block of code multiple times?",
    possibleAnswers: ["Booleans", "Maps", "Arrays", "For loops"],
    correctAnswer: "For loops"
  },
  {
    question:
      "In Javascript, what are the containers called used to store data?",
    possibleAnswers: ["Methods", "Templates", "Documents", "Variables"],
    correctAnswer: "Variables"
  },
  {
    question:
      "What is the small image displayed next to the title tab called in HTML?",
    possibleAnswers: ["Dogs", "Tag Friend", "Favicon", "Head"],
    correctAnswer: "Favicon"
  },
  {
    question: "Who invented jQuery?",
    possibleAnswers: ["John Resig", "Steve Jobs", "God", "Mark Zuckerberg"],
    correctAnswer: "John Resig"
  }
];

//set initial scores
var score = 0;
var currentQuestion = -1;
var timeLeft = 0;
var timer;

// start timer
function start() {
  timeLeft = 90;
  document.getElementById("timeLeft").innerHTML = timeLeft;

  timer = setInterval(function () {
    timeLeft--;
    document.getElementById("timeLeft").innerHTML = timeLeft;

    // timer ends at 0
    if (timeLeft <= 0) {
      clearInterval(timer);
      endGame();
    }
  }, 1000);

  next();
}
//Adds score to local storage
function setScore() {
  localStorage.setItem("highscore", score);
  localStorage.setItem("highscoreName", document.getElementById("name").value);
  getScore();
}

function getScore() {
  var quizContent =
    `
    <h2>` +
    localStorage.getItem("highscoreName") +
    `'s highscore is:</h2>
    <h1>` +
    localStorage.getItem("highscore") +
    `</h1><br>
    <button class="btn" onclick="clearScore()">Clear score</button><button class="btn" onclick="resetGame()">Play again!</button>
    
    `;

  document.getElementById("quizBody").innerHTML = quizContent;
}

//clear score from storage
function clearScore() {
  localStorage.setItem("highscore", "");
  localStorage.setItem("highscoreName", "");

  resetGame();
}

//Reset the quiz
function resetGame() {
  clearInterval(timer);
  score = 0;
  currentQuestion = -1;
  timeLeft = 0;
  timer = null;

  document.getElementById("timeLeft").innerHTML = timeLeft;

  var quizContent = `
    <h1>
        Coding Quiz!
    </h1>
    <h3>
        Click Start to play!
    </h3>
    <button class="btn" onclick="start()">Start!</button>`;

  document.getElementById("quizBody").innerHTML = quizContent;
}

//Deduct 5 seconds when user guesses wrong answer
function incorrect() {
  timeLeft -= 5;
  next();
}

//Increase the score by 3 on correct answer
function correct() {
  score += 3;
  next();
}
// loop through all the questions until hit the end of the questions list
function next() {
  currentQuestion++;

  if (currentQuestion > questions.length - 1) {
    endGame();
    return;
  }

  // render after game text
  function endGame() {
    clearInterval(timer);

    var quizContent = `
        <h2>Game over!</h2>
        <h3>You got a  ${score} /15!</h3>
        <input class="input-group-text inputScore" type="text" id="name" placeholder="Enter Initials">
        <button class="btn" onclick="setScore()">Set score!</button>`;

    document.getElementById("quizBody").innerHTML = quizContent;
  }

  //display quiz content at current question index
  var quizContent = "<h2>" + questions[currentQuestion].question + "</h2>";

  for (
    var buttonLoop = 0;
    buttonLoop < questions[currentQuestion].possibleAnswers.length;
    buttonLoop++
  ) {
    var buttonCode = `<button class="btn" onclick=\"[CORRECTANSWER]\">[POSSIBLEANSWER]</button>`;
    buttonCode = buttonCode.replace(
      "[POSSIBLEANSWER]",
      questions[currentQuestion].possibleAnswers[buttonLoop]
    );

    if (
      questions[currentQuestion].possibleAnswers[buttonLoop] ==
      questions[currentQuestion].correctAnswer
    ) {
      buttonCode = buttonCode.replace("[CORRECTANSWER]", "correct()");
    } else {
      buttonCode = buttonCode.replace("[CORRECTANSWER]", "incorrect()");
    }
    quizContent += buttonCode;
  }

  document.getElementById("quizBody").innerHTML = quizContent;
}
