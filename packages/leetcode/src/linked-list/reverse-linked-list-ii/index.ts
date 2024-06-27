/*
 * @lc app=leetcode.cn id=92 lang=typescript
 * @lcpr version=30204
 *
 * [92] 反转链表 II
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

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
  const dummyHead = new ListNode(-1)
  dummyHead.next = head

  let prevL: ListNode | null = dummyHead
  let nodeL: ListNode | null = dummyHead
  let nodeR: ListNode | null = dummyHead
  let nextR: ListNode | null = dummyHead

  for (let i = 1; i !== right + 1; i++) {
    if (i < left)
      prevL = prevL && prevL.next
    if (i <= left)
      nodeL = nodeL && nodeL.next
    nodeR = nodeR && nodeR.next
    if (nodeR)
      nextR = nodeR.next
  }

  if (!nodeL || !prevL) {
    return head
  }

  nodeR = reverse(nodeL, right - left + 1)
  nodeR.next = nextR
  prevL.next = nodeL
  if (prevL === dummyHead)
    head = dummyHead.next

  function reverse(node: ListNode, level: number): ListNode {
    // 反转的区间在链表中间，则反转到level = 1,说明就剩下1个node了，无需继续反转。（但这个时候，node.next可能是有的）
    if (level === 1) {
      nodeL = node
      return node
    }

    if (node.next) {
      // 只有下一个节点存在，才允许递归反转
      const prev = reverse(node.next, level - 1)
      prev.next = node
      node.next = null // 由于原来的节点的next其实是指向prev的，所以要清空next，否则循环引用
    }

    return node
  }

  return head
}
// @lc code=end

/*
// @lcpr case=start
// [1,2,3,4,5]\n2\n4\n
// @lcpr case=end

// @lcpr case=start
// [5]\n1\n1\n
// @lcpr case=end

 */
export { reverseBetween }
