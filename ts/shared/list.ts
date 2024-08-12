class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

export function buildListFromArray(arr: number[]): ListNode | null {
  if (arr.length === 0)
    return null;

  const head = new ListNode(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }

  return head;
}

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

export function buildRandomListFromArray(arr: [number, number | null][]): _Node | null {
  if (arr.length === 0)
    return null;

  const nodes: _Node[] = arr.map(([val]) => new _Node(val));

  for (let i = 0; i < arr.length; i++) {
    const [_, randomIndex] = arr[i];
    if (i < arr.length - 1) {
      nodes[i].next = nodes[i + 1];
    }
    if (randomIndex !== null) {
      nodes[i].random = nodes[randomIndex];
    }
  }

  return nodes[0];
}

export function parseListToArray(head: _Node | null): [number, number | null][] {
  if (head === null)
    return [];

  const nodes: _Node[] = [];
  const nodeToIndex = new Map<_Node, number>();

  let current = head;
  let index = 0;

  // 遍历链表，记录每个节点及其索引
  while (current !== null) {
    nodes.push(current);
    nodeToIndex.set(current, index);
    current = current.next!;
    index++;
  }

  // 构建结果数组
  const result: [number, number | null][] = nodes.map((node) => {
    const randomIndex = node.random ? nodeToIndex.get(node.random)! : null;
    return [node.val, randomIndex];
  });

  return result;
}
