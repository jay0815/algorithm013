export default {
  // 思路：
  // 设 定义 dp[i][j] 为最小步数
  // 依据题意，dp 方程 为 Min(dp[i-1][j], dp[i][j-1]) + grid[i][j]
  // 因为 当前位置只能由 上方 或者 左方 转移过去
  // 当 i or j 为 0时，且不同时为 0. i - 1 或者 j - 1 会变成负数，不存在于 范围内，所以 最小步数 只能老实向下 或着 向右移动得到
  dp: function(grid: number[][]) {
    const row = grid.length;
    const column = grid[0].length;
    // 定义dp 方程为 dp[i][j] = Min(dp[i-1][j], dp[i][j-1]) + grid[i][j]
    const dp = Array.from({ length: row }, () => new Array(column).fill(Number.MAX_VALUE))
    for (let r = 0; r < row; r++) {
      for (let c = 0; c < column; c++) {
        if (r !== 0 && c !== 0) {
          dp[r][c] = Math.min(dp[r - 1][c], dp[r][c - 1]) + grid[r][c]
        } else if (r === 0 && c !== 0) {
          //  dp[r-1][c] 是不存在 于 grid 中的，所以 只能选择 dp[r][c-1]
          dp[r][c] = dp[r][c - 1] + grid[r][c]
        } else if (c === 0 && r !== 0) {
          //  dp[r][c-1] 是不存在 于 grid 中的，所以 只能选择 dp[r-1][c]
          dp[r][c] = dp[r - 1][c] + grid[r][c]
        } else if (r === 0 && c === 0) {
          // 第一步
          dp[r][c] = grid[r][c]
        }
      }
    }
    return dp[row - 1][column - 1];
  }
}