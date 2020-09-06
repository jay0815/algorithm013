export default {
  // 思路：
  // 暴力破解
  // 通过深度优先搜索，借助回溯 进行统计
  // 可以计数的标识 当前 没有更多 的数字 字符串 可以用于解码
  // 边界
  // 因为存在 如 z 一样 单个字母 表示 两个 字符串
  // 所以 当 前字符串 为 1 或者 2 时，最会会有两种 情况分支的
  dfs: function numDecodings(s: string) {
    let count = 0;

    const dfs = (str) => {

      if (str.length === 0) {
        count++
        return 
      }

      let l = +str[0];

      if (l === 0) {
        return
      }

      if (l === 0) {
        return
      } else if (l > 2) {
        dfs(str.slice(1))
      } else {
        dfs(str.slice(1))
        if ((l === 2 && str[1] <= 6 && str[1] >= 0) || (l === 1 && str.length >= 2)) {
          dfs(str.slice(2))
        }
      }

    }

    dfs(s)

    return count
  },
  // 思路：
  // 动态规划
  // 每个字符都有2中状态的 转移方程 dp[i] = dp[i-1] + dp[i-2]
  // 特殊分支
  // 当 dp[i-1] > 2 || dp[i-1] = 2 && dp[i-2] > 6 时，是不能 进行 编码的
  dp: function (s: string) {
    if (s.length == 0 || s[0] == '0') {
      return 0;
    }

    const dp = [1, 1];

    let num;

    for (let i = 1; i < s.length; i++) {
      if (s[i - 1] != "0") {
        num = s[i - 1] + s[i] || 0;
        if (num >= 1 && num <= 26) {
          dp[i + 1] = s[i] != "0" ? dp[i - 1] + dp[i] : dp[i - 1];
        } else if (s[i] != "0") {
          dp[i + 1] = dp[i];
        } else {
          return 0;
        }
      } else if (s[i] != "0") {
        dp[i + 1] = dp[i];
      } else {
        return 0;
      }
    }
    return dp[s.length];

  }
}

