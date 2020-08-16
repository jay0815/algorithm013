import { TreeNode } from './../../Week_02/BinaryTree/Tree';
// https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/submissions/

export default {
  recursion: function maxDepth(root: TreeNode) {
    if(root === null) return 0
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1 
  }
}