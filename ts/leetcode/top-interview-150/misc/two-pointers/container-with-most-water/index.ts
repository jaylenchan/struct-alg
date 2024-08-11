/*
 * @lc app=leetcode.cn id=11 lang=typescript
 * @lcpr version=30204
 *
 * [11] 盛最多水的容器
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function maxArea(height: number[]): number {
  /**
   * 题目意思
   * 给你一组木板列表height，木板的长度是height[i]
   * 每块木板的长度都不一样，让你找出任意两块木板圈起来的矩形区域的面积最大。比如题目中示例1展示的1号位的木板和最后一块木板围起来可形成的矩形区域面积由最后一块木板的高度和两块木板之间的距离相乘而来。
   */

  // 观察左右木板，比较下
  // 如果两块木板中长的一块，往里头挪动，那么矩形的宽一定会变小，而矩形的长：
  // 1、木板长度不变，则矩形面积变小
  // 2、木板长度变长，由于矩形长由短木板的长决定，所以最终矩形面积变小
  // 3、木板长度变短，由于矩形长由短木板的长决定，所以最终矩形面积变小
  // 如果两块木板中短的一块，往里头挪动，那么矩形的宽一定会变小，而矩形的长：
  // 1、木板长度不变，则矩形面积变小
  // 2、木板长度变短，则矩形面积变小
  // 3、木板长度变长，则：
  // 3.1、新木板长度>长木板长度，矩形面积可能变大
  // 3.2、新木板长度 = 长木板长度，矩形面积可能变大
  // 3.3、 新木板长度 < 长木板长度，矩形面积可能变大
  // 综上，比较左右两块木板，谁短谁往里移动，计算新矩形面积，有可能拿到一个更大的矩形面积。因此利用这点可以找到最大面积

  let max = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const width = right - left;

    if (height[left] < height[right]) {
      max = Math.max(max, width * height[left])
      left++;
    }
    else {
      max = Math.max(max, width * height[right])
      right--;
    }
  }

  return max
};
// @lc code=end

/*
// @lcpr case=start
// [1,8,6,2,5,4,8,3,7]\n
// @lcpr case=end

// @lcpr case=start
// [1,1]\n
// @lcpr case=end

 */

export const container_with_most_water = { maxArea };

declare module "ts/leetcode/top-interview-150" {
  interface TopInterview150 {
    /**
     * [11] 盛最多水的容器
     */
    container_with_most_water: {
      maxArea: (height: number[]) => number
    }
  }
}
