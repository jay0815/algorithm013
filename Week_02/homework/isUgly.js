"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    // 思路:
    // 当 可以被 质因数 除尽，
    // 则对其结果 继续 判断
    // 除无可除时
    // 余数为1说明 该数为 丑数
    recursion: function isUgly(num) {
        if (!num) {
            return false;
        }
        if (num % 2 === 0) {
            return isUgly(num / 2);
        }
        if (num % 3 === 0) {
            return isUgly(num / 3);
        }
        if (num % 5 === 0) {
            return isUgly(num / 5);
        }
        return num === 1;
    },
    // 思路:
    // 循环除以每一个质因数
    // 不包含 当前质因数 的 等价条件 ->  num % i !== 0
    // 只要 还包含 当前 质因数 就应该 继续 相除, 通过while 优化 递归
    // 当结果 为 1时，说明 原数 上的质因数 已被约尽
    // 结果不为 1 时，即 num = num * (2 ** x) * (3 ** y) * (5 ** z)
    // x = [0, n) y = [0, m) z = [0, o)
    iteration: function (num) {
        if (num <= 0) {
            return false;
        }
        [2, 3, 5].forEach((i) => {
            while (num % i === 0) {
                num /= i;
            }
        });
        return num === 1;
    },
};
