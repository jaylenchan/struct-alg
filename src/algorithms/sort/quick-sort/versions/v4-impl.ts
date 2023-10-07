export default class QuickSortV4 {

  public static partition(
    arr: number[],
    left: number,
    right: number
  ): [number, number] {
    const randomIndex = left + Math.floor(Math.random() * (right - left + 1)) // [left, right] 的随机索引
    QuickSortV4._swap(arr, randomIndex, left) // 将randomIndex 和 left 位置的元素做交换

    // 循环不变量：arr[left+1, less] < v;  arr[less+1, i - 1] = v;  arr[more, right] > v;
    let less = left
    let i = left + 1
    let more = right + 1

    while (i < more) {
      if (arr[i] < arr[left]) {
        less += 1
        QuickSortV4._swap(arr, i, less)
        i += 1
      } else if (arr[i] > arr[left]) {
        more -= 1
        QuickSortV4._swap(arr, i, more)
      } else {
        // arr[i] == arr[left]
        i += 1
      }
    }

    QuickSortV4._swap(arr, left, less)

    return [less - 1, more]
  }

  public static sort(arr: number[]): void {
    QuickSortV4._quickSort(arr, 0, arr.length - 1)
  }

  private static _quickSort(arr: number[], left: number, right: number): void {
    if (left >= right) return

    const [newRight, newLeft] = QuickSortV4.partition(arr, left, right)
    QuickSortV4._quickSort(arr, left, newRight)
    QuickSortV4._quickSort(arr, newLeft, right)
  }

  private static _swap(arr: number[], i: number, j: number): void {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }

}
