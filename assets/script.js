var quizEl = document.getElementById('quiz');
var timeEl = document.getElementsByClassName('time');
var startEl = document.getElementById("start");
var containerEl = document.getElementById("container")
var shuffledQuestions, currentQuestionIndex;
let questionEl= document.getElementById('question');
var answerButtonsEl= document.getElementById("answer-buttons")

startEl.addEventListener("click", startQuiz);

function startQuiz(){
    console.log("started");
    startEl.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() -.5);
    currentQuestionIndex = 0;
    quiz.classList.remove('hide');
    showQuestions();
}

function setNextQuestion(){
showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function selectAnswer(){

}


const questions = [
{
    question: "How many Fast and Furious movies are there?",
    answers: {
        a: "8",
        b: "10",
        c: "9",
    },   
    correct: "c"
}   ,
{
    question: "What's 2+2?",
    answers: {
        a: "1",
        b: "3",
        c: "4",
    },
    correct: "c"
}   ,
{
    question: "What's 3*3?",
    answers: {
        a: "6",
        b: "9",
        c: "3",
    },
    correct: "b"
}   ,
{
    question: "What year are we in?",
    answers: {
        a: "2019",
        b: "2021",
        c: "2020",
    },
    correct: "b"
    }   
];



function timer(){ //function to generate how much time is left 

};


function showQuestions(question){
    questionEl.innerHTML = question.question;
    console.log("Started")
    var output = [];
    var answers;

    for(var i=0; i<questions.length; i++){
        answers= [];
        for(letter in questions[i].answers){
            answers.push(
                '<label>'
                    + '<input type="radio" name="question"' +i+'"value="'+letter+'">'
                    + letter + ':'
                    +questions[i].answers[letter]
                + '</label>'
            );
        }
        output.push(
            '<div class="questions">' + questions[i].question + '</div>'
            + '<div class="answers">' +answers.join('') + '<div>'
        );
            quizContainer.innerHTML= output.join('');
    }

    
};

