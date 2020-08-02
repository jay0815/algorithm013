export default {
  /**
   * 思路：
   * indexOf 获取的是 当前 元素在数组中第一次 出现的位置
   * 所以只要 当前数据的 index 与 indexOf 的 返回值不一致，即为 重复数据
   * 因为 splice 切分后 数组长度会改变
   * 所以需要 游标 index 原地 踏步，做出长度改变后的适应
   */
  standStill: function (nums: number[]) {
    for (let i = 0; i < nums.length; i++) {
      if (nums.indexOf(nums[i]) !== i) {
        nums.splice(i, 1);
        // 原地踏步
        i = i - 1;
      }
    }
    return nums.length;
  }
}

