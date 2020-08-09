import { TreeNode, BinaryTree } from './Tree';

export class BinarySearchTree extends BinaryTree {

    constructor(){
      super();
    }

    search(value: number) {
      return this.searchNode(this.root, value);
    }

    // binary search
    searchNode(root: TreeNode, value: number): TreeNode {
      // if trees is empty return null
      if(root === null) {
        return null;
      }else if(value < root.val) {
        // search into left tree node
        return this.searchNode(root.left, value);
      }else if (value > root.val) {
        // search into right tree node
        return this.searchNode(root.right, value);
      }else {
        // value === root.val
        return root;
      }
    }
}
