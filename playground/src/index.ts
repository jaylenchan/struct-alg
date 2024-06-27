import { BinarySearchTree } from '@tsalg/data-structures/binary-search-tree'
import { quickSort } from '@tsalg/algorithms/sorts'
import { lc189 } from '@tsalg/leetcode/array'

function main() {
  // eslint-disable-next-line no-console
  console.log("🚀 ~ BinarySearchTree:", BinarySearchTree)

  const quickSortNums = [3, 2, 1, 5, 4, 6, 7, 8, 9, 0]
  quickSort(quickSortNums)
  // eslint-disable-next-line no-console
  console.log("🚀 ~ quickSortNums:", quickSortNums)

  const rotateNums = [1, 2, 3, 4, 5, 6, 7]
  lc189.rotate(rotateNums, 3)
  // eslint-disable-next-line no-console
  console.log("🚀 ~ lc189 rotateNums:", rotateNums)
}

main()
