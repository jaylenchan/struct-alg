/*
 * @lc app=leetcode.cn id=83 lang=typescript
 * @lcpr version=30204
 *
 * [83] 删除排序链表中的重复元素
 */
class ListNode {
  public val: number
  public next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function deleteDuplicates(head: ListNode | null): ListNode | null {
  let cur = head
  while (cur !== null && cur.next !== null) {
    if (cur.val === cur.next.val) {
      let delNode: any = cur.next
      cur.next = delNode.next
      delNode = null
    }
    else {
      cur = cur.next
    }
  }

  return head
}
// @lc code=end

/*
// @lcpr case=start
// [1,1,2]\n
// @lcpr case=end

// @lcpr case=start
// [1,1,2,3,3]\n
// @lcpr case=end

 */
export { deleteDuplicates }
