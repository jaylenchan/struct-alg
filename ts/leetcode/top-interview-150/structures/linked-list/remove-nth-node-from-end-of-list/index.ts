/*
 * @lc app=leetcode.cn id=19 lang=typescript
 * @lcpr version=30204
 *
 * [19] 删除链表的倒数第 N 个结点
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  // 倒数第1，就是正数第total-0
  // 倒数第2，就是正数第total-1
  // 倒数第3，就是正数第total-2
  // 倒数第4，就是正数第total-3
  // 倒数第i，就是正数第total-(i-1)
  // 倒数第n，就是正数第total-(n-1)
  // 知道total是多少，然后算出正数是第几个，删除正数第几个
  // 为了解决可能删除[1]，n=1的情况，需要搞一个dummy节点兼容这种情况
  // 让我们的算法一致不需要额外判断这种类似情况。最后返回dummy.next;

  const dummy = new ListNode()
  dummy.next = head;

  let cur = dummy;
  let total = 0;

  while (cur.next) {
    total++;
    cur = cur.next;
  }

  // 找到第i个节点的前一个节点i-1
  const i = total - (n - 1);
  let loc = 0;
  cur = dummy;

  while (cur.next) {
    if (loc === i - 1) {
      cur.next = cur.next.next;
      break;
    }

    loc++;
    cur = cur.next;
  }

  return dummy.next;
};
// @lc code=end

/*
// @lcpr case=start
// [1,2,3,4,5]\n2\n
// @lcpr case=end

// @lcpr case=start
// [1]\n1\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n1\n
// @lcpr case=end

 */

export const remove_nth_node_from_end_of_list = { removeNthFromEnd }
