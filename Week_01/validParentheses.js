"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    stackWay: function (s) {
        if (s.length % 2) {
            return false;
        }
        const bracketMap = {
            '(': ')',
            '[': ']',
            '{': '}'
        };
        const stack = [];
        let value;
        for (let i = 0; i < s.length; i++) {
            if (value = bracketMap[s[i]]) {
                stack.unshift(value);
            }
            else {
                if (stack.length === 0 || stack[0] !== s[i]) {
                    return false;
                }
                else {
                    stack.shift();
                }
            }
        }
        return stack.length === 0;
    }
};
