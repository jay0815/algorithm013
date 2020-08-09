"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    // normal way
    recursion: function (root) {
        const path = [];
        const postorder = (r) => {
            if (r) {
                postorder(r.left);
                postorder(r.right);
                path.push(r.val);
            }
        };
        postorder(root);
        return path;
    },
    iteration: function (root) {
        const path = [];
        return path;
    }
};
