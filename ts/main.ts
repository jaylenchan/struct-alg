import { BinarySearchTree } from 'ts/structures/binary-search-tree/impl/binary-search-tree'
import { quickSort } from 'ts/algorithms/sorts/impl/quick-sort'
import { rotate as rotate_array } from 'ts/leetcode/all/array/rotate-array'

function main() {
  const bst = new BinarySearchTree<number>()
  // eslint-disable-next-line no-console
  console.log("🚀 ~ BinarySearchTree:", bst)

  const quickSortNums = [11, 32, 23, 41, 75, 60, 71]
  quickSort(quickSortNums)
  // eslint-disable-next-line no-console
  console.log("🚀 ~ quickSortNums:", quickSortNums)

  const rotateNums = [11, 32, 23, 41, 75, 60, 71]
  rotate_array(rotateNums, 3)
  // eslint-disable-next-line no-console
  console.log("🚀 ~ lc189 rotateNums:", rotateNums)
}

main()
