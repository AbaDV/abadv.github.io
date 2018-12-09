console.log('lesson 5 Задание 1-2');

let chessBoard = document.querySelector('.board');

const chars = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', ''];
const numbers = ['', 8, 7, 6, 5, 4, 3, 2, 1, ''];
const whitePawn = '&#9817;';
const blackPawn = '&#9823;';
const whiteFigures = ['', '&#9814;', '&#9816;', '&#9815;', '&#9813;', '&#9812;', '&#9815;', '&#9816;', '&#9814;', ''];
const blackFigures = ['', '&#9820;', '&#9822;', '&#9821;', '&#9818;', '&#9819;', '&#9821;', '&#9822;', '&#9820;', ''];

for (let row = 0; row <= 9; row++) {
  for (let col = 0; col <= 9; col++) {

    let cell = document.createElement('div');
    chessBoard.appendChild(cell);
    cell.classList.add('cell');

    // 1. Пропустить пустые угловые ячейки
    //for row = 0, 9 {col = 0, 9}

    if ((row == 0 || col == 0) && (row == 9 || col == 9)) {
      continue;
    }

    // 3. Расставить буквы:
    // for row = 0, 9, col >= 1 && col <= 8
    if (row == 0 || row == 9) {
      cell.innerHTML = chars[col];
    }

    // 4. Расставить цифры:
    // for row >= 1 && row <= 8, col = 0, 9

    if (col == 0 || col == 9) {
      cell.innerHTML = numbers[row];
    }

    if (col >= 1 && col <= 8) {
      // 2. Закрасить определенные ячейки чёрным цветом
      //for row = 1, 3, 5, 7, col = 2, 4, 6, 8
      //for row = 2, 4, 6, 8, col = 1, 3, 5, 7

      if (row >= 1 && row <= 8) {
        if (col % 2 == 0 && row % 2 == 1) {
          cell.classList.add('cellBlack');
        }
        if (col % 2 == 1 && row % 2 == 0) {
          cell.classList.add('cellBlack');
        }
      }
      // 5.1 Расставить белые фигурки:
      //for row = 1, 2, col >= 1 && col <= 8
      if (row == 1) {
        cell.innerHTML = whiteFigures[col];
      }
      if (row == 2) {
        cell.innerHTML = whitePawn;
      }

      // 5.2 Расставить черные фигурки:
      //for row = 7, 8, col >= 1 && col <= 8
      if (row == 7) {
        cell.innerHTML = blackPawn;
      }
      if (row == 8) {
        cell.innerHTML = blackFigures[col];
      }
    }
  }
}