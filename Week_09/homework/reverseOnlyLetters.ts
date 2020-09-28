export default {
  doublePoint: function (S: string) {
    if (!S) {
      return S
    }
    let i = 0, j = S.length - 1;
    let left = '', right = '';
    const isLetter = (s) => {
      // 统一转为 小写字母
      const code = s.codePointAt() | 32;
      return code >= 97 && code <= 122;
    }
    while (i < j) {
      // 指针对应位置都为 字母
      if (isLetter(S[i]) && isLetter(S[j])) {
        left += S[j--];
        right = S[i++] + right;
      }
      // 确保两个端点都是 字母，不是字母的正常累加
      while (!isLetter(S[i]) && i < j) {
        left += S[i++];
      }
      while (!isLetter(S[j]) && j > i) {
        right = S[j--] + right;
      }
    }
    // 处理字符串长短为基数时，字符串中间位置无法取到的问题
    if (left.length + right.length < S.length) {
      return left + S[i] + right;
    }
    return left + right;
  }
}