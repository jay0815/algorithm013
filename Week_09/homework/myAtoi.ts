export default {
  loop: function(str: string) {
    let result, hasSign = false, sign = 1;
    for (let i of str) {
      if (i.charCodeAt(0) >= 48 && i.charCodeAt(0) <= 57) {
        result = (result || 0) * 10 + Number(i);
      } else {
        if (i === '-' || i === '+') {
          if (typeof result !== 'undefined') {
            break;
          } if (hasSign) {
            result = 0, sign = 1;
            break;
          } else {
            sign = i === '-' ? -1 : 1;
            hasSign = true;
          }
        } else if (i === ' ') {
          if (typeof result !== 'undefined') {
            break;
          }
          if (hasSign && typeof result === 'undefined') {
            sign = 1;
            break;
          }
        } else {
          break;
        }
        continue;
      }
    }
    result = (result || 0) * sign;
    if (result >= 2147483647) {
      result = 2147483647
    }
    if (result <= -2147483648) {
      result = -2147483648
    }
    return result
  }
}