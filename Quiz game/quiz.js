const questions = [
  {
    question: "What is the capital of France?",
    answer:[
      {text:"paris", correct: true},
      {text:"Mumbai", correct: false},
      {text:"Delhi", correct: false},
      {text:"kabul", correct: false}
    ]
  },{
    question: "What is 1+1?",
    answer: [
      {text:"11", correct: false},
      {text:"0", correct: false},
      {text:"2", correct: true},
      {text:"-2", correct: false}
    ]
  },{
    question: "What is the smallest continent in the world?",
    answer: [
      {text:"Africa", correct: false},
      {text:"Asia", correct: false},
      {text:"Australia", correct: true},
      {text:"Europe", correct: false}
    ]
  },{
    question: "What is the largest planet in our solar system?",
    answer: [
      {text:"Earth", correct: false},
      {text:"Saturn", correct: false},
      {text:"Jupiter", correct: true},
      {text:"Mars", correct: false}
    ]
  },{
    question: "What is the largest mammal on Earth?",
    answer: [
      {text:"Blue whale", correct: true},
      {text:"Elephant", correct: false},
      {text:"Giraffe", correct: false},
      {text:"Lion", correct: false}
    ]
  },{
    question: "What is the largest country in the world?",
    answer: [
      {text:"China", correct: false},
      {text:"India", correct: false},
      {text:"Russia", correct: true},
      {text:"USA", correct: false}
    ]
  },{
    question: "What is the smallest country in the world?",
    answer: [
      {text:"Vatican City", correct: true},
      {text:"Monaco", correct: false},
      {text:"Nauru", correct: false},
      {text:"Tuvalu", correct: false}
    ]
  },{
    question: "What is the largest desert in the world?",
    answer: [
      {text:"Gobi Desert", correct: false},
      {text:"Sahara Desert", correct: true},
      {text:"Mojave Desert", correct: false},
      {text:"Atacama Desert", correct: false}
    ]
  },{
    question: "What is the highest mountain in the world?",
    answer: [
      {text:"Mount Everest", correct: true},
      {text:"K2", correct: false},
      {text:"Kangchenjunga", correct: false},
      {text:"Lhotse", correct: false}
    ]
  }
];

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = 'Next'
  showQuestion();
}

function showQuestion(){
  resetState();
  let currentquestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerText = questionNo + ". " + currentquestion.question;

  currentquestion.answer.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    answerButtons.appendChild(button);
    if(answer.correct){
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click',selectAnswer)
  });
}

function resetState(){
  nextButton.style.display = "none";
  while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e){
  const selectedButton = e.target;
  const correctAnswer = selectedButton.dataset.correct=== "true";
  if(correctAnswer){
    selectedButton.classList.add("correct");
    score++;
  }else{
    selectedButton.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach(button =>{
    if(button.dataset.correct === "true"){
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";

}

nextButton.addEventListener('click',() =>{
  if(currentQuestionIndex < questions.length){
    handleNextButton();
  }else{
    startQuiz();
  }
})

function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestion()
  } else{
    showScore();
  }
}

function showScore(){
  resetState();
  questionElement.innerHTML = `You Scored ${score} out of ${questions.length}`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

startQuiz();