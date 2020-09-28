export default {
  loop: function(s: string) {
    // 移除 s两端 空格带来的复杂逻辑
    s = s.trim();
    let str = '', words = '', isSpace = false;
    for (let i = s.length - 1; i >= 0; i--) {
      
      if (s[i] === ' ') {
        if (isSpace) {
          // 遇到连续的空格就不做处理
          continue;
        } else {
          // 遇到第一个空格 就进行 字符串拼接
          isSpace = true;
          str = str + words + s[i];
          words = '';
        }
      } else {
        words = s[i] + words;
        // 进入单词区域后，将空格标识 重置
        if (isSpace) {
          isSpace = false;
        }
      }
    }
    return str + words
  }
}