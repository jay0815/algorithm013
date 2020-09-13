export default class UnionFind {
  count: number;
  parent: number[];

  constructor(n: number) {
    this.count = n;
    this.parent = [];
    for (let i = 0; i < n; i++) {
      this.parent.push(i);
    }
  }
  // 找到 x元素所在 的集合的代表
  find(p: number) {
    let root = p;
    while (root !== this.parent[root]) {
      root = this.parent[root];
    }
    // 压缩路径
    while (this.parent[p] !== p) {
      let x = p;
      p = this.parent[p];
      this.parent[x] = root;
    }
    return root
  }
  // 合并 p元素 和 y元素所在的集合
  // 如果 p、y 所在集合相交，则不合并
  // 反之则合并集合
  union(p: number, q: number) {
    const rootP = this.find(p);
    const rootQ = this.find(q);
    if (rootP === rootQ) {
      return
    }
    this.parent[rootP] = rootQ;
    this.count--;
  }
}