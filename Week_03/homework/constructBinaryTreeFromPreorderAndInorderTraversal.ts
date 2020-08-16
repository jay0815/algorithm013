import { TreeNode } from './../../Week_02/BinaryTree/Tree';
export default {
  /**
    * @param preorder: [root, leftchilds, rightchilds]
    * @param inorder: [leftchilds, root, rightchilds]
   */
  recursion: function(preorder: number[], inorder: number[]) {
    // 思路：
    // 根据 前序遍历和中序遍历的特性 的特点
    // 前序遍历中的第一个节点就是根节点
    // inorder 中 根节点左侧的 数据 就是 leftchilds,根节点右侧的 数据 就是 rightchilds
    // 得出当前节点的通项表达: fn(startIndex, endIndex, valueStartIndex, valueEndIndex) = 
    // root.val = preorder[index],
    // root.left = fn( Left-Start-Index,  Left-End-Index, Left-Value-Start-Index, Left-Value-End-Index)
    // root.left = fn( Right-Start-Index,  Right-End-Index, Right-Value-Start-Index, Right-Value-End-Index)
    // 当起始 index 大于 结束 index时，说明 以 对 preorder中每个点进行了 遍历，此时返回 无节点 null 即可

    const map = new Map();

    inorder.forEach((i, index) => {
      map.set(i, index);
    })

    const build = (preOrderLeft: number, preOrderRight: number, inOrderLeft: number, inOrderRight: number) => {

      if(preOrderLeft > preOrderRight) {
        return null;
      }

      const rootIndex = preOrderLeft;
      // 找到 当前节点的 中序遍历时的位置，确定 当前节点的 leftchild 和 rightchild
      const spliteIndex = map.get(preorder[rootIndex]);
      // leftchilds 的个数 = 中序遍历中当前节点的位置 - 当前 节点中序遍历 的 起始位置 -> 当前节点 所有左子树的范围
      const leftTreeCount = spliteIndex - inOrderLeft;

      const root = new TreeNode(preorder[rootIndex]);

      root.left = build(preOrderLeft + 1, preOrderLeft + leftTreeCount, inOrderLeft, spliteIndex - 1);

      root.right = build(preOrderLeft + leftTreeCount + 1, preOrderRight, spliteIndex + 1, inOrderRight);

      return root;

    }

    const length = preorder.length;

    return build(0, length - 1, 0, length - 1)
  }

}