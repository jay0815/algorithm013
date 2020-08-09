"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaxHeap = void 0;
const BaseBinaryHeap_1 = require("./BaseBinaryHeap");
class MaxHeap extends BaseBinaryHeap_1.BaseBinaryHeap {
    constructor() {
        super();
    }
    getMaxChildIndex(index) {
        const leftChildIndex = this.getKthChild(index, 1);
        const rightChildIndex = this.getKthChild(index, 2);
        return this.heap[leftChildIndex] > this.heap[rightChildIndex] ? leftChildIndex : rightChildIndex;
    }
    insert(value) {
        this.heap.push(value);
        this.heapifyUp(this.heap.length - 1);
    }
    delete(index) {
        if (this.heap.length === 0) {
            throw Error('Heap Is Empty Now!');
        }
        const max = this.heap[this.heap.length - 1];
        this.heap[index] = max;
        this.heap.length--;
        this.heapifyDown(index);
        return max;
    }
    heapifyUp(index) {
        while (index > 0 && this.heap[index] > this.heap[this.getParent(index)]) {
            // swap value
            this.swap(index, this.getParent(index));
            // change index
            index = this.getParent(index);
        }
        // now, index has changed to the right site
    }
    heapifyDown(index) {
        let maxChildIndex;
        let temp = this.heap[index];
        if (typeof temp !== 'undefined') {
            while (this.getKthChild(index, 1) < this.heap.length - 1) {
                maxChildIndex = this.getMaxChildIndex(index);
                if (temp >= this.heap[maxChildIndex]) {
                    break;
                }
                this.swap(index, maxChildIndex);
                index = maxChildIndex;
            }
        }
    }
}
exports.MaxHeap = MaxHeap;
let maxHeap = new MaxHeap();
const nodes = [10, 4, 9, 1, 7, 5];
nodes.forEach((i) => maxHeap.insert(i));
maxHeap.printHeap();
maxHeap.delete(5);
maxHeap.printHeap();
maxHeap.delete(2);
maxHeap.printHeap();
