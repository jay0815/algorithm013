// https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/submissions/

export default {
  recursion: function minDepth(root) {
    if (root == null) return 0;
    let left = minDepth(root.left);
    let right = minDepth(root.right);
    return (root.left == null || root.right == null ? left + right : Math.min(left, right)) + 1;
  }
}