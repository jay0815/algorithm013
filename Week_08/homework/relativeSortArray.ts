export default {
  // 思路：
  // 以 arr2 为基准，建立桶
  // 将 arr1 中的数据 灌入 桶中
  // 不在 桶内的，都视为 其他元素，单独存储
  // 以 arr2 为基准，对桶内有效数据进行组合
  // 借助 Array 内置的sort(快排实现) 对 其他元素进行排序
  hash: function (arr1: number[], arr2: number[]) {
    const map = {};
    arr2.forEach((i) => {
      map[i] = [];
    })
    const other = [];

    arr1.forEach((i) => {
      if (map[i]) {
        map[i].push(i);
      } else {
        other.push(i);
      }
    });

    const result = [];
    arr2.forEach((i) => {
      if (map[i].length > 0) {
        result.push(...map[i])
      }
    })

    return result.concat(...other.sort((a, b) => a - b))
  }
}