"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    // normal way
    recursion: function (root) {
        const path = [];
        const preorder = (r) => {
            if (r) {
                path.push(r.val);
                preorder(r.left);
                preorder(r.right);
            }
        };
        preorder(root);
        return path;
    },
    iteration: function (root) {
        const path = [];
        return path;
    }
};
