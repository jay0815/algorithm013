## Binary Tree
> 链表是一种特殊的树（没有左子树的树），而树一种特殊的图(没有环关系的图)

### Binary Search Tree

二叉搜索树（二叉排序树、有序二叉树）
特点：
* 左子树上的所有值均小于其根节点的值
* 右子树上的所有值均大于其根节点的值
* 每个子树也均为二叉搜索树


### HeapSort

堆分为大顶堆、小顶堆

#### 二叉堆
  * 通过完全二叉树实现
  * 树中任意节点的值总是大于其子节点的值

##### 二叉堆 insert
  * 新元素一路插入待堆的尾部
  * 执行 heapifyUp

#### 二叉堆 删除堆顶
  * 将堆尾 替换 至 堆顶
  * 移除 堆尾 元素
  * 执行 heapifyDown

斐波那契堆: 通过多叉树实现

findMax: O(1)
deleteMax: O(logN)
insert: O(logN) or O(1)


### Graph

Graph(v, e)
* Edge
  * 有向和无向
* vertuces
  * 度 - 入度 和 出度
  * 点与点是否连通
