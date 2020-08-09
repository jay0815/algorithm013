"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    enumerate: function (s, t) {
        // 先排序 (排序抹去 异位比较 这一难点)
        // 再比较
        return s.split('').sort().toString() === t.split('').sort().toString();
    },
    memorize: function (s, t) {
        if (s.length !== t.length) {
            return false;
        }
        // 同时遍历 s、t
        // r (record) 以 当前遍历的字符为 key，字符出现的次数为 value 进行记录
        let i = 0, r = {};
        while (i < s.length) {
            if (s[i] !== t[i]) {
                // s 中的字符 对 r 进行增操作
                r[s[i]] = (r[s[i]] || 0) + 1;
                // t 中的字符 对 r 进行减操作
                r[t[i]] = (r[t[i]] || 0) - 1;
                // 每次遍历时 当 s 或 t 当下 位置字符不存在于 r 中时，r 移除 当前 字符
                // 可以省去 最后 比较时 的 再过滤的步骤
                if (r[s[i]] === 0) {
                    delete r[s[i]];
                }
                if (r[t[i]] === 0) {
                    delete r[t[i]];
                }
            }
            i++;
        }
        return Object.keys(r).length === 0;
    }
};
