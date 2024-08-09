/*
 * @lc app=leetcode.cn id=15 lang=typescript
 * @lcpr version=30204
 *
 * [15] 三数之和
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function threeSum(nums: number[]): number[][] {
  /**
   * 题目意思
   * 从一个整数数组中找到三个元素值累加和为0的下标，并且
   * 1、这三个下标不能重复。
   * 2、这三个累加和为0的值不能重复记录，比如[-1,0,1]和[0,1,-1]其实是一样的，只是顺序不同而已。
   */

  /**
   * 先将数组排序成非递减（升序或者相邻数字可能一样）有序数组
   */
  nums.sort((a, b) => a - b)

  // 固定一个数字A(loc A)，再利用left和right指针放在固定数字右侧的剩余数组的两侧
  // left和right指针相向而行
  // 如果left + right = 0-(A) 那么记录下对应数值[nums[loc], nums[left], nums[right]]。记录完毕后，由于在固定A的情况下还有可能有left和right符合条件，于是我们继续往让left和right面对面走。但是当我们发现left或者right等于刚刚记录的值，我们继续让left或者right往前走，相当于过滤重复数字。
  // 最后，固定数字A记录完毕，loc往前走，但是同样地，由于刚刚我们已经将A的对应情况全部找出来了，如果发现loc往前走的时候还有跟数字A一样的数字，我们不让loc停下，继续往前走，也是为了过滤重复数字。

  const ans: number[][] = []
  let loc = 0;

  while (loc < nums.length) {
    const target = 0 - nums[loc];

    let left = loc + 1;
    let right = nums.length - 1;

    while (left < right) {
      if (nums[left] + nums[right] === target) {
        ans.push([nums[loc], nums[left], nums[right]]);

        left++;
        right--;

        while (nums[left] === nums[left - 1]) {
          left++;
        }

        while (nums[right] === nums[right + 1]) {
          right--;
        }
      }
      else if (nums[left] + nums[right] > target) {
        right--
      }
      else {
        left++;
      }
    }

    loc++;

    while (nums[loc] === nums[loc - 1]) {
      loc++;
    }
  }

  return ans
};
// @lc code=end

/*
// @lcpr case=start
// [-1,0,1,2,-1,-4]\n
// @lcpr case=end

// @lcpr case=start
// [0,1,1]\n
// @lcpr case=end

// @lcpr case=start
// [0,0,0]\n
// @lcpr case=end

 */

export const three_sum = { threeSum }
