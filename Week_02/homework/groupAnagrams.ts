export default {
  memorize: function (strs: string[]) {
    // 思路：
    // 对每个元素 转成 数组后 快排, 作为 uuid
    // 新出现元素 排在 record 最后一个 位置
    // Map 结构 记录 当前 uuid 与 uuid 在 record 中的位置

    const record: string[][] = [];
    const dir = new Map();
    let str: string | undefined;

    strs.forEach((i) => {
       str = i.split('').sort().toString();
       if(dir.has(str)) {
           record[dir.get(str)].push(i);
       }else {
           record[record.length] = [ i ];
           dir.set(str, record.length - 1);
       }
    });
    // 清除内存
    str = void 0;
    dir.clear();
    return record;
  }
}
