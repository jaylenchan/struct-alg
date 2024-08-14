/*
 * @lc app=leetcode.cn id=39 lang=typescript
 * @lcpr version=30204
 *
 * [39] 组合总和
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function combinationSum(candidates: number[], target: number): number[][] {
  const ans: number[][] = [];

  const set: Set<string> = new Set()

  backtrack(ans, candidates, target, [], 0, set)

  return ans;
};

// 关键点：如何过滤重复的组合？用一个set判断数组排序后的字符串形式，没有才加入答案有直接略过
function backtrack(ans: number[][], candidates: number[], target: number, nums: number[], res: number, set: Set<string>): void {
  // 到啥时候停止：如果找到组合的和等于target就停止。或者组合的和大于target也停止
  if (res > target) {
    return;
  }

  if (res === target) {
    const numsStr = nums.sort().toString()

    if (!set.has(numsStr)) {
      set.add(numsStr)
      ans.push(nums);
    }

    return;
  }

  // 从哪里取：candidates中取，可以无限重复取，意思就是每次都能从开头开始取
  for (let i = 0; i < candidates.length; i++) {
    backtrack(ans, candidates, target, nums.concat(candidates[i]), res + candidates[i], set);
  }
}
// @lc code=end

/*
// @lcpr case=start
// [2,3,6,7]\n7\n
// @lcpr case=end

// @lcpr case=start
// [2,3,5]\n8\n
// @lcpr case=end

// @lcpr case=start
// [2]\n1\n
// @lcpr case=end

 */

export const combination_sum = { combinationSum };

declare module "ts/leetcode/top-interview-150" {
  interface TopInterview150 {
    /**
     * [39] 组合总和
     */
    combination_sum: {
      combinationSum: (candidates: number[], target: number) => number[][]
    }
  }
}
