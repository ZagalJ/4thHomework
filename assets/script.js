var quizEl = document.getElementById('quiz'); //called multiple elements
var timeEl = document.getElementsByClassName('time'); //had to add semicolon, thanks OCD
var startEl = document.getElementById("start");
var nextbutton = document.getElementById("next-btn");
var containerEl = document.getElementById("container");
let shuffledQuestions, currentQuestionIndex;
var questionEl= document.getElementById('question');
var answerButtonsEl= document.getElementById("answer-buttons");
var scoresEl = document.getElementById("scores");

startEl.addEventListener("click", startQuiz); //start of the script
nextbutton.addEventListener("click", () =>{ //create a function when clicking next question button
    currentQuestionIndex++; //incriase counter to not repeat the question
    setNextQuestion(); //call show next question function

})

function startQuiz(){ //start quiz function initialized after button has been clicked
    console.log("started"); //log message to console
    startEl.classList.add('hide'); // hides start button by adding hide class
    shuffledQuestions = questions.sort(() => Math.random() -.5); //looks for a question using math method
    currentQuestionIndex = 0; //start index in 0
    quiz.classList.remove('hide'); //remove hide class from the quiz to display
    setNextQuestion(); //set next question
    setInterval(Mytimer(), 1000) //starts the timer
}

function setNextQuestion(){ //set next question function
    resetState(); //calls function to reset state
    showQuestion(shuffledQuestions[currentQuestionIndex]); //show question stored in current index
}

function showQuestion(question){ //show question function made to display the questions 
    questionEl.innerText = question.question; //change text in question to display the current question
    question.answers.forEach(answer => { //change data for each answer. including buttons and text elements
        var button = document.createElement ('button')
        button.innerText = answer.text;
        button.classList.add('btn')
        if(answer.correct){ //if the correct answer has been selected;
            button.dataset.correct = answer.correct //mark it as correct
        }
        button.addEventListener('click',selectAnswer) //event listener waits for click button 
        answerButtonsEl.appendChild(button); // when button has been clicked, buttons append next options
    });
}

function resetState(){  //reset state function to hide next button and options buttons
    clearStatusClass(document.body);
    nextbutton.classList.add('hide')
    while(answerButtonsEl.firstChild){
        answerButtonsEl.removeChild
        (answerButtonsEl.firstChild);
    }
}

function Mytimer(){ //timer function
    timeEl = 60; //set timer for 60 seconds
    setInterval(function(){ //start the interval function
      console.log(timeEl); //log time element
      timeEl-- //decrease element by 1
      document.getElementById("time").innerHTML= timeEl; //change time element 
      if (timeEl === 0) { //when timer hits 0
        console.log("Time's out"); //display time's out
      }
    }, 1000); //set interval to 1000 which is considered a second

}

function selectAnswer(e){ //function select answer
    var selectedButton = e.target; //target for selected button
    var correct = selectedButton.dataset.correct; //correct button
    Array.from(answerButtonsEl.children).forEach(button =>{ //array looks for answers
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffledQuestions.length > currentQuestionIndex + 1){ //when the arrays has gone through all the questions stops showing the next question button
    nextbutton.classList.remove('hide')
    } else { //change start question to end
        dataInput();
        startEl.innerText = "End";
        startEl.classList.remove('hide');
    }
}
function dataInput(){ //data input function requesting data for the highscores table
    var name = prompt("Enter your name");
    sessionStorage.setItem("Name", name); //items saved to local storage
    var score = prompt("Enter your score")
    sessionStorage.setItem("Score", score);
}

function setStatusClass(element, correct){ //set status class to either correct or wrong
    clearStatusClass (element)
    if(correct){
        element.classList.add('correct')
    } else{
        element.classList.add('wrong')
    }
}

function clearStatusClass(element){ //reset status from either correct or wrong
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [ //array to storage both questions and answers
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
    