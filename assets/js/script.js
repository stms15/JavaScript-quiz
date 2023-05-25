// Object with lists of quiz questions and answers
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
}


var cardEl = document.querySelector(".card");
var quizContainerEl = document.querySelector(".question-container");
var questionEl = document.querySelector("#quiz-q");
var ans1El = document.querySelector('#quiz-ans-1');
var ans2El = document.querySelector('#quiz-ans-2');
var ans3El = document.querySelector('#quiz-ans-3');
var ans4El = document.querySelector('#quiz-ans-4');
var startBttnEl = document.querySelector("#start-button");

startBttnEl.addEventListener("click", function() {
    cardEl.setAttribute("style", "display: none");

    console.log(questionEl.textContent);
    questionEl.textContent = quizQuestions.question[0];
    ans1El.textContent = quizQuestions.correctAnswer[0];
    ans2El.textContent = quizQuestions.fillers[0][0];
    ans3El.textContent = quizQuestions.fillers[0][1];
    ans4El.textContent = quizQuestions.fillers[0][2];

    quizContainerEl.setAttribute("style", "display: block");
})