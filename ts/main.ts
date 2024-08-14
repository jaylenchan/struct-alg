import { createInstance } from 'ts/shared/instantiation-service';
import { buildTreeFromArray } from 'ts/shared/tree';
import { buildListFromArray, buildRandomListFromArray } from 'ts/shared/list'
import { TopInterview150 } from 'ts/leetcode/top-interview-150';

(async () => {
  const top_interview_150 = await createInstance(TopInterview150, [
    "ts/leetcode/top-interview-150/algorithms/binary-tree-bfs",
    "ts/leetcode/top-interview-150/algorithms/backtracking",
    "ts/leetcode/top-interview-150/structures/array-or-string",
    "ts/leetcode/top-interview-150/structures/binary-tree",
    "ts/leetcode/top-interview-150/structures/binary-search-tree",
    "ts/leetcode/top-interview-150/structures/hashmap",
    "ts/leetcode/top-interview-150/structures/linked-list",
    "ts/leetcode/top-interview-150/structures/stack",
    "ts/leetcode/top-interview-150/misc/intervals",
    "ts/leetcode/top-interview-150/misc/sliding-window",
    "ts/leetcode/top-interview-150/misc/two-pointers",
  ]);

  // ===ts/leetcode/top-interview-150/algorithms/binary-tree-bfs===
  top_interview_150.average_of_levels_in_binary_tree.averageOfLevels(buildTreeFromArray([3, 9, 20, null, null, 15, 7]));
  top_interview_150.binary_tree_level_order_traversal.levelOrder(buildTreeFromArray([3, 9, 20, null, null, 15, 7]));
  top_interview_150.binary_tree_right_side_view.rightSideView(buildTreeFromArray([1, 2, 3, null, 5, null, 4]));
  top_interview_150.binary_tree_zigzag_level_order_traversal.zigzagLevelOrder(buildTreeFromArray([3, 9, 20, null, null, 15, 7]));
  top_interview_150.count_complete_tree_nodes.countNodes(buildTreeFromArray([1, 2, 3, 4, 5, 6]));

  // ===ts/leetcode/top-interview-150/algorithms/backtracking===
  top_interview_150.letter_combinations_of_a_phone_number.letterCombinations("23");
  top_interview_150.permutations.permute([1, 2, 3]);
  top_interview_150.generate_parentheses.generateParenthesis(3);
  top_interview_150.combinations.combine(4, 2);
  top_interview_150.combination_sum.combinationSum([2, 3, 6, 7], 7)

  // ===ts/leetcode/top-interview-150/structures/array-or-string===
  top_interview_150.best_time_to_buy_and_sell_stock.maxProfit([7, 1, 5, 3, 6, 4]);
  top_interview_150.best_time_to_buy_and_sell_stock_ii.maxProfit([7, 1, 5, 3, 6, 4]);
  top_interview_150.find_the_index_of_the_first_occurrence_in_a_string.strStr("hello", "ll");
  top_interview_150.gas_station.canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]);
  top_interview_150.length_of_last_word.lengthOfLastWord("Hello World");
  top_interview_150.longest_common_prefix.longestCommonPrefix(["flower", "flow", "flight"]);
  top_interview_150.majority_element.majorityElement([3, 2, 3]);
  top_interview_150.merge_sorted_array.merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
  top_interview_150.product_of_array_except_self.productExceptSelf([1, 2, 3, 4]);
  top_interview_150.remove_duplicates_from_sorted_array.removeDuplicates([1, 1, 2]);
  top_interview_150.rotate_array.rotate([1, 2, 3, 4, 5, 6, 7], 3);
  top_interview_150.remove_duplicates_from_sorted_array_ii.removeDuplicates([1, 1, 1, 2, 2, 3]);

  // ===ts/leetcode/top-interview-150/structures/binary-tree===
  top_interview_150.construct_binary_tree_from_inorder_and_postorder_traversal.buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]);
  top_interview_150.construct_binary_tree_from_preorder_and_inorder_traversal.buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]);
  top_interview_150.invert_binary_tree.invertTree(buildTreeFromArray([4, 2, 7, 1, 3, 6, 9]));
  top_interview_150.maximum_depth_of_binary_tree.maxDepth(buildTreeFromArray([3, 9, 20, null, null, 15, 7]));
  top_interview_150.same_tree.isSameTree(buildTreeFromArray([1, 2, 3]), buildTreeFromArray([1, 2, 3]));
  top_interview_150.symmetric_tree.isSymmetric(buildTreeFromArray([1, 2, 2, 3, 4, 4, 3]));
  top_interview_150.sum_root_to_leaf_numbers.sumNumbers(buildTreeFromArray([1, 2, 3]));
  top_interview_150.path_sum.hasPathSum(buildTreeFromArray([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]), 22);

  // ===ts/leetcode/top-interview-150/structures/binary-search-tree===
  top_interview_150.minimum_absolute_difference_in_bst.getMinimumDifference(buildTreeFromArray([4, 2, 6, 1, 3]));
  top_interview_150.kth_smallest_element_in_a_bst.kthSmallest(buildTreeFromArray([3, 1, 4, null, 2]), 1);

  // ===ts/leetcode/top-interview-150/structures/hashmap===
  top_interview_150.contains_duplicate_ii.containsNearbyDuplicate([1, 2, 3, 1], 3);
  top_interview_150.happy_number.isHappy(19);
  top_interview_150.ransom_note.canConstruct("a", "b");
  top_interview_150.two_sum.twoSum([2, 7, 11, 15], 9);
  top_interview_150.valid_anagram.isAnagram("anagram", "nagaram");

  // ===ts/leetcode/top-interview-150/structures/linked-list===
  top_interview_150.add_two_numbers.addTwoNumbers(buildListFromArray([2, 4, 3]), buildListFromArray([5, 6, 4]));
  top_interview_150.copy_list_with_random_pointer.copyRandomList(buildRandomListFromArray([[7, null], [13, 0], [11, 4], [10, 2], [1, 0]]))
  top_interview_150.linked_list_cycle.hasCycle(buildListFromArray([3, 2, 0, -4]));
  top_interview_150.merge_two_sorted_lists.mergeTwoLists(buildListFromArray([1, 2, 4]), buildListFromArray([1, 3, 4]));
  top_interview_150.remove_duplicates_from_sorted_list_ii.deleteDuplicates(buildListFromArray([1, 2, 3, 3, 4, 4, 5]));
  top_interview_150.remove_nth_node_from_end_of_list.removeNthFromEnd(buildListFromArray([1, 2, 3, 4, 5]), 2);
  Reflect.construct(top_interview_150.lru_cache.LRUCache, [2])
  top_interview_150.partition_list.partition(buildListFromArray([1, 4, 3, 2, 5, 2]), 3);

  // ===ts/leetcode/top-interview-150/structures/stack===
  top_interview_150.valid_parentheses.isValid("()");

  // ===ts/leetcode/top-interview-150/misc/intervals===
  top_interview_150.summary_ranges.summaryRanges([0, 1, 2, 4, 5, 7]);

  // ===ts/leetcode/top-interview-150/misc/two-pointers===
  top_interview_150._3_sum.threeSum([-1, 0, 1, 2, -1, -4]);
  top_interview_150.container_with_most_water.maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
  top_interview_150.is_subsequence.isSubsequence("abc", "ahbgdc");
  top_interview_150.two_sum_ii_input_array_is_sorted.twoSum([2, 7, 11, 15], 9);
  top_interview_150.valid_palindrome.isPalindrome("abba");
})()
