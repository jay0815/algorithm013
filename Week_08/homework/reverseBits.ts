export default {
  // 思路：
  // 十进制 转 二进制 转 字符串
  // 位数不足 32 时， 补 32 - n 个 0至 字符串首位
  // 字符串颠倒
  // 字符串转 二进制
  toString: function(n: number) {
    let temp = n.toString(2);
    if (temp.length < 32) {
      let zero = new Array(32 - temp.length).fill(0).join('');
      temp = zero + temp;
    }
    return parseInt(temp.split('').reverse().join(''), 2);
  },
  // 思路：
  // 通过 n & 1 技巧 取当前最右侧位的数值
  // 每次加 新的位数进来时，需要向左移动
  // n 则每次 移除 最右侧位的数值
  // 当 累加到 1为最左侧的数值时，因为 js本身只支持有符号整数
  // 所以会溢出，最高位的1 会被当成符号位，导致 值变成负数
  // 所以需要用 无符号 右移 处理
  bits: function(n: number) {
    let ans = 0;
    for (let i = 0; i < 32; i++) {
      ans = (ans << 1) + (n & 1);
      n >>= 1;
    }
    // >>> 0 让最高位为 0，表示整数
    // js 是不支持 无符号整数的 
    // 当1 位于（32位）最左侧时，会因为 最高位 即是 符号位 又是 数值位
    // 1 << 31 会变成负数
    // 所以需要 无符号右移 去除 符号对数值的影响
    return ans >>> 0
  }
}