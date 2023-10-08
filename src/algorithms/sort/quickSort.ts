import { swap } from 'tsalg/shared'

export function quickSort(arr: number[]): void {
  sort(arr, 0, arr.length - 1)
}

function sort(nums: number[], left: number, right: number): void {
  if (left > right) return

  const [el, er] = partition(nums, left, right)

  sort(nums, left, el - 1)
  sort(nums, er + 1, right)
}

function partition(nums: number[], left: number, right: number): [number, number] {
  if (left > right) return [-1, -1]
  if (left == right) return [left, right]

  /** ----------随机获取random与right交换---------- */
  const random = left + Math.floor(Math.random() * (right - left + 1)) // [left, right] 的随机索引
  swap(nums, random, right)
  /** ----------随机获取random与right交换---------- */

  let less = left - 1
  let more = right

  const pivot = nums[right]
  let index = left

  while (index < more) {
    if (nums[index] < pivot) {
      swap(nums, index++, ++less)
    } else if (nums[index] > pivot) {
      swap(nums, index, --more)
    } else {
      index++
    }
  }

  swap(nums, more, right)

  return [less + 1, more]
}
