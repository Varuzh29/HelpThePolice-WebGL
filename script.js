let board = document.querySelector('.board');
let squares = document.querySelectorAll('.square');
let xIsNext = true;

board.addEventListener('click', function(event) {
  let square = event.target;
  if (square.textContent === '') {
    if (xIsNext) {
      square.textContent = 'X';
    } else {
      square.textContent = 'O';
    }
    xIsNext = !xIsNext;
  }
});
