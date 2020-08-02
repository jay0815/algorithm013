export default {
  // 1、针对特殊情况进行处理
  // 2、通过排序，过滤掉相同数据 不同排序的情况
  // 3、通过集合，hash掉 相同数据的 情况
  enumeration: function(nums: number[]) {
    // 思路没有问题，但是无法通过leetcode， timeout
    if (nums === null || nums.length < 2) {
      return [];
    }
    const result = [];
    nums.sort((a, b) => a - b);
    const set = new Set();
    for (let i = 0; i < nums.length - 2; i++) {
      for (let j = 1 + i; j < nums.length - 1; j++) {
        for (let k = j + 1; k < nums.length; k++) {
          if (nums[i] + nums[j] + nums[k] === 0 && !set.has([nums[i], nums[j], nums[k]] + '')) {
            result.push([nums[i], nums[j], nums[k]]);
            set.add([nums[i], nums[j], nums[k]] + '')
          }
        }
      }
    }
    return result
  },
}