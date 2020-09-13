import UnionFind from "./UnionFind";

export default {
  unionFind: function (M: number[][]) {
    const row = M.length;
    const unionFindSet = new UnionFind(row);

    for(let i = 0; i < row; i++) {
      for (let j = 0; j < row; j++) {
        if(M[i][j] === 1) {
          unionFindSet.union(i, j)
        }
      }
    }

    return unionFindSet.count;
  },
  dfs: function(M: number[][]) {
    // 染色法
    let friendCrile = 0;
    const visited = [];
    const row = M.length;

    const dfs = (r: number) => {
      for(let c = 0; c < row; c++) {
        // r 与 c 是朋友
        // 且 c 没有被染色过
        if (M[r][c] === 1 && !visited[c]) {
          visited[c] = true;
          // 去找 c 的朋友
          // 因为 r c 是朋友 有交集
          // 所以 c 的朋友也是 r 的朋友
          dfs(c)
        }
      }
    }


    for (let i = 0; i < row; i++) {
      // 如果当前元素被标记过了
      // 则一定进行过 递归 染色，
      // 不用再进行递归
      // 剪枝 
      if (!visited[i]) {
        dfs(i);
        friendCrile++;
      }
    }

    return friendCrile
  }
}