let seconds = 0;
let minutes = 0;
let hours = 0;

const label = document.querySelector('p');

label.innerHTML = `${hours}:${minutes}:${seconds}`

function timeTracker() {
 
  
  setInterval(() => {
    seconds++;
  }, 1000);
}

document.querySelector('.js-start')
  .addEventListener('click',() => {
    setInterval(() => {
      seconds++;
    }, 1000);
});

console.log(seconds);