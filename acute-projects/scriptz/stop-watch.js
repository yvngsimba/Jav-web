let seconds = 0;
let minutes = 0;
let hours = 0;
let timerRunning = false;
let timerInterval;


const label = document.querySelector('p');



function startTimer() {
  
  if (!timerRunning) {
    timerInterval = setInterval(updateTimer, 1000);
    timerRunning = true;
  }
}

function stopTimer() {
  clearInterval(timerInterval);
  timerRunning = false;
}

function resetTimer() {
  clearInterval(timerInterval);
  timerRunning = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  label.innerHTML = `${hours}:${minutes}:${seconds}` 
}

function updateTimer() {
  seconds++;
  
  if (seconds === 60) {
      seconds = 0;
      minutes++;
  } else if (minutes === 60) {
      minutes = 0;
      hours++;
  }

  label.innerHTML = `${hours}:${minutes}:${seconds}`
}

document.querySelector('.js-start')
  .addEventListener('click',() => {
    startTimer();
});

document.querySelector('.js-stop')
  .addEventListener('click',() => {
    stopTimer();
});

document.querySelector('.js-reset')
  .addEventListener('click',() => {
    resetTimer();
});
