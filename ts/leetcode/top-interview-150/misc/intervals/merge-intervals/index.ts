/*
 * @lc app=leetcode.cn id=56 lang=typescript
 * @lcpr version=30204
 *
 * [56] 合并区间
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function merge(intervals: number[][]): number[][] {
  // 两个区间在空间上的关系:
  /**
   * 1、区间1被区间2完全包括
   * start2在start1之前，即start2 <= start1;
   * end2在end1之后，即end2 >= end1;
   *
   * 结果就是可以直接用[start2, end2]包括这两段区间
   */

  /**
   * 2、区间1有部分跟区间2重叠
   * start1在start2之前，即start1 <= start2;
   * end2在end1之后，即end2 >= end1;
   *
   * 结果就是可以用[start1, end2]表示这两段区间
   */

  /**
   * 3、区间1跟区间2完全隔离
   * start1在start2之前， 即start1 < start2;
   * end2在end1之后，即end2 > end1;
   *
   * 结果就是可以用[start1, end1],[start2, end2]两段区间表示
   */

  // 先按照区间的start排序，将数组按照升序排列
  // 我们不断循环intervals区间数组，每次取出两个区间，比较他们的start和end
  // 如果两个区间有重叠或者覆盖，我们将合并这两个区间，然后将新区间按原顺序放回intervals数组中，等待继续处理
  // 否则，两个区间就是隔离的，那么我们将前面的区间放入结果中，将后边的区间重新放回interval数组中，等待继续处理
  // 不断重复这个过程，直到intervals数组为空，结束操作。
  intervals.sort((a, b) => a[0] - b[0])

  const ans: number[][] = []

  while (intervals.length) {
    const cur = intervals.shift()!;

    if (intervals.length === 0) {
      ans.push(cur);
      break;
    }

    const next = intervals.shift()!;

    if (cur[1] >= next[0]) {
      if (cur[1] >= next[1]) {
        // 此时就是覆盖[start1, end1]
        intervals.unshift([cur[0], cur[1]])
      }
      else {
        // 此时至少是重叠 [start1, end2]
        intervals.unshift([cur[0], next[1]])
      }
    }
    else {
      // 否则属于隔绝[start1, end1], [start2, end2]
      ans.push(cur)
      intervals.unshift(next)
    }
  }

  return ans;
};
// @lc code=end

/*
// @lcpr case=start
// [[1,3],[2,6],[8,10],[15,18]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,4],[4,5]]\n
// @lcpr case=end

 */

export const merge_intervals = { merge }

declare module "ts/leetcode/top-interview-150" {
  interface TopInterview150 {
    /**
     * [56] 合并区间
     */
    merge_intervals: {
      merge: (intervals: number[][]) => number[][]
    }
  }
}
