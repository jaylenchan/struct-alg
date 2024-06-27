export function mergeSort(arr: number[]): void {
  sort(arr, 0, arr.length - 1)
}

function sort(arr: number[], left: number, right: number): void {
  // 这里有一种特殊情况：就是arr为空数组，结果就是left = 0, right = -1,这样子利用这个判断条件可以防止arr为空非法排序的情况
  if (left >= right)
    return

  const mid = left + Math.floor((right - left) / 2)
  sort(arr, left, mid)
  sort(arr, mid + 1, right)
  merge(arr, left, mid, right)
}

function merge(arr: number[], left: number, mid: number, right: number): void {
  let i = left
  let j = mid + 1
  let k = 0

  const help: number[] = []

  while (i <= mid && j <= right) {
    if (arr[i] <= arr[j]) {
      help[k] = arr[i]
      k += 1
      i += 1
    }
    else {
      help[k] = arr[j]
      k += 1
      j += 1
    }
  }

  while (i <= mid) {
    help[k] = arr[i]
    k += 1
    i += 1
  }

  while (j <= right) {
    help[k] = arr[j]
    k += 1
    j += 1
  }

  // 最后将help辅助数组拷贝回原来的数组里的同等位置上
  for (let i = 0; i < help.length; i++) {
    arr[left + i] = help[i]
  }
}
