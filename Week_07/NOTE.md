# 总结

## 字典树 与 并查集

### Trie（字典树）

> 又称前缀树

特点：

* 有序
* 用于统计、排序和存储字符串

一般情况下，只有叶子节点有值，即表示 当前路径下存储的 字符串 已经结束。
当然，可以视情况，对每个节点所带的值进行调整

### 实现 Trie

[Trie](./homework/Trie.ts)

### 并查集

并查集是一种树型的数据结构，用于处理一些不交集（Disjoint Sets）的合并及查询问题。有一个联合-查找算法（Union-find Algorithm）定义了两个用于此数据结构的操作：

并查集的操作:

* find: 确定元素属于哪一个子集。它可以被用来确定两个元素是否属于同一子集
* union: 将两个子集合并成同一个集合

### 实现 并查集

[UnionFind](./homework/UnionFind.ts)

### 启发式搜索(A*)

#### 估价函数

启发函数：通过期望条件，函数返回估价成本

## AVL Tree

AVL Tree 是一种 Binary search tree实现方式，大部分的实现方式与BST一样，差别在于AVL Tree在生成过程中会通过计算并调整树的结构来让树维持平衡，从而避免失衡

```javascript
class Node {

  constructor(d) {
    this.key = d;
    this.height = 1;
    this.left = null;
    this.right = null;
  }

}
  
class AVLTree {

  constructor() {
    this.root = null;
  }
  
  height(node) {
    if(node === null) {
      return 0
    }
    return node.height
  }
  
  max(a, b) {
    return (a > b) ? a : b;
  }
  
  rightRotate(r) {
    // way 1
    let left = r.left;
    let lRight = left.right;
    // Perform rotation
    left.right = r;
    r.left = lRight;

    // way 2
    // [left.right, left] = [r, left.right]
  
    // Update heights
    r.height = this.max(this.height(r.left), this.height(r.right)) + 1;
    left.height = this.max(this.height(left.left), this.height(left.right)) + 1;

    // Return new root
    return left;
  }

  leftRotate(l) {
    let right = l.right;
    let rLeft = right.left;

    // Perform rotation
    right.left = l;
    l.right = rLeft;

    //  Update heights
    l.height = this.max(this.height(l.left), this.height(l.right)) + 1;
    right.height = this.max(this.height(right.left), this.height(right.right)) + 1;

    // Return new root
    return right;
  }
  
  getBalance(root) {
    if (root === null) {
      return 0;
    }
    return this.height(root.left) - this.height(root.right);
  }
  
  insert(root, key) {
    // init
    if (root == null) {
      root = new Node(key);
      return
    }

    if (key < root.key) {
      root.left = this.insert(root.left, key);
    } else if (key > root.key) {
      node.right = this.insert(root.right, key);
    }else {
      // key has existed ，exect no operation
        return;
    }
    // Update height
    root.height = 1 + this.max(this.height(root.left), this.height(root.right));
    // prepear for balance
    const balance = this.getBalance(root);
    // if this root becomes unbalanced
    // will exec under 4 cases to be balanced

    // Left Left case
    if (balance > 1 && key < root.left.key) {
      root = this.rightRotate(root);
    } else if (balance < -1 && key > root.right.key) {
      // Right Right Case
      root = this.leftRotate(root);
    } else if (balance > 1 && key > root.left.key) {
      // Left Right Case
      root.left = this.leftRotate(root.left);
      root = this.rightRotate(root);
    } else if (balance < -1 && key < root.right.key) {
      // Right Left Case
      root.right = this.rightRotate(root.right);
      root = this.leftRotate(root)
    }

    return;
  }

  preOrder(root) {
      if (root != null) {
          console.log(root.key + " ");
          this.preOrder(root.left);
          this.preOrder(root.right);
      }
  }
}

  AVLTree tree = new AVLTree();

  tree.insert(tree.root, 10);
  tree.insert(tree.root, 20);
  tree.insert(tree.root, 30);
  tree.insert(tree.root, 40);
  tree.insert(tree.root, 50);
  tree.insert(tree.root, 25);

  /* The constructed AVL Tree should be
        30
      /  \
    20   40
    /  \     \
  10  25    50
  */
  console.log("Preorder traversal" + " of constructed tree is : ");
  tree.preOrder(tree.root);

```
