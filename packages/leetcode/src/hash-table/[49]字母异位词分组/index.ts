/*
 * @lc app=leetcode.cn id=49 lang=typescript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
function groupAnagrams(strs: string[]): string[][] {
  const help = cloneStrs(strs)
  const strMap = new Map<string, number[]>()

  for (let i = 0; i < help.length; i++) {
    const charArray = Array.from(help[i])
    charArray.sort()
    help[i] = charArray.join('')
  }

  for (let i = 0; i < help.length; i++) {
    if (!strMap.has(help[i])) {
      strMap.set(help[i], [i])
    }

    const nums = strMap.get(help[i])!
    if (!nums.includes(i))
      nums.push(i)
    strMap.set(help[i], nums)
  }

  const result = []

  for (const option of strMap) {
    const nums = option[1]

    const ans: string[] = []

    while (nums.length !== 0) {
      const index = nums.pop()!
      ans.push(strs[index])
    }

    result.push(ans)
  }

  return result
}

function cloneStrs(strs: string[]): string[] {
  const help: string[] = []
  for (let i = 0; i < strs.length; i++) {
    help[i] = strs[i]
  }

  return help
}

// @lc code=end

export { groupAnagrams }
