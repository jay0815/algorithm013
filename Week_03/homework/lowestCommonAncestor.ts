import { TreeNode } from './../../Week_02/BinaryTree/Tree';
// https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/submissions/
export default {
  recursion: function (root: TreeNode, p: TreeNode, q: TreeNode) {
    let result: undefined | TreeNode;
    const dfs = (r: TreeNode, p: TreeNode, q: TreeNode): boolean => {
      // 当 r 节点不存在时 ，即探底 可 终止当次 递归 并 返回 上层递归栈
      if (r === null) {
        return false
      }
      const left = dfs(r.left, p, q);
      const right = dfs(r.right, p, q);
      // 
      if ((left && right) || ((r.val === p.val || r.val === q.val) && (left || right))) {
        result = r
      }
      // 终止条件
      // 当前 p、q 
      return left || right || (r.val === p.val) || r.val === q.val;
    }
    dfs(root, p, q)
    return result
  }
}