export default {
  /**
   *
   * 思路：
   * 关系 -> nums[x] + nums[y] === target -> a + b === c
   * 借助 数组 通过 以 a (value) 为 索引, x (index) 为 值 构建 缓存,
   * cute 掉 重复 数据 因在 nums 中 位置不同需要 重复对比的 无效操作
   * 总时间 范围 控制 到 [2, n]
   */
  memorize: function(nums: number[], target: number) {
    const result: number[] = [];
    let diff: undefined | number;
    let index = 0;
    while(nums.length > 0){
      // a = c - b
      // a = c - nums[y]
      diff = target - nums[index];
      // result has recorded a (nums[x])
      if (result[diff] !== void 0){
        return [result[diff], index]
      }
      // result record a (nums[x])
      result[nums[index]] = index;
      index++;
    }
  }
}
