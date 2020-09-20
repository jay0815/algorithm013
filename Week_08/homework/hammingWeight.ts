export default {
  // 思路：
  // 将number 转成 2进制表的字符串
  // 统计每一位 值为 ”1“ 的字符串
  toString: function(n: number) {
    // prepear
    let count = 0;
    // transform
    const s = n.toString(2);
    // loop & count
    for(let i = 0; i < s.length; i++) {
        s[i] === '1' && count++;
    }
    // get result
    return count;
  },
  // 思路：
  // 按位比较，当前位 同为 1则 计数+1
  // 同为1 使用 &（与）进行快速判断
  maskCount: function(n: number) {
    // prepear
    let count = 0;
    // init mask code
    let mask = 1; // 0b0001
    // loop & count
    // 最大位数 32
    for (let i = 0; i < 32; i++) {
      // 按位比较
      // 当 前位置 与 后为0，则不计数，与后为 则加1
      if((mask & n) !== 0) {
        count++ 
      };
      // 比较下一位
      mask <<= 1;
    }
    // get result
    return count;
  },
  // 思路：
  // 使用 n & (n-1) 技巧，每次消除二进制数中从右起遇到的第一个 1
  // 同为1 使用 &（与）进行快速判断
  quickAnd: function(n: number) {
    // prepear
    let count = 0;
    // loop & count
    // 当存在 1 时， n 必不为0
    // 当 1全部消除时，n会归 0
    while (n !== 0) {
      count++;
      // 消除 从右起遇到的第一个1 并 更新 n
      n &= (n - 1);
    }
    return count;
  }
}