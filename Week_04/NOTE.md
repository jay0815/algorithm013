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

先通过二分查找确定旋转点
left 此时记为 以旋转点开始的start
right 记为 以旋转点开始的end
当 目标内容在 在 旋转点的范围内时，从当前 left 和 right 的范围进行二分搜索
当 目标内容不在 旋转点的范围内时，以 left为 0, right 为 旋转点的 start - 1的范围进行二分搜索

```javascript

    if (!nums || nums.length === 0) {
      return -1;
    }
    let left = 0;
    let right = nums.length - 1;
    let mid;

    while (left <= right) {
      mid = Math.ceil((left + right) / 2);
      // 查找 第一个 没有 递增的点
      if(nums[left] < nums[mid] && nums[mid+1] < nums[right] && nums[mid] > nums[mid+1]) {
        left = mid + 1;
        right = nums.length - 1;
        break;
      }else if (nums[left] > nums[mid]) {
        left = mid - 1;
      }else if (nums[mid] > nums[right]) {
        left = mid + 1;
      }
    }

    if(left > right) {
      // 当前 数组 单调递增 无 旋转
      left = 0;
    }else {

      if (target >= nums[0] && target <= nums[left - 1]) {
        right = left - 1
        left = 0
      }
    }

    while (left <= right) {
      mid = Math.ceil((left + right) / 2);
      if (nums[left] === target) {
        return left
      }
      if (nums[mid] === target) {
        return mid
      }
      if (nums[right] === target) {
        return right
      }
      if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return -1;
```

优化

将旋转点的搜索过程 并入 target 的搜索中去

```javascript
    if (!nums || nums.length === 0) {
      return -1;
    }
    let left = 0;
    let right = nums.length - 1;
    let mid;
    while (left <= right) {
      mid = Math.ceil((left + right) / 2);
      // 首尾中全部验证
      if (nums[mid] === target) return mid;
      if (nums[left] === target) return left;
      if (nums[right] === target) return right;
      // 说明前半部分有序
      if (nums[left] < nums[mid]) {
        // 说明目标值存在于有序部分，将末尾设置为mid
        // 继续执行二分查找
        if (nums[left] < target && target < nums[mid]) {
          right = mid - 1;
        } else {
          // 说明目标值存在于后半段
          left = mid + 1;
        }
      } else {
        // 说明后半部分有序
        // 判断目标值是否在后半部分
        if (nums[mid] < target && target < nums[right]) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
    }
    return -1;
```
