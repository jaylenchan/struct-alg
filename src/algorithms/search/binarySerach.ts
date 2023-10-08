export function binarySearch(data: number[], target: number): number {
  if (data.length == 0) return -1
  return search(data, 0, data.length - 1, target)
}

function search(data: number[], l: number, r: number, target: number): number {
  while (l <= r) {
    const mid = Math.floor(l + (r - l) / 2)
    if (data[mid] == target) {
      return mid
    } else if (data[mid] > target) {
      r = mid - 1
    } else {
      l = mid + 1
    }
  }

  return -1
}

export function binarySearchR(data: number[], target: number): number {
  if (data.length == 0) return -1
  return searchR(data, 0, data.length - 1, target)
}

function searchR(data: number[], l: number, r: number, target: number): number {
  if (l > r) return -1

  const mid = Math.floor(l + (r - l) / 2)
  if (data[mid] == target) {
    return mid
  } else if (data[mid] > target) {
    return searchR(data, l, mid - 1, target)
  } else {
    return searchR(data, mid + 1, r, target)
  }
}
