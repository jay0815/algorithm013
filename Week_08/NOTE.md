# 总结

## 位运算

### 位运算符

|含义|运算符|示例|
|---|---|---|
|左移(除以2)|>>| 0b0010(2) >> 1 === 0b0001(1)|
|右移(乘以2)|<<| 0b0010(2) << 1 === 0b0100(4)|
|按位或 ( 1或1取1;0或1取1;0或0取0 )| &#124; | 0b0010(2)  &#124; 0b0001(1) === 0b0011(3) |
|按位与 ( 1与1取1;0与1取0;0与0取0 )|&|0b0010(2) & 0b0001(1) === 0b0000(0)|
|按位取反 ( 0取反为1;1取反为0 ) |~| ~0b0011(3) === -0b0100(-4)|
|按位异或 ( 当前位相同为0，不同为1 )|^| 0b0011(3) ^ 0b1011(11) === 0b1000(8) |

#### 注意点

* ___~0b0011(3) 取反 是-0b0100(-4) 不是 0b1100(12)___

```javascript

let x = 0b1110; // x = 14
// 机器是以补码方式存取
// 赋值意味着存储
// 负数补码 = 原位取反，末尾加1，符号位不变
let fx = ~x; // ~0b1110 => ~00001110 => 11110001(补码) => { (先减一) => 11110000 => (再取反, 符号位不变) => 10001111 } => 10001111(-15)
fx === -15 // true
```

### 位运算技巧

* 1s(全1) === -1 === ~0

* 交换率
  * c = a ^ b;a ^ c === b; b ^ c === a;
  * a^b^c === (a^b)^c === a^(b^c)

> eg：

```javascript
let a = 0b0011; // a = 3
let b = 0b1100; // b = 12
c = a ^ b; // c = 0011 ^ 1100 => 1111 => 15
let d = a ^ c; // d = 0011 ^ 1111 => 1100 => 12
let e = b ^ c; // e = 1100 ^ 1111 => 0011 => 3

d === b // true
e === a // true

```

* 判断奇偶（判断最后一位是1还是0）
  * 奇数：x & 1 === 1
  * 偶数：x & 0 === 0

* 最低位1变0
  * x &(x-1)

```javascript

let x = 0b1110; // x = 14
let xMinsOne = 0b1101; // xMinsOne = 13 === x - 1
x = x & xMinsOne; // 1110 & 1101 => 1100(12)
x === 0b1100;// true

let xSecondMinsOne = 0b1010;// (x & xMinsOne) - 1;
x = x & xSecondMinsOne;// 1100 & 1010 => 1000 ()
x === 0b1000;// true
```

* 得到最低位
  * x & 1

* x & (~x) === 0

> eg:

```javascript

let x = 0b1110; // x = 14
x & (~x) === 0; // 1110 & 0001 => 0000

```

## 布隆过滤器

> 用于检索一个元素是否在一个集合中

### 与 Hash Tabel的区别

* bloom filter 仅用于检索元素是否存在, hash table不光可以检索元素是否存在, 还可以记录元素信息

## LRU

> 

## 初级排序代码

* 冒泡排序
[bubbleSort](./sort/bubbleSort.ts)

* 希尔排序
[shellSort](./sort/shellSort.ts)

* 选择排序
[selectionSort](./sort/selectionSort.ts)

* 插入排序
[insertionSort](./sort/insertionSort.ts)

## 高级排序代码

* 快速排序
[quickSort](./sort/quickSort.ts)

* 归并排序
[mergeSort](./sort/mergeSort.ts)

* 优先队列

[priorityQueue](./sort/priorityQueue.ts)

* 堆

[MaxHeap](../Week_02/TwoBinaryHeap/MaxHeap.ts)
[MinHeap](../Week_02/TwoBinaryHeap/MinHeap.ts)