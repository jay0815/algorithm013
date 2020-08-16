import { TreeNode } from './../../Week_02/BinaryTree/Tree';
// https://leetcode-cn.com/problems/invert-binary-tree/

export default {
  recursion: function invertTree(root: TreeNode) {
    let temp: undefined | TreeNode;
    const invert = (r: TreeNode) => {
      if (r) {
        temp = r.left;
        r.left = r.right;
        r.right = temp;
        invert(r.left);
        invert(r.right)
      }
    }
    invert(root);
    return root
  }
}