export default {
  dfs: function(grid: string[][]) {
    let count = 0;
    let row = grid.length;
    if (row === 0) {
      return 0
    }
    let column = grid[0].length;

    const dfs = (r, c) => {
      if (r < 0 || c < 0 || r >= row || c >= column || grid[r][c] === '0') {
        return;
      }
      grid[r][c] = '0';
      dfs(r - 1, c);
      dfs(r + 1, c)
      dfs(r, c - 1)
      dfs(r, c + 1)
    }

    for (let i = 0; i < row; i++) {
      for (let j = 0; j < column; j++) {
        if (grid[i][j] == '1') {
          count++;
          dfs(i, j);
        }

      }
    }
    return count
  }
}