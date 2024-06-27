/*
 * @lc app=leetcode.cn id=100 lang=typescript
 *
 * [100] 相同的树
 */

// @lc code=start

import type { TreeNode } from '../models/TreeNode'

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p === null && q === null) {
    return true
  }
  if (p === null || q === null) {
    return false
  }
  if (p.val === q.val) {
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
  }
  else {
    return false
  }
}
// @lc code=end

export { isSameTree }
