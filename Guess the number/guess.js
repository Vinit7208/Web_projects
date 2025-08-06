let randomNumber = parseInt(Math.random()*100 + 1)

const submit = document.getElementById('subt')
const userInput = document.getElementById('guessField')
const guessesSlot = document.querySelector('.guesses')
const remaning = document.querySelector('.lastResult')
const startOver = document.querySelector('.resultParas')
const lowOrHi = document.querySelector('.lowOrHi')


const p =document.createElement('p')

let prevguess = []
let max = 1

let playGame = true;

if(playGame){
  submit.addEventListener('click', function(e){
    e.preventDefault()
    const guess = parseInt(userInput.value)
    console.log(guess)
    validateGuess(guess)
  })
}

function validateGuess(guesses){
  if(isNaN(guesses) || guesses < 1){
    displayGuess('Please enter a valid number')
  } else if (guesses > 100){
    displayGuess('Please enter a number between 1 and 100')
  } else {
    prevguess.push(guesses)
    if(max === 10){
      displayGuess(guesses)
      displayGuess(`Game Over. Randoom number was ${randomNumber}`)
      endGame()
    } else {
      displayGuess(guesses)
      checkGuess(guesses)
    }
  }
}

function checkGuess(guesses){
  if(guesses === randomNumber){
    displayMessage(`You won! The number was ${randomNumber}`)
    endGame();
  } else if(guesses > randomNumber){
    displayMessage('Too high')
  } else if (guesses < randomNumber){{
    displayMessage('Too low')
  }
  }
}

function displayGuess(guesses){
  userInput.value = ''
  guessesSlot.innerHTML += `${ guesses}  `
  max++;
  remaning.innerHTML = `${11 - max}`
}

function displayMessage(displayMessage){
  lowOrHi.innerHTML = `<h2>${displayMessage}</h2>`
}

function newGame(){
  const newGameButton = document.querySelector('.newgame')
  newGameButton.addEventListener('click', function(e){
    randomNumber = parseInt(Math.random()*100 + 1);
    prevguess = []
    max = 1
    guessesSlot.innerHTML = ''
    remaning.innerHTML = `${11 - max}`;
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)


    playGame = true
  })
} 

function endGame(){
  userInput.value = ''
  userInput.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML = '<h2 id="newgame">start new game</h2>';
  startOver.appendChild(p)
  playGame = false
  newGame()

}