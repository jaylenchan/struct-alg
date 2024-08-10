/*
 * @lc app=leetcode.cn id=169 lang=typescript
 * @lcpr version=30204
 *
 * [169] 多数元素
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function majorityElement(nums: number[]): number {
  // 为了记录重复次数，我们使用了map记录下每个数组及其重复的次数
  // 我们再设计一个变量max记录着当前的最大出现重复次数，这是为了取map中数字的次数时与当前max比较，如果比max小，说明至少目前为止这个数字肯定不是最大的
  // 我们再设计一个majorityNum表示到目前为止出现最多次数的元素
  const n = nums.length / 2
  const map = new Map<number, number>()
  let max = 0;
  let majorityNum = nums[0]

  // 实际操作就是我们遍历nums，尝试从map拿出nums[i]的对应出现次数
  // 如果不存在我们设置新的num及其出现次数1，
  // 如果是存在的我们更新count
  // 当然做完这些还不够，我们需要知道增加完count后，跟当前的max比是否超过了，没超过说明到目前为止这个数字还不足以成为最多出现次数的数
  // 完毕之后我们更新下max，如果超过了那么此时count成为新的max，没有还是老的照旧。
  for (let i = 0; i < nums.length; i++) {
    let count = map.get(nums[i])
    if (!count) {
      count = 1
      map.set(nums[i], count)
    }
    else {
      map.set(nums[i], ++count)
    }

    majorityNum = count > max ? nums[i] : majorityNum
    max = count > max ? count : max
  }

  return majorityNum
};
// @lc code=end

/*
// @lcpr case=start
// [3,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [2,2,1,1,1,2,2]\n
// @lcpr case=end

 */

export const majority_element = { majorityElement }
