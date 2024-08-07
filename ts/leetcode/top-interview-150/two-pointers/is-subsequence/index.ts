/*
 * @lc app=leetcode.cn id=392 lang=typescript
 * @lcpr version=30204
 *
 * [392] 判断子序列
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function isSubsequence(s: string, t: string): boolean {
  if (s.length > t.length) {
    return false;
  }

  let i = 0;
  let start = 0

  // 遍历s的每个char，我们再到t中去一个个char看
  // 当我们在t中找到一样的char后，需要更改t的起始遍历位置，这么做是为了保证序列顺序。如果我们在t中找到了就跳出，更新start，进行下一次的循环
  // 之后我们不断从新的起始位置开始看t找s的char就好了
  // 但注意一点的是，如果说t都看完了，但是s还没枚举完，说明不可能有这样的序列了，直接返回false。否则我们就接着枚举s的char就好了

  while (i < s.length) {
    let j = start;
    while (j < t.length) {
      if (t[j] === s[i]) {
        start = j + 1

        break;
      }

      j++;
    }

    if (j === t.length && i !== s.length) {
      return false
    }

    i++;
  }

  return true;
};
// @lc code=end

/*
// @lcpr case=start
// "abc"\n"ahbgdc"\n
// @lcpr case=end

// @lcpr case=start
// "axc"\n"ahbgdc"\n
// @lcpr case=end

 */

export const is_subsequence = { isSubsequence }
