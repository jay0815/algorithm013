// base rule:
// use null in zero site
// left child: i * 2
// right child: i * 2 + 1;

// parent: i / 2
// use usefull value in zero site
// left child: 2 * i + 1
// right child: 2 * i + 2;
// parent: (i - 1) / 2
export class BaseBinaryHeap {
  // heap: [null] | number[];
  heap: number[];

  constructor() {
      this.heap = [];
  }
  isEmpty() {
      return this.heap.length === 0;
  }
  getParent(index: number) {
      return Math.floor((index - 1)/2);
  }
  getKthChild(index: number, sort: number) {
      return 2 * index + sort;
  }

  swap(local: number, target: number) {
    [
      this.heap[local],
      this.heap[target]
    ] = [
      this.heap[target],
      this.heap[local]
    ];
  }

  heapifyDown(_: number) {
    return void 0;
  }

  delete(_: number) {
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
