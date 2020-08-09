"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinaryTree = exports.TreeNode = void 0;
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
exports.TreeNode = TreeNode;
class BinaryTree {
    constructor() {
        this.root = null;
        this.orderPath = [];
    }
    // helper function
    insert(v) {
        const node = new TreeNode(v);
        if (this.root === null) {
            this.root = node;
        }
        else {
            this.insertNode(this.root, node);
        }
    }
    insertNode(root, node) {
        if (node.val < root.val) {
            if (root.left === null) {
                root.left = node;
            }
            else {
                this.insertNode(root.left, node);
            }
        }
        else {
            if (root.right === null) {
                root.right = node;
            }
            else {
                this.insertNode(root.right, node);
            }
        }
    }
    // find the min number node in tree
    // searching starts from given node
    // min number always on left side
    findMinNode(root) {
        // if left of a node is null
        // then it must be min number node
        if (root.left === null) {
            return root;
        }
        return this.findMinNode(root.left);
    }
    // removeNode with a given data
    remove(value) {
        this.root = this.removeNode(this.root, value);
    }
    // Method to remove node with a
    // given data
    // it recur over the tree to find the
    // data and removes it
    // 1.find target
    // 2.then remove node
    // 3.then link node
    removeNode(root, value) {
        // if the root is null then tree is
        // empty
        if (root === null) {
            return null;
        }
        else if (value < root.val) {
            // if data to be delete is less than
            // roots data then move to left subtree
            root.left = this.removeNode(root.left, value);
            return root;
        }
        else if (value > root.val) {
            // if data to be delete is greater than
            // roots data then move to right subtree
            root.right = this.removeNode(root.right, value);
            return root;
        }
        else {
            // root.val === value
            // replace root node with root.left or root.left
            if (root.left === null && root.right === null) {
                root = null;
                return root;
            }
            // deleting node with one children
            if (root.left === null) {
                root = root.right;
                return root;
            }
            else if (root.right === null) {
                root = root.left;
                return root;
            }
            // Deleting node with two children
            // minumum node of the rigt subtree
            // is stored in aux
            var aux = this.findMinNode(root.right);
            root.val = aux.val;
            root.right = this.removeNode(root.right, aux.val);
            return root;
        }
    }
    traverse(v) {
        console.log(v);
        this.orderPath.push(v);
    }
    // 前序 根左右
    preorder(root) {
        if (root) {
            this.traverse(root.val);
            this.preorder(root.left);
            this.preorder(root.right);
        }
    }
    // 中序 左根右
    inorder(root) {
        if (root) {
            this.inorder(root.left);
            this.traverse(root.val);
            this.inorder(root.right);
        }
    }
    // 莫里斯遍历不需要递归或者临时的栈空间就可以完成遍历，空间复杂度是常数。
    // 但是为了解决从子节点找到父节点的问题，需要临时修改树的结构，在遍历完成之后复原成原来的树结构。
    //
    // 整个遍历的过程中只需要两个指针——当前指针current和临时前驱指针preview，具体的过程如下
    //
    // 如果左子节点是空，录入当前节点，当前指针current指向右子节点
    // 如果左子节点不是空，遍历左子节点的最右侧右子节点，找到最右侧叶节点，在寻找的过程中可能出现两种情况：
    // 如果遍历到的叶节点的右子节点是空，把叶节点的右子节点指向current节点，current移向左子节点
    // 如果遍历到的叶节点的右子节点是current节点，表示原来的叶节点到current节点连接已经存在，现在遍历结束了，需要复原，置节点的右子节点为空，在录入了current节点之后，current移到自己的右子节点
    // 重复上面两步直到当前节点为空
    MorrisInorder() {
        let current = this.root;
        let preview = null;
        while (current) {
            if (current.left === null) {
                this.traverse(current.val);
                current = current.right;
            }
            else {
                preview = current.left;
                while (preview.right && preview.rigtht !== current) {
                    preview = preview.right;
                }
                if (preview.right === null) {
                    preview.right = current;
                    current = current.left;
                }
                if (preview.right === current) {
                    preview.right = null;
                    this.traverse(current.val);
                    current = current.right;
                }
            }
        }
    }
    // 后序 左右根
    postorder(root) {
        if (root) {
            this.postorder(root.left);
            this.postorder(root.right);
            this.traverse(root.val);
        }
    }
}
exports.BinaryTree = BinaryTree;
