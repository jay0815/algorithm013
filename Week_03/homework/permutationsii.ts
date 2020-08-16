export default {
  /**
   * 
   *  思路: 同全排 方式一样，因为存在 相同数据，所以增加根据值去重的逻辑
   *
   **/
  backtracking: function (nums: number[]) {
    let result = [];
    // 序列化 数组, 让 数据 支持根据 位置进行 去重
    nums = nums.sort();
    const recursion = (temp, filters) => {
      if (filters.length === 0) {
        result.push(temp);
        return;
      }
      for (let i = 0; i < filters.length; i++) {
        // 去重
        // 当前值 与 下一个值 相同时，视为相同情况，不必进入递归
        if (i > 0 && filters[i] === filters[i - 1]) {
          continue;
        } else {
          temp.push(filters[i]);
          // 剪枝 去除 当前情况
          recursion([...temp], [...filters.slice(0, i), ...filters.slice(i + 1)])
          temp.pop();
        }
      }
    }
    recursion([], nums);
    return result;
  }

}