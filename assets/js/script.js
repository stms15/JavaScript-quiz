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