/*
 * @lc app=leetcode.cn id=234 lang=typescript
 *
 * [234] 回文链表
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

function isPalindrome(head: ListNode | null): boolean {
  if (head == null) return false
  const stack = []
  let cur = head

  while (cur != null) {
    stack.push(cur)
    cur = cur.next
  }

  while (head != null) {
    const node = stack.pop()
    if (node.val != head.val) {
      return false
    }
    head = head.next
  }

  return true
}
// @lc code=end

export default isPalindrome
