export default {
  loop: function(s: string, k: number) {
    let point = 0;
    let str = '';
    const { length } = s;
    const lastIndex = length  - 1;
    while (point < length) {
      // 剩余长度是否大于k
      const isLess = lastIndex - point >= k;
      // 更新 索引起始点
      // 如果剩余长度充足，无脑累加
      // 否则直接置为 s 的末端
      const index = isLess ? k + point - 1 : lastIndex;
      // 从后向前 累加
      // 否则 str 的表达式 需要写成 str = s[i] + str      
      for (let i = index; i >= point; i--) {
        str += s[i];
      }
      // 更新 无需翻转的 索引起点
      // 起点位置应为 最后一个翻转数据的 下一位
      point = index + 1;
      // 累加字符串的末端
      const range = lastIndex - point >= k ? point + k - 1 : lastIndex;
      for (let i = point; i <= range; i++) {
        str += s[i];
      }
      point += k;
    }
    return str
  }
}