export default {
  // 思路：
  // 先对集合中每个区间的首位进行排序 -> 后续合并时可以不用回头
  quickSort: function (intervals: [number, number][]) {
    if (intervals.length === 0) {
      return []
    }
    intervals.sort(([p], [q]) => p - q);

    const result = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
      const last = result.length - 1;
      const [lp, lq] = intervals[i];
      const [pp, pq] = result[last];

      if (lp >= pp && lp <= pq) {
        result[last] = [pp, lq > pq ? lq : pq]
      } else {
        result.push([lp, lq])
      }
    }

    return result;
  }
}