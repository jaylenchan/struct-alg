/*
 * @lc app=leetcode.cn id=82 lang=typescript
 *
 * [82] 删除排序链表中的重复元素 II
 */
export { deleteDuplicates }
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

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (head == null || head.next == null) return head

  // 能走到这里，说明至少两个点
  const dummyHead = new ListNode(-1)
  dummyHead.next = head

  let prev = dummyHead
  let cur = head
  let duplicate = Infinity

  // eslint-disable-next-line no-constant-condition
  while (true) {
    if (cur == null) break
    if (cur.next && cur.next.val == cur.val) {
      duplicate = cur.val
      cur = cur.next
    } else {
      if (cur && duplicate == cur.val) {
        cur = cur.next
        prev.next = cur
      } else {
        prev = cur
        cur = cur.next
      }
    }
  }

  return dummyHead.next
}
// @lc code=end

/**
 * #思路#
 * 1. 特判：如果头结点不存在或者整个链表只有一个节点，直接返回，不需要操作
 * 2. 如果能够进行操作，说明至少有两个node。
 * 3. 如果一开始node就相同，我们把指针设置在head就错了，所以我们需要预处理下，创建一个dummy节点兼容这种情况。
 * 4. 我们设置两个指针，一个指针prev指向dummy，另一个指向头节点head，形成我们第一次的前后指针逻辑
 * 5. 为了判断重复数字，我们增加一个变量duplicate表示这个数字是重复的，方便我们接下来判断并进行操作
 * 6. 不断进行while循环：
 *    - 情况1： 当前cur若已经走到链表末尾完了，cur为null时循环终止
 *    - 情况2： 当前cur没走完，cur的next节点存在，同时next节点的值跟cur的一样：不断让cur往前走，直到cur的next不存在或者存在但是值不相等的时候停
 *    - 情况3： 当前cur没走完，cur的next不存在或者节点值不等：
 *             - 情况3-1：此时由于cur还是重复数字的节点，因此判断duplicate是否等于cur，让cur跳下一步，因为题目要求去除所有同数字节点，一个不留
 *             - 情况3-2：其他情况，如果节点值不等，直接让prev和cur依次往右走一步
 * 7. 返回dummyHead.next
 */
