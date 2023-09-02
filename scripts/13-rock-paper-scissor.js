let score = JSON.parse(localStorage.getItem('score')) || {
  Wins: 0, 
  Losses: 0,
  Ties: 0
}; 

function updateScoreElement() {
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.Wins}, Losses: ${score.Losses}, Ties:${score.Ties}`;
}

updateScoreElement();

let isAutoPlaying = false;
let intervaleId;


function autoPlay() {
  if (!isAutoPlaying) {
    intervaleId = setInterval(function(){
      const playerMove = pickComputerMove();

      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;
    document.querySelector('.js-auto-button').innerHTML = 'Stop Playing';
  
  } else {
      clearInterval(intervaleId);
      isAutoPlaying = false;
      document.querySelector('.js-auto-button').innerHTML = 'Auto Play'; 
  }
} 
  
document.querySelector('.js-rock-button')
  .addEventListener('click',() => {
    playGame('rock');
});

document.querySelector('.js-paper-button')
  .addEventListener('click',() => {
    playGame('paper');
});
    
document.querySelector('.js-scissors-button')
  .addEventListener('click', () => {
    playGame('scissors');
});

document.querySelector('.js-auto-button')
  .addEventListener('click', () => {
    autoPlay();
});

document.querySelector('.js-reset-button')
  .addEventListener('click', () => {
    score.Wins = 0,
    score.Losses = 0, 
    score.Ties = 0;
    localStorage.removeItem('score'); 
    updateScoreElement();
  });

document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r') {
    playGame('rock');
  } else if (event.key === 'p') {
      playGame('paper'); 
  } else if (event.key === 's') {
      playGame('scissors');
  } else if (event.key === 'a') {
    autoPlay();
  }
});

function playGame(playerMove) {
let result = '';
const computerMove = pickComputerMove();

if (playerMove === 'scissors') {
  if (computerMove === 'rock') {
    result = 'Lose';
  } else if (computerMove === 'paper') {
    result = 'Win';
  } else if (computerMove === 'scissors') {
    result = 'Tie';
  }

} else if (playerMove === 'paper') {
  if (computerMove === 'rock') {
    result = 'Win';
  } else if (computerMove === 'paper') {
    result = 'Tie';
  } else if (computerMove === 'scissors') {
    result = 'Lose';
  }
  
} else if (playerMove === 'rock'){
    if (computerMove === 'rock') {
    result = 'Tie';
  } else if (computerMove === 'paper') {
    result = 'Lose';
  } else if (computerMove === 'scissors') {
    result = 'Win';
  }
}


if (result === 'Win') {
  score.Wins++;
} else if (result === 'Lose') {
  score.Losses++;
} else if (result === 'Tie') {
  score.Ties++;
}

localStorage.setItem('score',JSON.stringify(score));

updateScoreElement()

document.querySelector('.js-result').innerHTML = result;

  document.querySelector('.js-moves').innerHTML = 
  `You 
  <img src="/Images/${playerMove}-emoji.png"> 
  <img src="/Images/${computerMove}-emoji.png"> 
  Computer`

  updateScoreElement()          
}

function pickComputerMove() {
const randomNumber = Math.random();

let computerMove = "";

if (randomNumber >= 0 && randomNumber < 1 / 3) {
  computerMove = "rock";
} else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
  computerMove = "paper";
} else if (randomNumber >= 2 / 3 && randomNumber < 1) {
  computerMove = "scissors";
} 
return computerMove;
}

