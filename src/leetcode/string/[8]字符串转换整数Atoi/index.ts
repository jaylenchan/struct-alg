/*
 * @lc app=leetcode.cn id=8 lang=typescript
 *
 * [8] 字符串转换整数 (atoi)
 */
// @lc code=start
function myAtoi(s: string): number {
  // 题目要求1：读入字符串并丢弃无用的前导空格
  s = s.trim()

  let ans = '' // ans包括了特判结果：即前导为空格的字符串可能去除后是空串，结果就是''，转换后是0
  let sign = true

  // 题目要求2： 检查下一个字符（假设还未到字符末尾）为正还是负号，读取该字符（如果有）。 确定最终结果是负数还是正数。 如果两者都不存在，则假定结果为正。
  if (s[0] == '-') sign = false

  // 假定0号位置是正负号，就从1开始遍历，否则从0开始
  let i = ['-', '+'].includes(s[0]) ? 1 : 0

  // 题目要求3： 读入下一个字符，直到到达下一个非数字字符或到达输入的结尾。字符串的其余部分将被忽略。
  while (i != s.length && isNumber(s[i])) {
    ans += s[i++]
  }

  // 题目要求4： 将前面步骤读入的这些数字转换为整数（即，"123" -> 123， "0032" -> 32）。如果没有读入数字，则整数为 0 。必要时更改符号（从步骤 2 开始）。
  let num = sign ? +ans : -+ans

  // 题目要求5： 如果整数数超过 32 位有符号整数范围 [−231,231−1] ，需要截断这个整数，使其保持在这个范围内。具体来说，小于 −231 的整数应该被固定为 −231 ，大于 231−1 的整数应该被固定为 231− 1 。
  if (num > Math.pow(2, 31) - 1) {
    num = Math.pow(2, 31) - 1
  }
  if (num < -Math.pow(2, 31)) {
    num = -Math.pow(2, 31)
  }

  return num
}

/** 根据asc码判断一个字符是否属于数字 */
function isNumber(char: string): boolean {
  const code = char.charCodeAt(0) - '0'.charCodeAt(0)
  return 0 <= code && code <= 9
}
// @lc code=end

export { myAtoi }
