import type { IQueue } from './type';

class LNode<E> {
  public value: E;
  public next: LNode<E> | null;

  constructor(value: E, next?: LNode<E> | null) {
    this.value = value;
    this.next = next || null;
  }
}

export class LinkedListQueue<E> implements IQueue<E> {
  private _size: number;
  private _head: LNode<E> | null; // 指向头结点
  private _tail: LNode<E> | null; // 指向尾结点

  constructor() {
    this._size = 0;
    this._head = null;
    this._tail = null;
  }

  public getSize(): number {
    return this._size;
  }

  public isEmpty(): boolean {
    return this._size == 0;
  }

  // 入队：从链表的尾部入队
  public enqueue(e: E): void {
    if (this._tail == null) {
      // 空链表
      this._tail = new LNode(e);
      this._head = this._tail;
    } else {
      // 非空链表
      const newTail = new LNode(e);
      this._tail.next = newTail;
      this._tail = newTail;
    }

    this._size += 1;
  }

  public dequeue(): E {
    if (this.isEmpty()) {
      throw new Error('Cannot dequeue from an empty queue.');
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const target = this._head!;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this._head = this._head!.next;
    target.next = null;

    if (this._head == null) {
      this._tail = this._head;
    }

    return target.value;
  }

  public getFront(): E {
    if (this.isEmpty()) {
      throw new Error('Cannot getFront from an empty queue.');
    }

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this._head!.value;
  }

  public toString(): string {
    let res = 'Queue: front  ';
    let cur = this._head;

    while (cur != null) {
      res += `${cur.value}->`;
      cur = cur.next;
    }

    res += 'NULL _tail';

    return res;
  }
}
