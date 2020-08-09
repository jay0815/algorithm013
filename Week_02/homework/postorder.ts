import { TreeNode } from '../BinaryTree/Tree';

export default {
  // normal way
  recursion: function(root: TreeNode) {
    const path = [];
    const postorder = (r: TreeNode) => {
        if(r) {
          postorder(r.left);
          postorder(r.right);
          path.push(r.val)
        }
    }
    postorder(root);
    return path;
  },
  iteration: function(root: TreeNode) {
    const path = [];

    return path;
  }
}
