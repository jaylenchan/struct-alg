import { createInstance } from 'ts/shared/instantiation-service';
import { Leetcode75 } from 'ts/leetcode/leetcode-75';

(async () => {
  const leetcode_75 = await createInstance(Leetcode75, [
    "ts/leetcode/leetcode-75/algorithms/binary-search",
  ])

  leetcode_75.guess_number_higher_or_lower.guessNumber(10);
  leetcode_75.successful_pairs_of_spells_and_potions.successfulPairs([5, 1, 3], [1, 2, 3, 4, 5], 7);
})()
