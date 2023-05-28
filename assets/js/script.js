// ---- Quiz Questions & Answers ---- //
var quizQuestions = {
    question: ['How do you define a variable?', 
    "What's the correct syntax of the following code?", 
    'Under what condition does the following if statement execute?\n if (statement1 && statement2){...}', 
    'How do you reference the HTML element with id="item"?', 
    'Can variables be assigned a value of a different type than how it was defined?'],
    correctAnswer: ['var', 
    'for (let i=0; i<5; i++){...}', 
    'if statement1 and statement2 are both true', 
    'document.getElementById("item")', 
    'yes'],
    fillers: [['define', 'variable', "you don't need to define variables"], 
    ['for i in range(5){...}', 'for (let i=0, i<5, i++){...}', 'for (i<5; 1){...}'], 
    ['if statement1 or statement2 are true', 'if both statement1 and statement2 are false', 'it will always execute'], 
    ['document.item', 'document("item")', 'document.getElement(id="item")'], 
    ['no', "I don't know, stop asking me questions", 'sometimes']]
};

// ----------------------- //

// ------ Functions ------ //

function randomAnswers(qNum) {
    var answers = JSON.parse(JSON.stringify(quizQuestions.fillers[qNum]));
    answers.push(quizQuestions.correctAnswer[qNum]);

    var prevInd = [];
    for (let i=0; i<answers.length; i++){
        var index = Math.floor(Math.random() * answers.length);
        var breakloop = false;

        while(!breakloop){
            if (prevInd.every(element => element !== index)) {
                answersEl[index].textContent = answers[i];
                prevInd.push(index);
                breakloop = true;
                break;
            } else {
                index = Math.floor(Math.random() * answers.length);
            }
        }
    }
}

function endQuiz () {
    finalScoreEl.textContent = "Your final score is " + secondsLeft;
    quizContainerEl.setAttribute("style", "display: none");
    endCardEl.setAttribute("style", "display: flex");
}

function setTime () {
    timeEl.textContent = "Time left: " + secondsLeft + 's';
    var timeInterval = setInterval(function(){
        secondsLeft = secondsLeft - 1 - extraSeconds;
        extraSeconds = 0;
        timeEl.textContent = "Time left: " + secondsLeft + 's';

        if (secondsLeft === 0) {
            endQuiz();
            clearInterval(timeInterval);
        } else if (counter === 5) {
            clearInterval(timeInterval);
        }
    }, 1000);
}

function reset() {
    quizContainerEl.setAttribute('style', 'display: none');
    endCardEl.setAttribute('style', 'display: none');
    startCardEl.setAttribute('style', 'display: flex');
    counter = 1;
    secondsLeft = 100;
}

function compareScores(a, b) {
    if (a.score < b.score) {
        return 1;
    } else if (a.score > b.score) {
        return -1;
    } else {
        return 0;
    }
}

// ----- End Functions ----- //


var startCardEl = document.querySelector("#start-card");
var startBttnEl = document.querySelector("#start-button");

var quizContainerEl = document.querySelector(".question-container");
var questionEl = document.querySelector("#quiz-q");
var ans1El = document.querySelector('#quiz-ans-1');
var ans2El = document.querySelector('#quiz-ans-2');
var ans3El = document.querySelector('#quiz-ans-3');
var ans4El = document.querySelector('#quiz-ans-4');
var answersEl = [ans1El, ans2El, ans3El, ans4El];

var endCardEl = document.querySelector('#end-card');
var finalScoreEl = document.querySelector('#final-score');
var initialsInput = document.getElementById('initials-input');
var submitBttnEl = document.querySelector('#submit-button');

var timeEl = document.querySelector('#time-left');
var secondsLeft = 100;
var extraSeconds = 0;
var afterAnsDisplay = document.querySelector('#correct-answer');

// var leaderboardPage = window.open("../leaderboard.html");
var leadersList = [];


startBttnEl.addEventListener("click", function() {
    startCardEl.setAttribute("style", "display: none");

    questionEl.textContent = quizQuestions.question[0];
    randomAnswers(0);

    quizContainerEl.setAttribute("style", "display: block");
    setTime();
});

var counter = 1;

quizContainerEl.addEventListener("click", function(event){
    if (event.target.textContent == quizQuestions.correctAnswer[counter-1]) {
        afterAnsDisplay.textContent = "Correct!";
        extraSeconds = 0;
    } else {
        afterAnsDisplay.textContent = "Incorrect";
        extraSeconds = 10;
    }
    if (counter < 5){
        questionEl.textContent = quizQuestions.question[counter];
        randomAnswers(counter);
        counter++;
    } else if (counter === 5) {
        endQuiz();
    }
});

submitBttnEl.addEventListener("click", function(event) {
    event.preventDefault();

    var loadStoredScores = JSON.parse(localStorage.getItem("leadersList"));
    if (loadStoredScores !== null) {
        leadersList = loadStoredScores;
    }

    var lastScore = {
        user: initialsInput.value,
        score: secondsLeft,
    };
    leadersList.push(lastScore);
    leadersList.sort(compareScores);

    localStorage.setItem("leadersList", JSON.stringify(leadersList));

    initialsInput.value = '';
    reset();
});