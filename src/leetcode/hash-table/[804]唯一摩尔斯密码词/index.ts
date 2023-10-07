/*
 * @lc app=leetcode.cn id=804 lang=typescript
 *
 * [804] 唯一摩尔斯密码词
 */

// @lc code=start
function uniqueMorseRepresentations(words: string[]): number {
  // prettier-ignore
  const codes = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];

  const hashSet = new Set<string>()

  for (const word of words) {
    let res = ''
    for (let i = 0; i < word.length; i++) {
      const offset = word[i].charCodeAt(0) - 'a'.charCodeAt(0)
      res += codes[offset]
    }

    hashSet.add(res)
  }

  return hashSet.size
}
// @lc code=end

export default uniqueMorseRepresentations
