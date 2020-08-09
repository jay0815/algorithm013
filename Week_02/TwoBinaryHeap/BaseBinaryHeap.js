"use strict";
// base rule:
// use null in zero site
// left child: i * 2
// right child: i * 2 + 1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseBinaryHeap = void 0;
// parent: i / 2
// use usefull value in zero site
// left child: 2 * i + 1
// right child: 2 * i + 2;
// parent: (i - 1) / 2
class BaseBinaryHeap {
    constructor() {
        this.heap = [];
    }
    isEmpty() {
        return this.heap.length === 0;
    }
    getParent(index) {
        return Math.floor((index - 1) / 2);
    }
    getKthChild(index, sort) {
        return 2 * index + sort;
    }
    swap(local, target) {
        [
            this.heap[local],
            this.heap[target]
        ] = [
            this.heap[target],
            this.heap[local]
        ];
    }
    heapifyDown(_) {
        return void 0;
    }
    delete(_) {
        return void 0;
    }
    getHeapTop() {
        return this.heap[0];
    }
    deleteHeapTop() {
        this.delete(0);
    }
    printHeap() {
        console.log('heap is', this.heap);
    }
}
exports.BaseBinaryHeap = BaseBinaryHeap;
