import { BaseBinaryHeap } from './BaseBinaryHeap';

const relation = (a: number, b: number) => a >= b;

export class MaxHeap extends BaseBinaryHeap {
  constructor() {
    super(relation);
  }
}


// export class MaxHeap {
//   // heap: [null] | number[];
//   heap: number[];
//
//   constructor() {
//     this.heap = [];
//   }
//
//   isEmpty() {
//     return this.heap.length === 0;
//   }
//
//   getParent(index: number) {
//     return (index - 1)/2;
//   }
//
//   getKthChild(index: number, sort: number) {
//     return 2 * index + sort;
//   }
//
//   getMaxChildIndex(index: number) {
//     const leftChildIndex = this.getKthChild(index, 1);
//     const rightChildIndex = this.getKthChild(index, 2);
//     return this.heap[leftChildIndex] > this.heap[rightChildIndex] ? leftChildIndex : rightChildIndex;
//   }
//
//   swap(maxIndex: number, minIndex: number) {
//     [
//       this.heap[minIndex],
//       this.heap[maxIndex]
//     ] = [
//       this.heap[maxIndex],
//       this.heap[minIndex]
//     ];
//   }
//
//   insert(value: number) {
//     this.heap.push(value);
//     this.heapifyUp(this.heap.length - 1);
//   }
//
//   delete(index: number) {
//     if(this.heap.length === 0) {
//       throw Error('Heap Is Empty Now!')
//     }
//     const min = this.heap[this.heap.length-1];
//     this.heap.length--;
//     this.heap[index] = min;
//     this.heapifyDown(index);
//   }
//
//   heapifyUp(index: number) {
//     const value = this.heap[index];
//     while(index > 0 && this.heap[index] > this.heap[this.getParent(index)]) {
//       // swap value
//       this.swap(index, this.getParent(index));
//       // change index
//       index = this.getParent(index);
//     }
//     // now, index has changed to the right site
//     this.heap[index] = value;
//   }
//
//   heapifyDown(index: number) {
//     let maxChildIndex: undefined | number;
//     let temp = this.heap[index];
//     while(this.getKthChild(index, 1) < this.heap.length - 1) {
//       maxChildIndex = this.getMaxChildIndex(index);
//       if(temp >= this.heap[maxChildIndex]) {
//         break;
//       }
//       this.swap(maxChildIndex, index);
//       index = maxChildIndex
//     }
//     this.heap[index] = temp;
//   }
//
//   getMax() {
//     return this.heap[0];
//   }
//
//   deleteMax() {
//     this.delete(0);
//   }
// }
