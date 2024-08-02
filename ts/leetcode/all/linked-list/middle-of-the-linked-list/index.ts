/*
 * @lc app=leetcode.cn id=876 lang=typescript
 * @lcpr version=30204
 *
 * [876] 链表的中间结点
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

function middleNode(head: ListNode | null): ListNode | null {
  // 处理 0 | 1个节点的情况
  if (head === null || head.next === null) {
    return head
  }
  // 处理至少2个节点的情况
  let slow = head.next
  let fast = head.next

  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next!
    fast = fast.next.next
  }

  return slow
}
// @lc code=end

/*
// @lcpr case=start
// [1,2,3,4,5]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,4,5,6]\n
// @lcpr case=end

 */
export { middleNode }
