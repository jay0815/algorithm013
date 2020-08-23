export default {
  /**
   * 思路：
   * 当前顾客给 5$, 则账本第一页 5$ 数量 +1
   * 当前顾客给 10$, 则账本第一页 5$ 数量 -1, 账本第二页 10$ 数量 +1
   * 当前顾客给 20$, 有两种记账模式
   *  有 10$ 时，优先 给 10$ + 5 $: 则账本第一页 5$ 数量 -1, 账本第二页 10$ 数量 -1
   *  没有 10$ 时，则给 3张 5$: 则账本第一页 5$ 数量 -3
   * 如果 5$ 数量 或者 10$ 数量 小于 0 时 则说明 零钱不够了，无法给当前顾客 找零
   */
  nomarl: function(bills: number[]) {
    let accountBook = [0, 0];
    while (bills.length) {
      let customer = bills.shift();
      if (customer === 5) {
        accountBook[0]++;
      } else if (customer === 10) {
        accountBook[0]--, accountBook[1]++;
      } else {
        if (accountBook[1] > 0) {
          accountBook[0]--, accountBook[1]--;
        } else {
          accountBook[0] -= 3;
        }
      }
      if (accountBook[0] < 0 || accountBook[1] < 0) {
        return false
      }
    }
    return true;
  }
}