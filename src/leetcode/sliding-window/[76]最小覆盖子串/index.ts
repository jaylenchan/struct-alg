/*
 * @lc app=leetcode.cn id=76 lang=typescript
 *
 * [76] 最小覆盖子串
 */

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
  let left = 0,
    right = 0

  // 增大窗口
  // 2. 不断移动right，增大窗口，使得窗口内具有字符，当窗口内具有目标字符串中的所有字符的时候，停止移动right
  while (right < sourceSize) {
    const letter = s[right]
    if (targetMap.has(letter)) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      let count = windowMap.get(letter)!
      count += 1
      windowMap.set(letter, count)
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      if (count == targetMap.get(letter)!) {
        match += 1
      }
    }

    while (match == targetMap.size) {
      if (right - left < minLen) {
        start = left
        end = right
        minLen = right - left
      }

      // 收缩窗口
      // 3. 开始不断移动left，缩小窗口，使得窗口内踢出左边字符，查看当前窗口是否还满足目标字符串的所有字符，如果不满足，停止移动left
      const letter = s[left]
      if (targetMap.has(letter)) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        let count = windowMap.get(letter)!
        count -= 1
        windowMap.set(letter, count)
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        if (count < targetMap.get(letter)!) {
          match -= 1
        }
      }
      left += 1
    }

    right += 1
  }

  return minLen == Infinity ? '' : s.substring(start, end + 1)
}

function createTargetMap(t: string): Map<string, number> {
  const map = new Map<string, number>()

  for (let i = 0; i < t.length; i++) {
    if (!map.has(t[i])) {
      map.set(t[i], 1)
    } else {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
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

/**
 * 解决方法：滑动窗口
 * 注意：一个单词可能拥有重复的字符，那么要想知道自己已经把一个单词当中的所有字符都拿到了，
 * 就需要对单词中的每一个字符进行计数，查看每个字符在单词中都出现了几次，所以需要哈希表。
 *
 * 问题：如何知道窗口内具有了目标字符串中的所有字符？
 * 答案：利用2个map（一个叫做targetMap, 一个叫做windowMap） +  1个变量match
 *      - 遍历目标字符串，拿到每个字符，放入targetMap中计数（目的：知道一个字符串中的所有字符各有几次，之后窗口中包含的字符+每个字符对应次数就可以知道是不是包含了整个字符串）
 *      - 当遍历待查找的字符串（记住：我们要做的就是在待查找的字符串中找目标字符串中的所有字符能不能被包含）的时候，按如下做：
 *        - 当前遍历到的字符是不是targetMap中的字符，如果是的话加入windowMap中（同时计数+1）
 *        - 当windowMap对该字符计数+1后，判断此时windowMap跟targetMap中的字符数量是不是相等，是的话，说明我们找到了target word中存在的所有该字符，于是match+1
 *
 * 问题：如何知道啥时候要收缩窗口？
 * 答案：当match的值等于targetMap的size的时候，说明target word的所有字符已经被覆盖了，这时候我们开始收缩窗口
 *      - while(match == targetMap.size)收缩窗口，具体操作如下：
 *      - 我们拿到左侧边界字符，如果在windowMap中，那么我们就讲windowMap对应的这个字符计数-1，
 *      - 如果接着发现windowMap这个字符的计数已经小于targetMap中这个字符的计数了，那么match-1，说明不覆盖单词了
 *      - 如果没有windowMap中需要的字符，直接left+1，收缩窗口就好了
 *
 *
 * 思路：
 * 1. 设立窗口，left代表窗口左侧，right代表窗口右侧，窗口区间为[left, right)
 * 2. 不断移动right，增大窗口，使得窗口内具有字符，当窗口内具有目标字符串中的所有字符的时候，停止移动right
 * 3. 开始不断移动left，缩小窗口，使得窗口内踢出左边字符，查看当前窗口是否还满足目标字符串的所有字符，如果不满足，停止移动left
 * 4. 当right移动到了被查看的字符串边界外后，停止循环，此时获取更新的最小覆盖子串，返回最小覆盖子串
 */
// @lc code=end

export default minWindow
