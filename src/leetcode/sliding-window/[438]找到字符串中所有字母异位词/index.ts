/*
 * @lc app=leetcode.cn id=438 lang=typescript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
function findAnagrams(s: string, p: string): number[] {
  const targetMap = createTargetMap(p)
  const windowMap = createWindowMap(p)
  let match = 0

  const size = s.length
  const ans: number[] = []

  let left = 0,
    right = 0

  while (right < size) {
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
      if (right - left + 1 == p.length) {
        ans.push(left)
      }
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

  return ans
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
// @lc code=end

export default findAnagrams
