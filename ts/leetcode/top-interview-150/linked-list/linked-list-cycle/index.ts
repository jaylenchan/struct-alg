/*
 * @lc app=leetcode.cn id=141 lang=typescript
 * @lcpr version=30204
 *
 * [141] 环形链表
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

function hasCycle(head: ListNode | null): boolean {
  // 用weakset，存储链表节点
  // 你说你没环，那么一定不会多次往set里面存储同一个节点
  // 如果你有环，那么一定会多次往set里面存储同一个节点，此时每次判断是否存在，存在直接返回true
  // 否则你一定会走出循环

  const set = new WeakSet<ListNode>();

  while (head) {
    if (set.has(head)) {
      return true
    }

    set.add(head);
    head = head.next;
  }

  return false
};
// @lc code=end

/*
// @lcpr case=start
// [3,2,0,-4]\n1\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n0\n
// @lcpr case=end

// @lcpr case=start
// [1]\n-1\n
// @lcpr case=end

 */

export const linked_list_cycle = { hasCycle }
