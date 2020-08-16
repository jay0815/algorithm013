// https://leetcode-cn.com/problems/validate-binary-search-tree/
export default {
  recursion: function isValidBST (root) {
    const list = [];
    let result = true;
    const inorder = (root) => {
      if (root) {
        inorder(root.left);
        if (list.length === 0 || list[list.length - 1] < root.val) {
          list.push(root.val);
        } else {
          result = false;
          return;
        }
        inorder(root.right);
      }
    }
    inorder(root)
    return result;
  }
}