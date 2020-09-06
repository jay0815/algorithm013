import { TreeNode } from './../../Week_02/BinaryTree/Tree';
// https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/submissions/

export default {
  dp: function minDepth(root: TreeNode) {
    if (root == null) return 0;
    let left = minDepth(root.left);
    let right = minDepth(root.right);
    // 当前节点的 左右节点 都存在，根据题意则取深度 小 的那个 
    // 当前节点的 左右节点 至多有一个存在，说明还不满足 无子节点的题意，累加深度
    // 因为 一直取的都是子节点的深度，真实深度 要加上 当前节点，所以 +1
    return (root.left == null || root.right == null ? left + right : Math.min(left, right)) + 1;
  },
  bfs: function (root: TreeNode) {
    // BFS 找到第一个满足左右子节点为 null 的就返回当前层 level
    const stack = [];
    if (root) {
      stack.push(root);
    }
    let level = 0;
    while (stack.length > 0) {
      level++;
      let temp = [];
      // 借助零时栈 进行单层遍历 方便 计数
      while (stack.length) {
        let node = stack.shift();
        if (node) {
          if (node.left === null && node.right === null) {
            return level;
          }
          temp.push(node.left, node.right)
        }
      }
      stack.push(...temp);
    }
    return level
  }
}
