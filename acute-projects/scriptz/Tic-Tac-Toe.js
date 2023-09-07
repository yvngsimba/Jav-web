let currentPlayer = 'X';
let board = 
[
  ["","",""],
  ["","",""],
  ["","",""]
];
let gameWon = false;
let gameActive = true;


function makeMove(row, col) {

  if(board[row][col] === '' && gameActive) {
    const button = document.querySelector(`.cell-${row}-${col}`);
    button.innerHTML = currentPlayer;
    board[row][col] = currentPlayer;

    if (endGame(row, col)) {
      displayWinMessage(currentPlayer)
      gameActive = false;
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; 
    }
    return 
  }
}

function endGame(row, col){
  const currentPlayerSymbol = board[row][col];

  if (board[row].every(cell => cell === currentPlayerSymbol)) {
    return true;
  }

  if (board.every(row => row[col] === currentPlayerSymbol)) {
    return true;
  }

  if (row === col || row + col === 2) {
    const mainDiagonal = board.every((row, index) => row[index] === currentPlayerSymbol);
    const antiDiagonal = board.every((row, index) => row[2 - index] === currentPlayerSymbol);
    return mainDiagonal || antiDiagonal;
  }
  return false
}

function displayWinMessage(currentPlayer) {
  alert(`${currentPlayer} wins!`);
}

const resetButton = document.querySelector('.js-reset')

resetButton.addEventListener('click', () => {

  let board = 
  [
    ["","",""],
    ["","",""],
    ["","",""]
  ];

  let gameWon = false;
  let gameActive = true;

  currentPlayer = 'X';

  const buttons = document.querySelectorAll('button');
  buttons.forEach((button) => {
    button.innerHTML = '';
  });
})


