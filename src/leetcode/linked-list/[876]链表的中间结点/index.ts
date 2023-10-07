/*
 * @lc app=leetcode.cn id=876 lang=typescript
 *
 * [876] 链表的中间结点
 */

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
  if (head == null || head.next == null) {
    return head
  }
  // 处理至少2个节点的情况
  let slow = head.next
  let fast = head.next

  while (fast.next != null && fast.next.next != null) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    slow = slow.next!
    fast = fast.next.next
  }

  return slow
}
// @lc code=end

export default middleNode
