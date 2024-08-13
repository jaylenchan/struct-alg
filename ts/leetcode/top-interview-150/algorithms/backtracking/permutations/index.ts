/*
 * @lc app=leetcode.cn id=46 lang=typescript
 * @lcpr version=30204
 *
 * [46] 全排列
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function permute(nums: number[]): number[][] {
  const ans: number[][] = [];

  backtracking(nums, ans, [], 0)

  return ans;
};

function backtracking(nums: number[], ans: number[][], res: number[], start: number): void {
  if (start === nums.length) {
    ans.push(res);

    return;
  }

  for (let i = 0; i < nums.length; i++) {
    if (res.includes(nums[i])) {
      continue;
    }

    backtracking(nums, ans, res.concat(nums[i]), start + 1);
  }
}
// @lc code=end

/*
// @lcpr case=start
// [1,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [0,1]\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

 */

export const permutations = { permute }

declare module "ts/leetcode/top-interview-150" {
  interface TopInterview150 {
    /**
     * [46] 全排列
     */
    permutations: {
      permute: (nums: number[]) => number[][]
    }
  }
}
