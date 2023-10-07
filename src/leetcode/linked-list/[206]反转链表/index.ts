/*
 * @lc app=leetcode.cn id=206 lang=typescript
 *
 * [206] 反转链表
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

function reverseList(head: ListNode | null): ListNode | null {
  if (head == null) return null
  let newHead

  // 输入一个链表的头部， 返回一个翻转后的链表的尾部
  function _reverseList(head: ListNode): ListNode {
    if (head.next == null) {
      newHead = head
      return head
    }

    const tail = _reverseList(head.next)
    tail.next = head
    head.next = null

    return head
  }

  _reverseList(head)

  return newHead
}

// @lc code=end

export default reverseList
