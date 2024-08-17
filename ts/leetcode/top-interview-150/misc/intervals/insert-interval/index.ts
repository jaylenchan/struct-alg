/*
 * @lc app=leetcode.cn id=57 lang=typescript
 * @lcpr version=30204
 *
 * [57] 插入区间
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function insert(intervals: number[][], newInterval: number[]): number[][] {
  // 解决方法跟[56] 合并区间一样的

  const ans: number[][] = [];

  intervals.push(newInterval);
  intervals.sort((a, b) => a[0] - b[0]);

  while (intervals.length > 0) {
    const cur = intervals.shift()!;

    // 两两区间对比，只有一个区间了，就没必要处理了，直接加入ans
    if (intervals.length === 0) {
      ans.push(cur);
      break;
    }

    const next = intervals.shift()!;

    // [前区间的尾部]和[后区间的头部]对比
    // 发现[前区间的尾部]大于[后区间的头部]的话，说明这两段区间至少是有重叠部分的
    // 前区间 3<----->5
    // 后区间    4<------>8

    // 继续尝试判断，[前区间的尾部]对比[后区间的尾部]
    // 发现[前区间的尾部]大于[后区间的尾部]的话，说明这两段区间是有覆盖关系的
    // 前区间 3<------------>8
    // 后区间     4<-------->8

    // 做完处理后，由于后边可能还有区间有相同类似的情况，那么我们应该将新区间按照原样的顺序放回intervals
    if (cur[1] >= next[0]) {
      let newInterval = [cur[0], next[1]];

      if (cur[1] >= next[1]) {
        newInterval = [cur[0], cur[1]];
      }

      intervals.unshift(newInterval);
    }
    else {
      // 否则如果[前区间的尾部]小于[后区间的头部],那么肯定两段区间是隔离的
      // 因此前区间我们可以完全确定了
      // 但是后区间由于跟之后的区间是相邻的，还需要继续处理，我们同样按照原样顺序放回intervals

      intervals.unshift(next);
      ans.push(cur);
    }
  }

  return ans;
};
// @lc code=end

/*
// @lcpr case=start
// [[1,3],[6,9]]\n[2,5]\n
// @lcpr case=end

// @lcpr case=start
// [[1,2],[3,5],[6,7],[8,10],[12,16]]\n[4,8]\n
// @lcpr case=end

 */

export const insert_interval = { insert }

declare module "ts/leetcode/top-interview-150" {
  interface TopInterview150 {
    /**
     * [57] 插入区间
     */
    insert_interval: {
      insert: (intervals: number[][], newInterval: number[]) => number[][]
    }
  }
}
