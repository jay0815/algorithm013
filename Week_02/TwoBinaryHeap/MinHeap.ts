import { BaseBinaryHeap } from './BaseBinaryHeap';

export class MinBinaryHeap extends BaseBinaryHeap {

    constructor() {
        super();
    }

    getSwapTargetndex(index: number) {
        const leftChildIndex = this.getKthChild(index, 1);
        const rightChildIndex = this.getKthChild(index, 2);
        return this.heap[leftChildIndex] < this.heap[rightChildIndex] ? leftChildIndex : rightChildIndex;
    }

    insert(value: number) {
        this.heap.push(value);
        this.heapifyUp(this.heap.length - 1);
    }
    delete(index: number) {
        if (this.heap.length === 0) {
            throw Error('Heap Is Empty Now!');
        }
        const min = this.heap[this.heap.length - 1];
        this.heap[index] = min;
        this.heap.length--;
        this.heapifyDown(index);
        return min
    }
    heapifyUp(index: number) {
        while (index > 0
            &&
            this.heap[index] < this.heap[this.getParent(index)] ) {

            // swap value
            this.swap(index, this.getParent(index));

            // change index
            index = this.getParent(index);
        }
        // now, index has changed to the right site
    }
    heapifyDown(index: number) {
        let targetIndex: undefined | number;
        let temp = this.heap[index];
        if(typeof temp !== 'undefined') {
          while (this.getKthChild(index, 1) < this.heap.length - 1) {
              targetIndex = this.getSwapTargetndex(index);
              if (temp <= this.heap[targetIndex]) {
                  break;
              }
              this.swap(targetIndex, index);
              index = targetIndex;
          }
        }

    }
}


let minHeap = new MinBinaryHeap()

const nodes = [8, 2, 1, 5, 7, 9, 3, 6, 4, 10, 13];
nodes.forEach((i) => minHeap.insert(i));

minHeap.printHeap();
minHeap.delete(1);
minHeap.printHeap();
minHeap.delete(2);
minHeap.printHeap();
