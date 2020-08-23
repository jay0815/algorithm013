export default {
  greedy: function (g:  number[], s: number[]) {
    const { length } = g;
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    while (g.length && s.length) {
      if (g[0] <= s[0]) {
        g.shift()
      }
      s.shift();
    }
    return length - g.length;
  }
}