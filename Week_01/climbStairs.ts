export default {
  DP: function (n: number) {
    if(n <= 2) {
        return n
    }
    let f1 = 1, f2 = 2, f3 = 3;
    let i = 3;
    while(i < n+1) {
      // 基础规律： n(i) = n(i-1) + n(n - 2); n >= 3
      f3 = f1 + f2;
      f1 = f2;
      f2 = f3;
      i++;
    }
    return f3;
  },
  Fibonacci: function (n: number) {
    const sqrt5 = Math.sqrt(5);
    // Fibonacci 通项公式 ( ((1 + √5)/2)^(n+1) - ((1 - √5)/2)^(n + 1) ) / (√5)
    return (Math.pow((1 + sqrt5) / 2, n + 1) - Math.pow((1 - sqrt5) / 2, n + 1)) / sqrt5
  }
}
