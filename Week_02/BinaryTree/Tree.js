"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinaryTree = void 0;
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
class BinaryTree {
    constructor() {
        this.root = null;
        this.orderPath = [];
    }
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
    traverse(v) {
        console.log(v);
        this.orderPath.push(v);
    }
    preorder(root) {
        if (root) {
            this.traverse(root.val);
            this.preorder(root.left);
            this.preorder(root.right);
        }
    }
    inorder(root) {
        if (root) {
            this.inorder(root.left);
            this.traverse(root.val);
            this.inorder(root.right);
        }
    }
    postorder(root) {
        if (root) {
            this.postorder(root.left);
            this.postorder(root.right);
            this.traverse(root.val);
        }
    }
}
exports.BinaryTree = BinaryTree;
