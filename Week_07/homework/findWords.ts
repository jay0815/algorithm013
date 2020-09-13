export default {
  trie: function (board: string[][], words: string[]) {
    const result: string[] = [];
    // 定义移动方向
    const neighbor = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1]
    ]
    // build trie
    const trie = new Trie();
    for (let word of words) {
      trie.insert(word);
    }
    // get search range
    const row = board.length;
    const colum = board[0].length;
    // dfs
    const set = new Set();
    const dfs = (r: number, c: number, curWord: string) => {
      // 判断是否在 board 范围内 及 是否是已使用的字符 
      if (r < 0 || r >= row || c < 0 || c >= colum || board[r][c] === null) {
        return
      }
      // 记录当前位置的原始值
      const local = board[r][c];
      // 获取最新的待匹配 字符串
      const current = curWord + local;
      // 对当前位置进行特殊标识
      board[r][c] = null;

      if (trie.search(current)) {
        // 去重
        if (!set.has(current)) {
          result.push(current);
          set.add(current);
        }
      }
      if (trie.startsWith(current)) {
        for (let [dx, dy] of neighbor) {
          dfs(r + dx, c + dy, current)
        }
      }
      // 还原当前位置
      board[r][c] = local
      return
    }
    // recursion
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < colum; j++) {
        dfs(i, j, '');
      }
    }

    return result;
  }
}