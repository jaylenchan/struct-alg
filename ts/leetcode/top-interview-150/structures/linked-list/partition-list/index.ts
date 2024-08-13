/*
 * @lc app=leetcode.cn id=86 lang=typescript
 * @lcpr version=30204
 *
 * [86] 分隔链表
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

function partition(head: ListNode | null, x: number): ListNode | null {
  // 根据题意粗暴重建链表
  // 小的到一个链表，大的到一个链表
  // 最后合并两个链表

  if (!head) {
    return null;
  }

  const dummyNode1 = new ListNode(-1);
  let tail1 = dummyNode1;
  let dummyNode2: ListNode | null = new ListNode(-2);
  let tail2 = dummyNode2;

  let cur: ListNode | null = head;

  while (cur) {
    if (cur.val < x) {
      tail1.next = new ListNode(cur.val);
      tail1 = tail1.next;
    }
    else {
      tail2.next = new ListNode(cur.val);
      tail2 = tail2.next;
    }

    cur = cur.next;
  }

  tail1.next = dummyNode2.next;
  dummyNode2 = null;

  return dummyNode1.next;
};
// @lc code=end

/*
// @lcpr case=start
// [1,4,3,2,5,2]\n3\n
// @lcpr case=end

// @lcpr case=start
// [2,1]\n2\n
// @lcpr case=end

 */

export const partition_list = { partition }

declare module "ts/leetcode/top-interview-150" {
  interface TopInterview150 {
    /**
     * [86] 分隔链表
     */
    partition_list: {
      partition: (head: ListNode | null, x: number) => ListNode | null
    }
  }
}
