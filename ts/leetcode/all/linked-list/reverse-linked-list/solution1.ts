/*
 * @lc app=leetcode.cn id=206 lang=typescript
 * @lcpr version=30204
 *
 * [206] 反转链表
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

function reverseList(head: ListNode | null): ListNode | null {
  // 如果head为空或者head.next为null，直接返回head
  if (!head || !head.next)
    return head;

  // 从这里开始至少有两个节点
  // 相当于三个指针一前一后在往前边走
  // 最重要的是设置prev为null，否则要想半天解决出现环的问题
  let prev = null;
  let next = head.next as ListNode | null;

  while (next) {
    head.next = prev;
    prev = head;
    head = next;
    next = head.next;
  }

  // next为空了，此时head一定还是存在的，将它与prev链接起来
  head.next = prev

  return head
}
// @lc code=end

/*
// @lcpr case=start
// [1,2,3,4,5]\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

 */
export { reverseList }
