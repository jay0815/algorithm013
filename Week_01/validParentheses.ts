export default {
  stackWay: function (s: string) {
    if (s.length % 2) {
      return false;
    }
    const bracketMap = {
      '(': ')',
      '[': ']',
      '{': '}'
    };
    const stack: string[] = [];
    let value;
    for (let i = 0; i < s.length; i++) {
      if (value = bracketMap[s[i]]) {
        stack.unshift(value);
      } else {
        if (stack.length === 0 || stack[0] !== s[i]) {
          return false
        } else {
          stack.shift();
        }
      }
    }
    return stack.length === 0
  }
}