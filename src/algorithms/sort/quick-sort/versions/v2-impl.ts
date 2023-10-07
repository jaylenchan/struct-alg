export default class QuickSortV2 {

  public static partition(arr: number[], left: number, right: number): number {
    // arr[left+1, j] < v    arr[j+1, i-1]
    const randomIndex = left + Math.floor(Math.random() * (right - left + 1)) // [left, right] 的随机索引
    QuickSortV2._swap(arr, randomIndex, left) // 将randomIndex 和 left 位置的元素做交换

    const pivot = arr[left] // 现在这里的标定点就是随机值，而不是一定是一开始最左边的元素了，因为已经经过了交换
    let j = left

    for (let i = left + 1; i <= right; i++) {
      if (arr[i] < pivot) {
        j += 1
        QuickSortV2._swap(arr, i, j)
      }
    }

    QuickSortV2._swap(arr, left, j)

    return j
  }

  public static sort(arr: number[]): void {
    QuickSortV2._quickSort(arr, 0, arr.length - 1)
  }

  private static _quickSort(arr: number[], left: number, right: number): void {
    if (left >= right) return

    const pivot = QuickSortV2.partition(arr, left, right)
    QuickSortV2._quickSort(arr, left, pivot - 1)
    QuickSortV2._quickSort(arr, pivot + 1, right)
  }

  private static _swap(arr: number[], i: number, j: number): void {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }

}
