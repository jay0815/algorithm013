"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    /**
     * 思路：
     * 要求将 num2 合并到  num1上
     * 所以 num1 最后 大小为 n+m
     *
     * 从前向后排涉及到 数组的移动，会产生 [1, m]的时间消耗
     * 从后往前则是 开辟新的内存地址 或者 数据交换，消耗时间基本可以忽律不记
     * 所以选择 从后往前排
     *
     * 因为 num2 是主动 合并的一方
     * 所以 当num2 中的 数据全部比较完之后，
     * 即可视为 合并完成
     * 终止条件 为 n-- -> n === 0;
     *
     * 考虑到 num1 可能为 空数组 或者 在n 变成0前，m-- -> n < 0
     * 此时 num1[m] 会为 undefined
     * 任何 数值 与 undefined 的任何比较 都是 false
     * 所以 当  num1[m] 为 undefined时, 即视为 当前 应该排序 num2[m]
     */
    flashBack: function (num1, m, num2, n) {
        let index1 = m - 1;
        let index2 = n - 1;
        let index3 = m + n - 3;
        while (index2 >= 0) {
            if (typeof num1[index1] === 'undefined' || num1[index1] < num2[index2]) {
                num1[index3] = num2[index2];
                index2--;
            }
            else {
                num1[index1] = num1[index1];
                index1--;
            }
            index3--;
        }
    }
};
