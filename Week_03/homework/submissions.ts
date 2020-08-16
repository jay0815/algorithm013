// https://leetcode-cn.com/problems/combinations/submissions/
export default {
  /**
   * 
   * @param n 最大值
   * @param k 每条记录的长度
   */
  recursion: function  (n, k) {

    // 思路：
    // 每条记录(R): [i, i+1 | i+2 | ... | n ].length === k
    // i 属于 [1, n] 区间
    // 所以递归模板中的 
    // recursion terminator
    // R.length === k 时 -> Resutl.push(R) 记录当前 路径 内容 -> 终止递归并返回 上层 递归栈
    // process current problem
    // 记录 当前位置的 数据 并 进入递归
    // R.push(i)
    // drillDown(i+1)

    // revert the current level status
    // 当前位置为 i 的情况列举完成，清除 当前位置的 i，准备在同位置 使用写一个数值
    // R.pop()

    // 题目限定 从 1开始取值
    // 当record 长度小于等于 0 时，意味着不记录
    // 每条记录因为不允许值重复，所 n >= k
    if (n <= 0 || k <= 0 || k > n) {
      return []
    }

    // 回溯时状态的临时存储
    let temp = [];

    let result = [];

    const combine = (start) => {
      // 当record 的 data 达到长度限制时 终止当前递归
      if (temp.length === k) {
        result.push([...temp]);
        return
      }

      // 当前 i 的取值的范围： 最大值 + 当前已记录的长度 - 记录内容长度上限 + 1
      // +1的原因
      // n 是 值上限 不是 记录内容的长度，且 n的 变化 是从 1开始，不是 0开始（即将长度差转为有效记录数）
      for (let i = start; i <= n - (k - temp.length) + 1; i++) {
        // 记录当前 场景
        temp.push(i);
        combine(i + 1);
        // 清除当前 场景
        temp.pop()
      }
    }

    combine(1);

    return result;
  }
}