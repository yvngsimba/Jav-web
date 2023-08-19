let calculation = localStorage.getItem('newCalculation') || '';
let display = document.querySelector('p');

displayLabel()
function displayLabel(){
  display.innerHTML = `${calculation}`
}
function updateCalculation(value) {
  calculation += value;
  displayLabel()
  localStorage.setItem('newCalculation', calculation);
}