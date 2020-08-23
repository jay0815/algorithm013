export default {
  dp: function (board: string[][], click: [number, number]) {

    const [row, col] = click;

    const around = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 1], [1, 0]];

    const isSafe = (r: number, c: number) => r >= 0 && r < board.length && c >= 0 && c < board[0].length;

    const aroundHasBang = (r: number, c: number) => {
      let count = 0;
      for (let [x, y] of around) {
        if (isSafe(r + x, c + y)) {
          if (board[r + x][c + y] === 'M') {
            count++;
          }
        }
      }
      return count;
    }

    const findBang = (r: number, c: number) => {
      if (isSafe(r, c)) {
        if (board[r][c] === 'M') {
          board[r][c] = 'X';
        } else if (board[r][c] === 'E') {
          const number = aroundHasBang(r, c);
          if (number > 0) {
            board[r][c] = number + '';
          } else {
            board[r][c] = 'B';
            for (let [x, y] of around) {
              findBang(r + x, c + y);
            }
          }
        }
      }
    }

    findBang(row, col);

    return board;
  }
}