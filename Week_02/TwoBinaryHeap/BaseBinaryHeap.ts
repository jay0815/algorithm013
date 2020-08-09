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

  realtion: (a: number, b: number) => boolean = (a, b) => a <= b;

  constructor(realtion?: (a: number, b: number) => boolean) {
    this.heap = [];
    this.realtion = realtion;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  getParent(index: number) {
    return (index - 1)/2;
  }

  getKthChild(index: number, sort: number) {
    return 2 * index + sort;
  }

  getSwapTargetndex(index: number) {
    const leftChildIndex = this.getKthChild(index, 1);
    const rightChildIndex = this.getKthChild(index, 2);
    return this.realtion(this.heap[leftChildIndex], this.heap[rightChildIndex]) ? leftChildIndex : rightChildIndex;
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

  insert(value: number) {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }

  delete(index: number) {
    if(this.heap.length === 0) {
      throw Error('Heap Is Empty Now!')
    }
    const min = this.heap[this.heap.length-1];
    this.heap.length--;
    this.heap[index] = min;
    this.heapifyDown(index);
  }

  heapifyUp(index: number) {
    const value = this.heap[index];
    while(
      index > 0
      &&
      this.realtion(this.heap[index],  this.heap[this.getParent(index)])
    ) {
      // swap value
      this.swap(index, this.getParent(index));
      // change index
      index = this.getParent(index);
    }
    // now, index has changed to the right site
    this.heap[index] = value;
  }

  heapifyDown(index: number) {
    let targetIndex: undefined | number;
    let temp = this.heap[index];
    while(this.getKthChild(index, 1) < this.heap.length - 1) {
      targetIndex = this.getSwapTargetndex(index);
      if(
        this.realtion(temp, this.heap[targetIndex])
      ) {
        break;
      }
      this.swap(targetIndex, index);
      index = targetIndex
    }
    this.heap[index] = temp;
  }

  getHeapTop() {
    return this.heap[0];
  }

  deleteHeapTop() {
    this.delete(0);
  }

}
