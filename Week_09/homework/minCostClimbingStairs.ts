export default {
  // 思路：
  // 因为每次爬楼梯可以选择 爬一次 或者 爬两次
  // 状态转移方程 -> f(i) = cost[i] + min(f(i-1), f(i-2))
  dp: function (cost: number[]) {
    const dp = [];

    const { length } = cost;

    dp[0] = cost[0];

    dp[1] = cost[1];

    for (let i = 2; i < length; i++) {
      dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]);
    }
    return dp[length - 1] > dp[length - 2] ? dp[length - 2] : dp[length - 1];
  }
}