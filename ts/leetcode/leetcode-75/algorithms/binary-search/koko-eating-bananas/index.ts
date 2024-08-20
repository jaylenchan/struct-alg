/*
 * @lc app=leetcode.cn id=875 lang=typescript
 * @lcpr version=30204
 *
 * [875] 爱吃香蕉的珂珂
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
// function minEatingSpeed(piles: number[], h: number): number {
//     /**
//      * 题目意思：
//      * piles代表香蕉堆列表，总共有n堆香蕉。piles[i]代表第i堆有多少根香蕉
//      * 每小时要从piles选一堆来吃掉k根香蕉。但是如果发现这堆香蕉少于要吃的k就全吃完，一根不留。
//      * 问题：给你h小时吃完piles里头的所有香蕉，每个小时选择吃k根香蕉，那么k为多少？
//      */

//     /**
//      * 1小时吃的香蕉 <= k，因为有可能有一堆里头不满k，但是也要花1小时。
//      * 我们先尝试从 k = 1开始吃起，看下能否在h小时内吃完。
//      * 如果吃不完，说明不符合要求。我们再尝试从 k = 2开始，看看在h小时内是否能吃完。
//      * 以此类推，我们看下k等于几开始能够在h小时内吃完，找到第一个符合条件的k值即可。
//      */

//     let k = 1;

//     while (true) {
//         if (canFinish(k, h, piles)) {
//             return k;
//         }

//         k++;
//     }
// };

// 上面的方法让k从1开始增加，这样子一步步走显得很慢。
// 因为k最小就是1，最大是这几堆香蕉里头最多的那一堆的数量。
// 所以k的取值范围是1 <= k <= Math.max(...piles)
// 因此其实可以用二分查找减少查找的轮数
function minEatingSpeed(piles: number[], h: number): number {
  /**
   * 题目意思：
   * piles代表香蕉堆列表，总共有n堆香蕉。piles[i]代表第i堆有多少根香蕉
   * 每小时要从piles选一堆来吃掉k根香蕉。但是如果发现这堆香蕉少于要吃的k就全吃完，一根不留。
   * 问题：给你h小时吃完piles里头的所有香蕉，每个小时选择吃k根香蕉，那么k为多少？
   */

  /**
   * 1小时吃的香蕉 <= k，因为有可能有一堆里头不满k，但是也要花1小时。
   * 我们先尝试从 k = 1开始吃起，看下能否在h小时内吃完。
   * 如果吃不完，说明不符合要求。我们再尝试从 k = 2开始，看看在h小时内是否能吃完。
   * 以此类推，我们看下k等于几开始能够在h小时内吃完，找到第一个符合条件的k值即可。
   */

  let left = 1;
  let right = Math.max(...piles);

  while (left <= right) {
    const k = (left + right) >> 1;

    if (canComplete(k, h, piles)) {
      right = k - 1; // 只是搜索到符合条件的大小，有可能还有更小的边界值，所以要继续往左边跑
    }
    else {
      left = k + 1;
    }
  }

  return left;
};

// 计算在k的情况下，吃完香蕉的总耗时和h的对比情况，看看香蕉是否能在当前k和h条件内吃完。
function canComplete(k: number, h: number, piles: number[]) {
  let usedHour = 0;

  for (let i = 0; i < piles.length; i++) {
    // 香蕉数量 < k ，则花1小时吃完
    if (piles[i] <= k) {
      usedHour += 1;
    }
    // 香蕉数量 > k，则花这堆香蕉除去k的总耗时，向上取整
    else {
      usedHour += Math.ceil(piles[i] / k)
    }

    if (usedHour > h) {
      return false;
    }
  }

  return true;
}
// @lc code=end

/*
// @lcpr case=start
// [3,6,7,11]\n8\n
// @lcpr case=end

// @lcpr case=start
// [30,11,23,4,20]\n5\n
// @lcpr case=end

// @lcpr case=start
// [30,11,23,4,20]\n6\n
// @lcpr case=end

 */

export const koko_eating_bananas = { minEatingSpeed }

declare module "ts/leetcode/leetcode-75" {
  interface Leetcode75 {
    /**
     * [875] 爱吃香蕉的珂珂
     */
    koko_eating_bananas: {
      minEatingSpeed: (piles: number[], h: number) => number
    }
  }
}
