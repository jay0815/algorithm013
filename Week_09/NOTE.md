# 总结

## 动态规划

* 不同路径 II
  * 状态转移方程 dp[i][j] = dp[i-1][j] + dp[i][j-1]
    * 走到 (i, j) 坐标的路径数量 等于 走到 (i-1, j)的数量 加上走到（i, j-1)的数量

## 字符串算法

### 实现普通暴力算法

[violence](./match/violence.ts)

### 实现 KMP

[KMP](./match/KMP.ts)

### 实现 Rabin-Karp

[Rabin-Karp](./match/RabinKarpSearch.ts)