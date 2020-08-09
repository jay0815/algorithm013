"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    /**
     * 思路：
     * 将数组 先转换成 字符串 再转成 BigInt
     * 数值类型 + 1
     * 将 BigInt 转为字符串 再转数组
     * 耗时 2n
     */
    toBigInt: function (digits) {
        // @ts-ignore
        return ((BigInt(digits.join('')) + 1n) + '').split('');
    },
    /**
     * 思路：
     * 末位 + 1
     * 当前位%10后为0则需要进位
     * 依次向前 循环 到 不用进位为止
     * 当 进位数据为 首相时， 需要 unshift(1);
     * 耗时 最大 为 2n - 1, 最小为 [1, n]
     */
    /**
     * 时间复杂度 O(n)
     * 空间复杂度 O(1)
     */
    myWay: function (digits) {
        let i = digits.length - 1;
        while (i >= 0) {
            digits[i]++;
            if (digits[i] < 10) {
                break;
            }
            else {
                digits[i] = 0;
                if (i === 0) {
                    digits.unshift(1);
                    break;
                }
                i--;
            }
        }
        return digits;
    },
    // international way
    /**
    * 思路：
    * 从 后 向前 遍历
    * 每次 数据处理后 置于 新数组的 开头, 这样就不用考虑 是否需要提前退出
    * 根据 carry 是否为 0 判断 是否 需要 进位
    * 耗时 为 n 到 2n-1
    */
    newArrayRecord: function (digits) {
        let len = digits.length;
        let carry = 1;
        let res = [];
        let digit = 0;
        for (let i = len - 1; i >= 0; i--) {
            digit = carry + digits[i];
            res.unshift(digit % 10);
            carry = Math.floor(digit / 10);
        }
        if (carry > 0) {
            res.unshift(carry);
        }
        return res;
    }
};
