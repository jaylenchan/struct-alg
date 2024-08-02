/*
 * @lc app=leetcode.cn id=21 lang=typescript
 * @lcpr version=30204
 *
 * [21] 合并两个有序链表
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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  const dummyNode = new ListNode(-1, null)
  let tail = dummyNode

  while (list1 && list2) {
    const v1 = list1.val
    const v2 = list2.val

    if (v2 > v1) {
      tail.next = list1
      list1 = list1.next
      tail = tail.next
    }
    else {
      tail.next = list2
      list2 = list2.next
      tail = tail.next
    }
  }

  if (list1) {
    tail.next = list1
  }

  if (list2) {
    tail.next = list2
  }

  return dummyNode.next
}
// @lc code=end

/*
// @lcpr case=start
// [1,2,4]\n[1,3,4]\n
// @lcpr case=end

// @lcpr case=start
// []\n[]\n
// @lcpr case=end

// @lcpr case=start
// []\n[0]\n
// @lcpr case=end

 */
export { mergeTwoLists }
