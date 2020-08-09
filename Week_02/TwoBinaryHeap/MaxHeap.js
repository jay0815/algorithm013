"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaxHeap = void 0;
const BaseBinaryHeap_1 = require("./BaseBinaryHeap");
const relation = (a, b) => a >= b;
class MaxHeap extends BaseBinaryHeap_1.BaseBinaryHeap {
    constructor() {
        super(relation);
    }
}
exports.MaxHeap = MaxHeap;
