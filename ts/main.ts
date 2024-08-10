import { createInstance } from 'ts/shared/instantiation-service'

import { TopInterview150 } from 'ts/leetcode/top-interview-150'

(async () => {
  const top_interview_150 = await createInstance(TopInterview150, [
    "ts/leetcode/top-interview-150/structures/array-or-string",
  ])

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
})()
