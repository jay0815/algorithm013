"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    violence: function (arr, k) {
        // 思路：
        // 从小到大排序，取最前k个即可
        return arr.sort((a, b) => a - b).slice(0, k);
    }
};
