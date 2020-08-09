"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinarySearchTree = void 0;
const Tree_1 = require("./Tree");
class BinarySearchTree extends Tree_1.BinaryTree {
    constructor() {
        super();
    }
    search(value) {
        return this.searchNode(this.root, value);
    }
    // binary search
    searchNode(root, value) {
        // if trees is empty return null
        if (root === null) {
            return null;
        }
        else if (value < root.val) {
            // search into left tree node
            return this.searchNode(root.left, value);
        }
        else if (value > root.val) {
            // search into right tree node
            return this.searchNode(root.right, value);
        }
        else {
            // value === root.val
            return root;
        }
    }
}
exports.BinarySearchTree = BinarySearchTree;
