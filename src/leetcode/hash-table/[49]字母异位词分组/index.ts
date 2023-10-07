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

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const nums = strMap.get(help[i])!
    if (!nums.includes(i)) nums.push(i)
    strMap.set(help[i], nums)
  }

  const result = []

  for (const option of strMap) {
    const nums = option[1]

    const ans: string[] = []

    while (nums.length != 0) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
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

/**
 * 思路
 * 1. 克隆一份strs当做help数组
 * 2. 对help数组上的每个str转换为数组后进行排序，然后转换回str重新赋值给help对应位置
 * 3. 定义一个map存放help[i]对应的str在数组help中出现的位置，遍历help数组，记录对应单词出现的索引到数组中
 * 4. 遍历map，然后拿出每一个数组当中的索引，找到strs对应的原str是谁，放入结果ans中
 * 5. 用result分别将每一个ans放入，返回result
 */
// @lc code=end

export default groupAnagrams
