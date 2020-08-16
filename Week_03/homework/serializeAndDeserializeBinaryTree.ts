import { TreeNode } from './../../Week_02/BinaryTree/Tree';
// https://leetcode-cn.com/problems/serialize-and-deserialize-binary-tree/submissions/
export default {
  iteration: function (root: TreeNode) {
    var serialize = function (root) {
      const result = [];
      const stack = [root];
      while (stack.length > 0) {
        const r = stack.shift();
        if (typeof r !== 'undefined') {
          if (r === null) {
            result.push(r);
          } else {
            result.push(r.val);
            stack.push(r.left);
            stack.push(r.right);
          }
        }
      }
      return result.toString();
    };

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    var deserialize = function (data: string) {
      function TreeNode(val) {
        this.val = val;
        this.left = this.right = null;
      }

      const getParentInfo = (i) => {
        return {
          site: Math.floor((i - 1) / 2),
          isLeft: (i - 1) % 2 === 0
        }
      }
      const result = data.split(',').reduce((p, l, index) => {
        let { site, isLeft } = getParentInfo(index);
        const node = l !== '' ? new TreeNode(l) : null;
        if (index !== 0) {
          while (p[site] === null && site < data.length) {
            site += 1
          }
          if (p[site]) {
            if (isLeft) {
              p[site].left = node;
            } else {
              p[site].right = node;
            }
          }
        }
        if (node !== null) {
          p.push(node);
        }
        return p
      }, [])
      return result[0] || null
    };
    return deserialize(serialize(root))
  }
}