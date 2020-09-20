export class PriorityQueue {
  
  collection: number[][];

  comparator: (n: number[], o: number[]) => boolean;

  constructor(comparator, maxSize) {
    this.collection = [];
    // this.maxSize = maxSize;
    this.comparator = (n, o) => n[1] >= o[1]
  }
  
  enqueue(value: number, priority = 0) {
    priority = Math.max(Number(priority), 0);

    const element = [value, priority];
    // 此处暂时指定comparator 规则为 priority越大 优先级越低
    if (this.isEmpty || this.comparator(element, this.collection[this.size - 1])) {
      this.collection.push(element);
    } else {
      for (let i = 0; i < this.collection.length; i++) {
        if (this.comparator(element, this.collection[i])) {
          this.collection.splice(i, 0, element);
          break;
        }
      }
    }
  }
  // Returns the smallest item in the queue and removes it from the queue
  dequeue() {
    // if we just want to return value
    // const element = this.collection.shift();
    // return element[0];

    // return element 
    return this.collection.shift();
  }
  // Returns the smallest item in the queue and leaves the queue unchanged
  peek() {
    // if we just want to return value
    // const element = this.collection[0];
    // return element[0];

    // return element 
    return this.collection[0];
  }
  // Removes all values from the queue
  clear() {
    return this.collection = [];
  }
  // Returns the number of elements in the queue
  get size() {
    return this.collection.length;
  }
  // Returns is this a empty quene
  get isEmpty() {
    return this.collection.length === 0;
  }
}