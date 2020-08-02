## 算法学习

* 刻意练习很重要
    * 及时反馈是学习动力的源泉
    * 站在巨人的肩膀上学习，会事半功倍
* 练习思路
    * 先写所有想到的方案
    * 根据时间复杂度选择方案
    * 自顶向下编程
    * 每题必须五毒神掌

## Stack、Quene、Deque

|Operation|Stack|Quene|Deque|
|-|-|-|-|
|add|O(1)|O(1)|O(1)|
|delete|O(1)|O(1)|O(1)|
|search|O(n)|O(n)|O(n)|

Deque 同时支持 push、pop、shift、unshit. JS 中 Array 的设计 和 Deque 是 一样的

### 应用场景
Stack: 有最近相关性的可以使用 stack结构

Quene: 处理优先级问题时

### 基于javascript的实现

```javascript
/**
 * last in first out
 */
class Stack {
  constructor() {
    // this.collection = new Map();
    this.collection = [];
  }
  push(item) {
    // this.collection.set(this.size, item);
    this.collection.push(item);

    return this.size;
  }
  pop() {
      if(this.size) {
        //   const last = this.colleciton.get(this.size - 1);
        //   this.colleciton.delete(this.size - 1);
        const last = this.collection.pop();
        return last
      }
      return null;
  }

  peek() {
    // return this.collection.get(this.size - 1) || null;
    return this.collection[this.size - 1] || null;
  }

  clear() {
    //   this.collection.clear();
    this.collection = [];
  }

  get size() {
    // return this.collection.size;
    return this.collection.length;
  }
  get isEmpty() {
    return this.collection.length === 0;
  }
}
/**
 * first in first out
 */
class Queue {
  constructor() {
    this.collection = []
  }
  enqueue(item) {
    this.collection.push(item)
  }
  dequeue() {
    return this.collection.shift();
  }
  peek() {
    return this.collection[0];
  }
  get size() {
    return this.collection.length;
  }
  get isEmpty() {
    return this.collection.length === 0;
  }
}

class Dequeue {
  constructor() {
    this.collection = []
  }
  addLast(item) {
    this.collection.push(item)
  }
  addFirst(item) {
    this.collection.unshift(item);
  }
  removeFirst() {
    return this.collection.shift();
  }

  removeLast() {
    return this.collection.pop();
  }

  peek() {
    return this.collection[0];
  }
  get size() {
    return this.collection.length;
  }
  get isEmpty() {
    return this.collection.length === 0;
  }
}
```

## Priority Queue

* insert: O(1)
* get: O(logN)
* 可以由  BST( Binary Search Tree ) | Treap | Heap 等多种方式实现

### 应用场景
* 医院中 「急诊病人」优先级队列 与 「非急诊病人」 的普通级队列
* 股票交易时基于时间和价格的成交规则上，量大优先的优先级队列
### 基于javascript的实现
```javascript
/**
 * simple Priority Queue
 * 简化了 comparator 传入，使用内置 comparator 进行 比较
 * 暂未实现 maxSize
 */
class PriorityQueue {
    constructor(comparator, maxSize) {
        this.collection = [];
        // this.maxSize = maxSize;
        this.comparator = (n, o) => n[1] >= o[1]
    }
    enqueue(value, priority = 0) {
        priority = Math.max(Number(priority), 0);
        const element = [value, priority];
        // 此处暂时指定comparator 规则为 priority越大 优先级越低
        if(this.isEmpty || this.comparator(element, this.colleciton[this.size - 1])) {
            this.collection.push(element);
        }else {
            for(let i = 0; i < this.collection.lenght; i++) {
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
```