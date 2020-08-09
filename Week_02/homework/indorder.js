"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    // normal way
    recursion: function (root) {
        const path = [];
        const inorder = (r) => {
            if (r) {
                inorder(r.left);
                path.push(r.val);
                inorder(r.right);
            }
        };
        inorder(root);
        return path;
    },
    MorrisInorder: function (root) {
        // Morris  中序遍历实现
        const path = [];
        let current = root;
        let preview = null;
        while (current !== null) {
            if (current.left === null) {
                path.push(current.val);
                current = current.right;
            }
            else {
                preview = current.left;
                while (preview.right !== null && preview.right !== current) {
                    preview = preview.right;
                }
                if (preview.right === null) {
                    preview.right = current;
                    current = current.left;
                }
                if (preview.right === current) {
                    path.push(current.val);
                    preview.right = null;
                    current = current.right;
                }
            }
        }
        return path;
    },
    iteration: function (root) {
        // normal iteration
        const path = [];
        return path;
    }
};
