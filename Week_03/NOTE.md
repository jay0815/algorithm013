## 学习笔记

### 计数排序法

#### 算法实现思路
> 借助索引的顺序 变相 排序

* 根据min、max之间的距离建立索引
  * 目的：限定计数范围
* 标记存在的数据
  * 存在于索引中的数据标记+1。标记的数值，为当前数组中该数据的数量
* 排序
  * 从最小值开始替换原始数组中的数据
  * 当前值存在于索引中时，索引标记为减一，当标记小于等于 0 时，表明该索引已完成排序

```JavaScript
function countingSort(list, min, max) {
  let i;
  let z = 0; // 计数排序时所用的有效索引
  const count = [];

  // for (i = min; i <= max; i++) {
  //   number++;
  //   count[i] = 0;
  // }

  for (i = 0; i < list.length; i++) {
    // count[list[i]]++;
    // 优化创建无意义标识的行为
    // 优化提升 最大值与最小值的差值时间
    // 差值越大 效果越明显
    typeof count[list[i]] === 'undefined' ?
    (count[list[i]] = 1):
    (count[list[i]]++)
  }

  for (i = min; i <= max; i++) {
    // while 循环 解决了 数据多次出现的问题
    while (count[i]-- > 0) {
      list[z++] = i;
    }
  }
  return list;
}

```
__countingSort__
|项目|值|
|---|---|
|最差时间复杂度|O(n+k)|
|最佳时间复杂度|O(n+k)|
|平均时间复杂度|O(n+k)|
|最差空间复杂度|O(n+k)|

#### 递归

* 终结条件(terminator)

* 当前层逻辑 (重复子问题 + 数学归纳法) (process current problem)

* 下探到下一层 (drillDown)

* 清理当层 (revert the current level status)
  * 视情况决定是否需要对部分变量做处理


##### 分治
template
```Javascript
const divide_conquer = (problem, params) => {

  // recursion terminator

  if (problem == null) {

    process_result

    return

  } 

  // process current problem

  subproblems = split_problem(problem, data)

  single_result_list = [];

  for(let i = 0; i < times; i++) {
    single_result_list.push(divide_conquer(subproblem[i], p1))
  }

  ...

  // merge

  result = process_result( ...single_result_list )

  // revert the current level status

}
```

##### 回溯