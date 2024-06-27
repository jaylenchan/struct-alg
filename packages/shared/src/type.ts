export interface IComparable<T> {
  aEqualTob: (a: T, b: T) => boolean
  aLessThanb: (a: T, b: T) => boolean
  aGreaterThanb: (a: T, b: T) => boolean
  aLessThanOrEqualTob: (a: T, b: T) => boolean
  aGreaterThanOrEqualTob: (a: T, b: T) => boolean
}
