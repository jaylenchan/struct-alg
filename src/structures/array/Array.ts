import type { IArray } from './type';

export class JArray<E> implements IArray<E> {
  private _data: E[];
  private _size: number;

  constructor(capacity?: number) {
    this._data = new Array(capacity || 10).fill(new Object() as E);
    this._size = 0;
  }

  public swap(i: number, j: number): void {
    if (i < 0 || j < 0 || i >= this._size || j > this._size) {
      throw new Error('Index is illegal.');
    }
    const temp = this._data[i];
    this._data[i] = this._data[j];
    this._data[j] = temp;
  }

  public getSize(): number {
    return this._size;
  }

  public getCapacity(): number {
    return this._data.length;
  }

  public isEmpty(): boolean {
    return this._size === 0;
  }

  // 增
  public add(index: number, e: E): void {
    if (index < 0 || index > this._size) {
      throw new Error('Add failed. Require index >= 0 and index <= _size. ');
    }

    if (this._size === this._data.length) {
      // throw new Error('AddLast failed. Array is full. ');
      this._resize(2 * this._data.length);
    }

    for (let i = this._size - 1; i >= index; i--) {
      this._data[i + 1] = this._data[i];
    }
    this._data[index] = e;
    this._size += 1;
  }

  // 增
  public addLast(e: E): void {
    this.add(this._size, e);
  }

  // 增
  public addFirst(e: E): void {
    this.add(0, e);
  }

  // 查
  public contains(e: E): boolean {
    for (let i = 0; i < this._size; i++) {
      if (this._data[i] == e) {
        return true;
      }
    }
    return false;
  }

  // 查
  public find(e: E): number {
    for (let i = 0; i < this._size; i++) {
      if (this._data[i] == e) {
        return i;
      }
    }
    return -1;
  }

  // 查
  public get(index: number): E {
    if (index < 0 || index >= this._size) {
      throw new Error('Get failed. Index is illegal.');
    }
    return this._data[index];
  }

  // 查
  public getFirst(): E {
    return this.get(0);
  }

  // 查
  public getLast(): E {
    return this.get(this._size - 1);
  }

  // 改
  public set(index: number, e: E): void {
    if (index < 0 || index >= this._size) {
      throw new Error('Set failed. Index is illegal.');
    }
    this._data[index] = e;
  }

  // 删
  public remove(index: number): E {
    if (index < 0 || index >= this._size) {
      throw new Error('Get failed. Index is illegal.');
    }
    const result = this._data[index];

    for (let i = index + 1; i < this._size; i++) {
      this._data[i - 1] = this._data[i];
    }
    this._size -= 1;

    // this._data.length  == 1 的时候，数组只有一个元素，用除法得到就是0
    // 所以修改容量这里如果直接resize(0)会出bug，解决方式就是加个判断，如果只有1个容量，不需要修改容量变小
    if (this._size == this._data.length / 4 && this._data.length / 2 != 0) {
      this._resize(this._data.length / 2);
    }

    return result;
  }

  // 删
  public removeFirst(): E {
    return this.remove(0);
  }

  // 删
  public removeLast(): E {
    return this.remove(this._size - 1);
  }

  // 删
  public removeElement(e: E): void {
    const index = this.find(e);
    if (index != -1) {
      this.remove(index);
    }
  }

  // 修改容量
  private _resize(newCapacity: number): void {
    const newData = new Array(newCapacity).fill(new Object() as E);
    for (let i = 0; i < this._size; i++) {
      newData[i] = this._data[i];
    }
    this._data = newData;
  }
}
