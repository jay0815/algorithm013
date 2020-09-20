export default {
  // 思路：
  // 使用 辗转相除法 检测当前值 是否是 2 的最小公倍数
  // 需要注意不是 2的幂次方无法得到 0
  euclideanAlgorithm: function(n: number) {
    if(n === 0) {
      return false
    }else {
      while(n%2 === 0) {
        n /= 2;
      }
      return n === 1
    }
  },
  // 思路：
  // 当 n 是 2的幂次方时
  // 恒有 n & (n - 1) == 0，这是因为：
  // n二进制最高位为 1，其余所有位为 0；
  // n−1 二进制最高位为 0，其余所有位为 1；
  bits: function(n: number) {
    return n > 0 && (n & (n-1)) === 0
  }
}