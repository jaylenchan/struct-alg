/*
 * @lc app=leetcode.cn id=142 lang=typescript
 *
 * [142] 环形链表 II
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

function detectCycle(head: ListNode | null): ListNode | null {
  // 总体思路：先判断是否有环 + 找第一个入环节点
  let slow = head
  let fast = head

  while (fast != null && fast.next != null) {
    fast = fast.next.next
    slow = slow.next
    if (slow == fast) {
      fast = head
      while (slow != fast) {
        slow = slow.next
        fast = fast.next
      }
      return slow // 返回环的入口
    }
  }

  return null
}
// @lc code=end

export default detectCycle
