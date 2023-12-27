export class PriorityQueue {
  private _data: number[];
  private _size: number;

  constructor() {
    this._data = [];
    this._size = 0;
  }

  public isEmpty(): boolean {
    return this._size == 0;
  }

  public getSize(): number {
    return this._size;
  }

  public insert(item: number): void {
    this._data[this._size++] = item;
    this._swim(this._size - 1);
  }

  public delMax(): number {
    const max = this._data[0];

    this._swap(0, this._size - 1);
    this._data.pop();
    this._size--;
    this._sink(0);

    return max;
  }

  private _getParentIndex(index: number): number {
    if (index == 0) return 0;
    return Math.floor((index - 1) / 2);
  }

  private _getRightIndex(index: number): number {
    return 2 * index + 1;
  }

  private _getLeftIndex(index: number): number {
    return 2 * index + 2;
  }

  private _swim(index: number): void {
    while (this._less(index, this._getParentIndex(index))) {
      this._swap(index, this._getParentIndex(index));
      index = this._getParentIndex(index);
    }
  }

  private _sink(index: number): void {
    while (this._getLeftIndex(index) < this._size) {
      let maxChildIndex = this._getLeftIndex(index);
      const rightIndex = this._getRightIndex(index);
      if (rightIndex < this._size) {
        maxChildIndex =
          this._data[maxChildIndex] > this._data[rightIndex]
            ? maxChildIndex
            : rightIndex;
      }

      if (this._data[index] > this._data[maxChildIndex]) break;

      this._swap(maxChildIndex, index);
      index = maxChildIndex;
    }
  }

  private _less(i: number, j: number): boolean {
    return this._data[i] < this._data[j];
  }

  private _swap(i: number, j: number): void {
    [this._data[j], this._data[i]] = [this._data[i], this._data[j]];
  }
}
