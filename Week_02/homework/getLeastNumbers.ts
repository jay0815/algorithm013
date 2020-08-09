export default {
  violence: function (arr: number[], k: number) {
    // 思路：
    // 从小到大排序，取最前k个即可
    return arr.sort((a,b) => a - b).slice(0, k);
  }
}
