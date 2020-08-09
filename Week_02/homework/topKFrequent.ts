export default {
  // 思路:
  // 遍历 数组记录 每个 数值出现的次数
  // 从 大 到 小 排序
  // 取 前 k 个 数字
  hashMap: function(nums: number[], k: number) {
    const record = new Map<number, number>();
    const list = [];
    nums.map((i) => {
        if(record.has(i)) {
            list[record.get(i)].push(i);
        }else {
            record.set(i, list.length);
            list[list.length] = [i];
        }
    });
    list.sort((a, b) => b.length - a.length);
    record.clear();
    const result = [];
    for(let i = 0; i < k; i++) {
        result.push(list[i][0]);
    }
    return result;
  },
  bucketSort: function(nums: number[], k: number) {

  },
}
