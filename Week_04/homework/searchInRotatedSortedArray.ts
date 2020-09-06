export default {
  // 思路：
  // 找到旋转的位置 进行记录 用以区分 查找区间
  // 然后再二分查找
  recovery: function (nums: number[], target: number) {

    let n = nums.length;
    let left = 0;
    let right = n - 1;
    let mid;

    while (left <= right) {
      mid = (left + right) >> 1
      // 查找 第一个 没有 递增的点
      if (nums[left] < nums[mid]) {
        left = mid;
        if (nums[mid] >= nums[mid + 1]) {
          left += 1;
          right = n - 1
          break;
        }
      } else if (nums[left] >= nums[mid]) {
        left += 1;
        if (left === mid) {
          right = n - 1
          break
        }
      }
    }

    if(left > right) {
      // 当前 数组 单调递增 无 旋转
      left = 0;

    }else {

      if (target >= nums[0] && target <= nums[left - 1]) {
        right = left - 1
        left = 0
      }
    }

    while (left <= right) {
      mid = Math.ceil((left + right) / 2);
      if (nums[left] === target) {
        return left
      }
      if (nums[mid] === target) {
        return mid
      }
      if (nums[right] === target) {
        return right
      }
      if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return -1;
  },
  // 思路：
  // 将 找到旋转的位置 的逻辑 包含在二分查找内部
  divide: function (nums: number[], target: number) {
    if (!nums || nums.length === 0) {
      return -1;
    }
    let left = 0;
    let right = nums.length - 1;
    let mid;
    while (left <= right) {
      mid = Math.ceil((left + right) / 2);
      // 首尾中全部验证
      if (nums[mid] === target) return mid;
      if (nums[left] === target) return left;
      if (nums[right] === target) return right;
      // 说明前半部分有序
      if (nums[left] < nums[mid]) {
        // 说明目标值存在于有序部分，将末尾设置为mid
        // 继续执行二分查找
        if (nums[left] < target && target < nums[mid]) {
          right = mid - 1;
        } else {
          // 说明目标值存在于后半段
          left = mid + 1;
        }
      } else {
        // 说明后半部分有序
        // 判断目标值是否在后半部分
        if (nums[mid] < target && target < nums[right]) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
    }
    return -1;
  }
}

// 可以将 ** mid 跟 left ** 的值进行对比

// 当 mid > left 时，说明 left ~mid 有序
// mid ~right 无序

// 当 mid < left 时，说明 mid ~right 有序
// left ~mid 无序

// [4, 5, 6, 0, 1, 2]
// [0]
// []
// [1,2,3]
// [4, 5, 6, 7, 0, 1, 2]
// [5,6,7,8,9,1,2,3,4]
// [4, 5, 6, 7, 8, 9, 1, 2, 3]

function findUnordered(nums) {
  let n = nums.length;
  let left = 0;
  let right = n - 1;
  while (left <= right) {
    let mid = (left + right) >> 1
    // 查找 第一个 没有 递增的点
    if (nums[left] < nums[mid]) {
      left = mid;
      if (nums[mid] >= nums[mid+1]) {
        left += 1;
        right = n - 1
        break;
      }
    } else {
      if(left+1 === mid) {
        left += 1;
        right = n - 1
        break
      }else {
        right = mid;
      }
    }
  }

  return left;
}