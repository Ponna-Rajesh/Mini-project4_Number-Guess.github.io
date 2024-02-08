let randomNumber = parseInt(Math.random()*100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guess');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.info');

const p = document.createElement('p');


let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt( userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please Enter a valid Number')
    }else if(guess < 1 ){
        alert('Please Enter a Number More than 1')
    }else if (guess > 100){
        alert('Please enter a Number less than 100')
    }else{
        prevGuess.push(guess);
        if(numGuess >= 11){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was: ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
  if(guess === randomNumber){
    displayMessage(`You guessed it Right`)
    endGame()
  }else if (guess < randomNumber){
    displayMessage(`Number is TOO low`)

  }else if (guess > randomNumber){
    displayMessage(`Number is TOO High`)
  }
}

function displayGuess(guess){
    userInput.value = '';                                   //! when number is enter in input after submit the number in input will goes away
    guessSlot.innerHTML += `${guess} `
    numGuess++;
    remaining.innerHTML =`${12 - numGuess}`
}


function displayMessage(message){
    lowOrHi.innerHTML = `" ${message} "`
}

function endGame(){
    userInput.value ='';
    userInput.setAttribute('disabled', '');
    p.classList.add('button') //guessSubmit
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame()
}

function newGame(){
    const newGameBtn = document.querySelector("#newGame")
    newGameBtn.addEventListener('click',function(e){
        randomNumber = parseInt(Math.random()*100 + 1);
        numGuess = 1
        prevGuess =[];
        guessSlot.innerHTML ='';
        remaining.innerHTML =`${12 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p)
        playGame = true;
    })
   

}





