/*
 * @lc app=leetcode.cn id=228 lang=typescript
 * @lcpr version=30204
 *
 * [228] 汇总区间
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function summaryRanges(nums: number[]): string[] {
  if (!nums.length)
    return []

  /**
   * 题目意思：
   * 给你一个按照升序排列的整数数组，里头的元素都是互不相同的
   * 要你给出一个最小有序的区间范围列表，列表中的每一段区间所表示到的整数一定在nums中。也就是说，相当于让你把nums当作一条绳子，在nums整数不连续的地方打个结，这样一来就形成了几段区间，返回这几段区间。
   */

  const ranges: string[] = [];
  let start = 0;

  while (start < nums.length) {
    let loc = start + 1;

    while (isClose(nums[loc - 1], nums[loc])) {
      loc++;
    }

    if (loc - start === 1) {
      ranges.push(`${nums[start]}`);
    }
    else {
      ranges.push(`${nums[start]}->${nums[loc - 1]}`)
    }

    start = loc;
  }

  return ranges
};

function isClose(n: number, m: number): boolean {
  return m - n === 1
}
// @lc code=end

/*
// @lcpr case=start
// [0,1,2,4,5,7]\n
// @lcpr case=end

// @lcpr case=start
// [0,2,3,4,6,8,9]\n
// @lcpr case=end

 */

export const summary_ranges = { summaryRanges }

declare module "ts/leetcode/top-interview-150" {
  interface TopInterview150 {
    /**
     * [228] 汇总区间
     */
    summary_ranges: {
      summaryRanges: (nums: number[]) => string[]
    }
  }
}
