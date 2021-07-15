var quizEl = document.getElementById('quiz');
var timeEl = document.getElementsByClassName('time');
var startEl = document.getElementById("start");
var nextbutton = document.getElementById("next-btn");
var containerEl = document.getElementById("container")
let shuffledQuestions, currentQuestionIndex;
var questionEl= document.getElementById('question');
var answerButtonsEl= document.getElementById("answer-buttons")
var scoresEl = document.getElementById("scores")

startEl.addEventListener("click", startQuiz);
nextbutton.addEventListener("click", () =>{
    currentQuestionIndex++;
    setNextQuestion();

})

function startQuiz(){
    console.log("started");
    startEl.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() -.5);
    currentQuestionIndex = 0;
    quiz.classList.remove('hide');
    setNextQuestion();
    setInterval(Mytimer(), 1000)
}

function setNextQuestion(){
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question){
    questionEl.innerText = question.question;
    question.answers.forEach(answer => {
        var button = document.createElement ('button')
        button.innerText = answer.text;
        button.classList.add('btn')
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click',selectAnswer)
        answerButtonsEl.appendChild(button);
    });
}

function resetState(){
    clearStatusClass(document.body);

    nextbutton.classList.add('hide')
    while(answerButtonsEl.firstChild){
        answerButtonsEl.removeChild
        (answerButtonsEl.firstChild);
    }
}
function Mytimer(){
    timeEl = 60;
    setInterval(function(){
      console.log(timeEl);
      timeEl--
      document.getElementById("time").innerHTML= timeEl;
      if (timeEl === 0) {
        console.log("Time's out");
      }
    }, 1000);

}

function selectAnswer(e){
    var selectedButton = e.target;
    var correct = selectedButton.dataset.correct;
    //setStatusClass(document.body, correct)
    Array.from(answerButtonsEl.children).forEach(button =>{
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffledQuestions.length > currentQuestionIndex + 1){
    nextbutton.classList.remove('hide')
    } else {
        dataInput();
        startEl.innerText = "End";
        startEl.classList.remove('hide');
    }
}
function dataInput(){
    var name = prompt("Enter your name");
    sessionStorage.setItem("Name", name);
    var score = prompt("Enter your score")
    sessionStorage.setItem("Score", score);
}

function setStatusClass(element, correct){
    clearStatusClass (element)
    if(correct){
        element.classList.add('correct')
    } else{
        element.classList.add('wrong')
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'How many Fast and Furious movies are there?',
        answers: [
            { text:'9', correct: true },
            { text:'8', correct: false},
            { text:'10', correct: false},
            { text:'More than 10', correct: false}
        ]
    },  
    {
        question: 'Is coding fun?',
        answers: [
            { text:'Yes', correct: true },
            { text:'No', correct: false},
            { text:'Maybe', correct: false},
            { text:'Sometimes', correct: false}
        ]
    } , 
    {
        question: 'Apple or Windows?',
        answers: [
            { text:'Apple', correct: true },
            { text:'Windows', correct: false},
            { text:'Linux', correct: false},
            { text:'Android', correct: false}
        ]
    }
    
    ];
    