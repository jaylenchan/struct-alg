/*
 * @lc app=leetcode.cn id=146 lang=typescript
 * @lcpr version=30204
 *
 * [146] LRU 缓存
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
class LNode {
  constructor(public key: number, public value: number, public prev?: LNode | null, public next?: LNode | null) { }
}

/**
 * 实现双链表：关键点是初始化需要创建两个dummy节点互联，以保证节点的操作一致性。
 * 新增、删除
 */
class LinkedList {
  dummyHead = new LNode(-1, -1);
  dummyTail = new LNode(-1, -1);

  constructor() {
    this.dummyHead.next = this.dummyTail;
    this.dummyTail.prev = this.dummyHead;
  }

  // 采用尾插法: 往链表的结尾添加新节点
  addLast(node: LNode): LNode {
    const tailNode = this.dummyTail.prev;

    tailNode!.next = node;
    node.prev = tailNode;

    node.next = this.dummyTail;
    this.dummyTail.prev = node;

    return node
  }

  remove(node: LNode): LNode {
    const prevNode = node.prev;
    const nextNode = node.next;

    prevNode!.next = nextNode;
    nextNode!.prev = prevNode;

    node.prev = null;
    node.next = null;

    return node;
  }

  removeFirst(): LNode | null {
    const firstNode = this.dummyHead.next!;

    if (firstNode === this.dummyTail) {
      return null;
    }

    return this.remove(firstNode);
  }
}

// lru缓存无论是get还是put，只要拿出来就应该更改对应元素的使用时间顺序
// 拿链表可以做到时间顺序的概念，
// 由于尾插法，所以越是靠近链表头的节点，越是最久没用的；越是靠近链表尾的节点越是最近使用的。
// get的时候，
// 为了达到O(1)操作，我们需要map来存储key和对应的节点，这样我们就可以直接找到对应节点，然后更改节点的时间顺序
// 由于put的时候，
//  （1）可能需要删除最久没用的节点，所以我们需要删除链表头节点。这个操作是O(1)的
//  （2）可能需要更改同一个key的节点值，此时需要找到对应节点删除。但是这个操作是O(n)的不符合条件
// 因此我们需要借助一个更好的链表结构：双链表，做到删除也是O(1)的
class LRUCache {
  list: LinkedList = new LinkedList()
  map: Map<number, LNode> = new Map()
  size = 0

  constructor(public capacity: number) { }

  // 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1
  get(key: number): number {
    const node = this.map.get(key);

    if (!node) {
      return -1;
    }

    this._moveRecentlyUsedToLast(node)

    return node.value;
  }

  // 如果关键字 key 已经存在，则变更其数据值 value ；
  // 如果不存在，则向缓存中插入该组 key-value 。
  // 如果插入操作导致关键字数量超过 capacity ，则应该"逐出最久未使用"的关键字
  put(key: number, value: number): void {
    let node = this.map.get(key);
    // 新增
    if (!node) {
      // 先看下缓存是否已满
      if (this.size === this.capacity) {
        this._removeLeastRecentlyUsed()
      }

      node = this._addNode(key, value)
    }
    // 修改
    else {
      node.value = value;
    }

    this._moveRecentlyUsedToLast(node);
  }

  private _addNode(key: number, value: number): LNode {
    const node = new LNode(key, value);

    this.map.set(key, node);
    this.list.addLast(node);
    this.size++;

    return node;
  }

  private _moveRecentlyUsedToLast(node: LNode): void {
    this.list.remove(node);
    this.list.addLast(node);
  }

  private _removeLeastRecentlyUsed(): void {
    const node = this.list.removeFirst();

    if (node) {
      this.map.delete(node!.key);
      this.size--;
    }
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

export const lru_cache = { LRUCache }

declare module "ts/leetcode/top-interview-150" {
  interface TopInterview150 {
    /**
     * [146] LRU 缓存
     */
    lru_cache: {
      LRUCache: typeof LRUCache
    }
  }
}
