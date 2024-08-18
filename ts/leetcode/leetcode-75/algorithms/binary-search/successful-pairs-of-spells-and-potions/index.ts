/*
 * @lc app=leetcode.cn id=2300 lang=typescript
 * @lcpr version=30204
 *
 * [2300] 咒语和药水的成功对数
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start

// 按照题目意思，最简单的方式就是：遍历每一个咒语能量，拿着这份咒语能量，再遍历每一份药水能量相乘这份咒语能量。如果符合success我们就让pairs[i]的值加1。直到遍历结束。但是暴力超时。
// function successfulPairs(spells: number[], potions: number[], success: number): number[] {
//   const pairs: number[] = new Array(spells.length).fill(0)

//   for (let i = 0; i < spells.length; i++) {
//     const spell = spells[i];

//     for (let j = 0; j < potions.length; j++) {
//       const potion = potions[j];

//       if (potion * spell >= success) {
//         pairs[i] = pairs[i] + 1;
//       }
//     }
//   }

//   return pairs;
// };

// 改变下思路，我们先排序药水能量列表，按照升序排，那么我们可以使用二分查找的方式来找到符合条件的药水能量。
function successfulPairs(spells: number[], potions: number[], success: number): number[] {
  potions.sort((a, b) => a - b);

  // 二分查找函数，找到第一个使得 spell * potion >= success 的 potion
  function binarySearch(spell: number): number {
    let left = 0;
    let right = potions.length - 1;
    const target = success / spell

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (potions[mid] >= target) {
        // 虽然我们找到了满足的地方，但是我们需要继续向左搜索，寻找第一个满足条件的元素。
        // 所以说如果我们在这里找到第一个满足条件的元素时立即 break，我们可能会错过更靠前的满足条件的元素
        // NOTE:明确最关键的一点，二分搜索里头，首先满足条件的元素并不一定是整体里头第一个满足条件的元素
        right = mid - 1;
      }
      else {
        // 如果没有满足之前，让left一直往右跑，尝试跑到撞上right
        left = mid + 1;
      }
    }

    return left;
  }

  const result: number[] = [];

  // 对每个 spell 进行二分查找，并计算成功配对的数量
  for (const spell of spells) {
    const index = binarySearch(spell);
    result.push(potions.length - index);
  }

  return result;
}
// @lc code=end

/*
// @lcpr case=start
// [5,1,3]\n[1,2,3,4,5]\n7\n
// @lcpr case=end

// @lcpr case=start
// [3,1,2]\n[8,5,8]\n16\n
// @lcpr case=end

 */

export const successful_pairs_of_spells_and_potions = { successfulPairs }

declare module "ts/leetcode/leetcode-75" {
  interface Leetcode75 {
    /**
     * [2300] 咒语和药水的成功对数
     */
    successful_pairs_of_spells_and_potions: {
      /**
       * ### 题目意思
       *
       * 返回每一瓶药水分别能够匹配多少瓶药水，用一个数组pairs表示。比如示例1答案是[4,0,3]， pairs[0]代表跟第0个咒语匹配的药水有4瓶，pairs[1]代表跟第1个咒语匹配的药水有0瓶，pairs[2]代表跟第2个咒语匹配的药水有3瓶。
       * 因此这也是pairs数组的长度跟药水能量的列表相同都是n的原因。
       * 其中：
       * - 一个长度为n的spells数组代表咒语能量列表
       * - 一个长度为m的potions数组代表药水能量列表
       *
       * ### 具体解读
       *
       * 需求：从咒语能量列表和药水能量列表中找成功匹配的咒语和药水的组合
       * 如果 咒语能量 乘以 药水能量 >= 题目给出的success整数
       * 那么，我们认为这份咒语和这份药水就是一个匹配成功的组合。
       *
       * 我们要做的事就是找到所有满足要求的咒语和药水的组合：
       * 比如，第一个咒语需要能量是5，那么它跟药水能量列表的每份能量相乘后是[5,10,15,20,25]，题目给出只要这个列表的元素有超过success = 7的数，那么就认为匹配成功了。因此10，15，20，25都匹配成功了，数量是4。也代表着这份咒语和药水能匹配成功的有4瓶药水。
       *
       */
      successfulPairs: (spells: number[], potions: number[], success: number) => number[]
    }
  }
}
