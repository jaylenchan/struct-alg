/*
 * @lc app=leetcode.cn id=76 lang=typescript
 * @lcpr version=30204
 *
 * [76] 最小覆盖子串
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function minWindow(s: string, t: string): string {
  const targetMap = createTargetMap(t)
  const windowMap = createWindowMap(t)
  let match = 0

  const sourceSize = s.length
  let start = 0
  let end = 0
  let minLen = Infinity

  // 1. 设立窗口，left代表窗口左侧，right代表窗口右侧，窗口区间为[left, right)
  let left = 0;
  let right = 0

  // 增大窗口
  // 2. 不断移动right，增大窗口，使得窗口内具有字符，当窗口内具有目标字符串中的所有字符的时候，停止移动right
  while (right < sourceSize) {
    const letter = s[right]
    if (targetMap.has(letter)) {
      let count = windowMap.get(letter)!
      count += 1
      windowMap.set(letter, count)

      if (count === targetMap.get(letter)!) {
        match += 1
      }
    }

    while (match === targetMap.size) {
      if (right - left < minLen) {
        start = left
        end = right
        minLen = right - left
      }

      // 收缩窗口
      // 3. 开始不断移动left，缩小窗口，使得窗口内踢出左边字符，查看当前窗口是否还满足目标字符串的所有字符，如果不满足，停止移动left
      const letter = s[left]
      if (targetMap.has(letter)) {
        let count = windowMap.get(letter)!
        count -= 1
        windowMap.set(letter, count)

        if (count < targetMap.get(letter)!) {
          match -= 1
        }
      }
      left += 1
    }

    right += 1
  }

  return minLen === Infinity ? '' : s.substring(start, end + 1)
}

function createTargetMap(t: string): Map<string, number> {
  const map = new Map<string, number>()

  for (let i = 0; i < t.length; i++) {
    if (!map.has(t[i])) {
      map.set(t[i], 1)
    }
    else {
      map.set(t[i], map.get(t[i])! + 1)
    }
  }

  return map
}

function createWindowMap(t: string): Map<string, number> {
  const map = new Map<string, number>()

  const targetMap = createTargetMap(t)

  for (const [letter] of targetMap) {
    map.set(letter, 0)
  }

  return map
}
// @lc code=end

/*
// @lcpr case=start
// "ADOBECODEBANC"\n"ABC"\n
// @lcpr case=end

// @lcpr case=start
// "a"\n"a"\n
// @lcpr case=end

// @lcpr case=start
// "a"\n"aa"\n
// @lcpr case=end

 */
export { minWindow }
