# 学习笔记

## DFS

template

```javascript
//递归写法：
const recursion = (root) => {
  const visited = new Set()
  const dfs = node => {
    if (visited.has(node)) return
    visited.add(node);

    process(node);

    dfs(node.left)
    dfs(node.right)
  }

  dfs(root)

  return
}

//迭代写法：
const iteration = (root) => {
  if(root === null) {
    return;
  }

  const visited = new Set();
  const stack = [];
  stack.push(root);

  while(stack.length !== 0) {
    const node = stack.shift();
    visited.add(node);

    process(node);
    // generate_related_nodes 生成子树节点集合
    const nodes = generate_related_nodes(node);
    // 加入头部
    stack.unshift(...nodes);
  }
}

```

## BFS

template

```javascript

//JavaScript
const bfs = (root) => {
  let result = [], queue = [root]
  while (queue.length > 0) {
    let level = [], n = queue.length
    for (let i = 0; i < n; i++) {
      let node = queue.pop()
      level.push(node.val);
      if (node.left) queue.unshift(node.left)
      if (node.right) queue.unshift(node.right)
    }
    result.push(level)
  }
  return result
};

```

## 二分查找

template

```javascript
let left = 0, right = 0;
let mid = 0;
while (left < right) {
  mid = (left+right)/2;
  if(array[mid] === target) {
    // find the target
    break;
    // or
    // return mid;
  }else if() {
    left = mid + 1;
  }else {
    rigth = mid - 1;
  }
}

```

## 使用二分查找，寻找一个半有序数组 [4, 5, 6, 7, 0, 1, 2] 中间无序的地方

```javascript

```
