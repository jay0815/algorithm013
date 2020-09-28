export default {
  hash: function (s: string) {
    const map = new Map();
    for (let i of s) {
      map.set(i, (map.get(i) || 0) + 1)
    };
    for (let index = 0; index < s.length; index++) {
      if (map.get(s[index]) === 1) {
        return index;
      }
    }
    return - 1;
  }
}