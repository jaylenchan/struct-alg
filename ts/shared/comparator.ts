import type { IComparable } from 'ts/shared/type'

export type Comparator<T> = (a: T, b: T) => number

export class Comparable<T> implements IComparable<T> {
  private _compare: Comparator<T>

  constructor(comparator?: Comparator<T>) {
    this._compare = comparator ?? this._defaultCompare
  }

  public aEqualTob(a: T, b: T): boolean {
    return this._compare(a, b) === 0
  }

  public aLessThanb(a: T, b: T): boolean {
    return this._compare(a, b) === -1
  }

  public aGreaterThanb(a: T, b: T): boolean {
    return this._compare(a, b) === 1
  }

  public aLessThanOrEqualTob(a: T, b: T): boolean {
    return this.aLessThanb(a, b) || this.aEqualTob(a, b)
  }

  public aGreaterThanOrEqualTob(a: T, b: T): boolean {
    return this.aGreaterThanb(a, b) || this.aEqualTob(a, b)
  }

  private _defaultCompare(a: T, b: T): number {
    if (a === b) {
      return 0
    }
    else if (a < b) {
      return -1
    }
    else {
      return 1
    }
  }
}
