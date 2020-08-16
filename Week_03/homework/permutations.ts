// https://leetcode-cn.com/problems/permutations/submissions/

export default {
  backtrackingWithMemorize: function (nums: number[]) {
    // 记录当前的 已使用的 值
    const set = new Set();
    // 记录当前的 路径
    const result = [];
    const recursion = (temp) => {
      // 当记录长度 与 需要排列的数据 相等时，视为一种情况
      if (temp.length == nums.length) {
        result.push([...temp])
        return
      }
      for (let i = 0; i < nums.length; i++) {
        // 剪枝，当数据被用过时，不进行递归调用
        if (!set.has(nums[i])) {
          temp.push(nums[i]);
          set.add(nums[i])
          recursion(temp);
          temp.pop()
          set.delete(nums[i])
        }
      }
    }

    recursion([]);
    return result;
  },
  backtracking: function (nums: number[]) {
    // 记录当前的 路径
    const result = [];
    const recursion = (numss, temp) => {
      // 当无可用数据时, 说明branch 探底，可以记录了，返回上层 递归栈
      if (numss.length === 0) {
        result.push([...temp])
        return
      }
      for (let i = 0; i < numss.length; i++) {
        temp.push(numss[i]);
        // 剪枝，去除已用数据
        recursion([...numss.slice(0, i), ...numss.slice(i+1)], [...temp]);
        temp.pop()
      }
    }

    recursion(nums, []);
    return result;
  }
}