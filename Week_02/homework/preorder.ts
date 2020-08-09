import { TreeNode } from '../BinaryTree/Tree';

export default {
  // normal way
  recursion: function(root: TreeNode) {
    const path = [];
    const preorder = (r: TreeNode) => {
        if(r) {
          path.push(r.val)
          preorder(r.left);
          preorder(r.right)
        }
    }
    preorder(root);
    return path;
  },
  iteration: function(root: TreeNode) {
    const path = [];

    return path;
  }
}
