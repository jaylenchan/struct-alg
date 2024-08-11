/*
 * @lc app=leetcode.cn id=138 lang=typescript
 * @lcpr version=30204
 *
 * [138] 随机链表的复制
 */
class _Node {
  val: number;
  next: _Node | null;
  random: _Node | null;

  constructor(val?: number, next?: _Node, random?: _Node) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    this.random = random === undefined ? null : random;
  }
}
// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     next: _Node | null
 *     random: _Node | null
 *
 *     constructor(val?: number, next?: _Node, random?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */

function copyRandomList(head: _Node | null): _Node | null {
  /**
   * 题目意思：给定一个链表，每个节点包含一个额外增加的随机指针，该指针可以指向链表中的任何节点或空节点。让你拷贝它
   * 关键是不要被random给整懵了。链表正常拷贝就行，额外使用map的映射关系来处理random的指向问题。
   * 因为不管怎么样，其实你的脑海里就是在想：既然我知道了原链表中这个节点的random，怎么通过random找到新的copy random？
   * 方法就是你拷贝新节点的时候，将所有原节点和拷贝节点记录起来，因为random本来也是原节点，
   * 这样一来，你只要再次同时遍历新旧链表，从旧的链表中找到旧的random，再根据map通过原节点找到拷贝节点就行了。
   * 这样就可以处理新链表random的指向问题了
   */

  const copyMap = new WeakMap<_Node, _Node>()

  const dummy = new _Node()
  let newListTail = dummy;
  let oldListHead = head;

  // 第一轮遍历，复制链表，并记录新旧节点的映射关系
  while (head) {
    const copyNode = new _Node(head.val);

    newListTail.next = copyNode;
    newListTail = newListTail.next;

    copyMap.set(head, copyNode);

    head = head.next;
  }

  // 第二轮同时遍历，找原链表的random，再通过这个random到map找新链表的复制节点。通过这种方式将新链表的random一一指定
  let newListHead = dummy.next;

  while (oldListHead && newListHead) {
    // 这里有random才复制，不要将其放在while判断了
    // 链表正常走，看到有random就复制就对了
    if (oldListHead.random) {
      const copyRandom = copyMap.get(oldListHead.random)!;
      newListHead.random = copyRandom;
    }

    oldListHead = oldListHead.next;
    newListHead = newListHead.next;
  }

  return dummy.next;
};
// @lc code=end

/*
// @lcpr case=start
// [[7,null],[13,0],[11,4],[10,2],[1,0]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,1],[2,1]]\n
// @lcpr case=end

// @lcpr case=start
// [[3,null],[3,0],[3,null]]\n
// @lcpr case=end

 */

export const copy_list_with_random_pointer = { copyRandomList }

declare module "ts/leetcode/top-interview-150" {
  interface TopInterview150 {
    /**
     * [138] 随机链表的复制
     */
    copy_list_with_random_pointer: {
      copyRandomList: (head: _Node | null) => _Node | null
    }
  }
}
