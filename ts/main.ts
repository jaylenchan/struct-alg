import { createInstance } from 'ts/shared/instantiation-service';

import { TopInterview150 } from 'ts/leetcode/top-interview-150';

(async () => {
  const top_interview_150 = await createInstance(TopInterview150, [
    "ts/leetcode/top-interview-150/algorithms/binary-tree-bfs",
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

  top_interview_150.contains_duplicate_ii.containsNearbyDuplicate([1, 2, 3, 1], 3);
  top_interview_150.happy_number.isHappy(19);
  top_interview_150.ransom_note.canConstruct("a", "b");
  top_interview_150.two_sum.twoSum([2, 7, 11, 15], 9);
  top_interview_150.valid_anagram.isAnagram("anagram", "nagaram");

  top_interview_150.valid_parentheses.isValid("()");

  top_interview_150.summary_ranges.summaryRanges([0, 1, 2, 4, 5, 7]);

  top_interview_150._3_sum.threeSum([-1, 0, 1, 2, -1, -4]);
  top_interview_150.container_with_most_water.maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
  top_interview_150.is_subsequence.isSubsequence("abc", "ahbgdc");
  top_interview_150.two_sum_ii_input_array_is_sorted.twoSum([2, 7, 11, 15], 9);
  top_interview_150.valid_palindrome.isPalindrome("abba");
})()
