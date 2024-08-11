/*
 * @lc app=leetcode.cn id=637 lang=typescript
 * @lcpr version=30204
 *
 * [637] 二叉树的层平均值
 */
class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}
// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function averageOfLevels(root: TreeNode | null): number[] {
  // 使用队列来辅助进行二叉树的层序遍历
  // 当队列不为空的时候，不断往队列外拿节点，然后放入左右节点
  // 继续这个过程

  // 问题来了：你怎么知道一层走完了？
  // 方法是我们每次进入大循环的时候，可以认为就是在一层中走动，走多久呢？用queue.length
  // 来决定，在大循环中的queue.length可以代表那层的节点个数。虽然公用的queue，但是利用了
  // queue.length我们确定了一层的节点总数

  const ans: number[] = []
  const queue: TreeNode[] = [];

  queue.push(root!);

  while (queue.length > 0) {
    let levelNodeSize = queue.length;
    const levelSize = levelNodeSize;
    let levelSum = 0;

    while (levelNodeSize > 0) {
      const treeNode = queue.shift()!;

      if (treeNode.left) {
        queue.push(treeNode.left);
      }

      if (treeNode.right) {
        queue.push(treeNode.right);
      }

      levelNodeSize--;

      levelSum += treeNode.val
    }

    ans.push(levelSum / levelSize);
  }

  return ans
};
// @lc code=end

/*
// @lcpr case=start
// [3,9,20,null,null,15,7]\n
// @lcpr case=end

// @lcpr case=start
// [3,9,20,15,7]\n
// @lcpr case=end

 */

export const average_of_levels_in_binary_tree = { averageOfLevels }

declare module "ts/leetcode/top-interview-150" {
  interface TopInterview150 {
    /**
     * [637] 二叉树的层平均值
     */
    average_of_levels_in_binary_tree: {
      averageOfLevels: (root: TreeNode | null) => number[]
      TreeNode: typeof TreeNode
    }
  }
}
