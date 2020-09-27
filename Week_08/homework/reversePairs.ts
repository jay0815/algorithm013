export default {
  // 暴力破解法 -> leetcode 会超时
  enumerate: function (nums: number[]) {
    let count = 0;
    for (let i = 0; i < nums.length - 1; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] > 2 * nums[j]) {
          count++
        }
      }
    }
    return count;
  }
}