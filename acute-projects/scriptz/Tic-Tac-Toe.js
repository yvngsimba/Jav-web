let currentPlayer = 'X';
let board = 
[
  ["","",""],
  ["","",""],
  ["","",""]
];
let gameWon = false;
let gameActive = false;

function makeMove(row, col) {

  if(board[row][col] === '') {
    board[row][col] === currentPlayer;

    const button = document.querySelector(`.cell-${row}-${col}`);
    button.innerHTML = currentPlayer;

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; 
    endGame(row, col);
  }
}

function checkRow(row) {
  return board[row].every(cell => cell === currentPlayer);
}

function checkCol(col) {
  return board[col].every(row => row[col] === currentPlayer);
}

function checkDiagonal(row, col) {
  if (row === col || row + col === 2) {
    const mainDiagonal = board.every((row, index) => row[index] === currentPlayer);
    const antiDiagonal = board.every((row, index) => row[2 - index] === currentPlayer);
  }
  return false
}

function endGame(){
  if (checkRow(row) || checkCol(col) || checkDiagonal(row, col)) {
    alert(`${currentPlayer} wins!`)
    gameWon = true;
  }
}

makeMove(0,0);

makeMove(0,0);