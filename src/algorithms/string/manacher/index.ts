function makeHelpStr(s: string): string {
  let helpstr = '#'
  for (let i = 0; i < s.length; i++) {
    helpstr += `${s[i]}#`
  }
  return helpstr
}

function manacher(s: string): number {
  if (s == null || s.length == 0) return 0

  const helpStr: string = makeHelpStr(s)
  const pArr: number[] = []

  let C = -1
  let R = -1
  let max = -Infinity

  // 枚举从0到helpStr.length-1当做i， 以i为回文中心的回文串的所有情况
  for (let i = 0; i < helpStr.length; i++) {
    // 初始化pArr[i]，初始化含义：以i为当前回文字符串中心，它的回文半径至少有多大
    /**
     * R > i不成立，说明命中情况大类1：i在R外，那以i为回文中心的回文字符串的半径至少就是1，就是i本身对应的字符自己
     * R > i 成立，说明命中情况大类2：i在R内，那么以i为回文中心的回文字符串的半径至少多大，取决于pArr[i'](这里算法算出就是2*C-i这个索引)，以及i到R之间的距离最小的那个
     * 以上R > i直接包含了i在R内的三种情况
     * 小分类1： i'为中心的回文串整个在L,R内，那么此时R-i > pArr[i']，所以下边代码成立，能命中这种情况
     * 小分类2：i'为中心的回文串有部分在L,R外，那么此时R-i < pArr[i'], 代码一样能命中这种情况
     * 小分类3: i'为中心的回文串的左边界直接跟L重叠，那么此时R-i = pArr[i']，代码一样命中这种情况
     * 因此以下代码能够直接命中三种小分类情况，综合就是能够直接命中R > i的所有可能情况
     */
    pArr[i] = R > i ? Math.min(pArr[2 * C - i], R - i) : 1

    // 从回文半径至少能够到达的区域往后一一枚举，以i为中心的回文串，从刚刚算出来的至少有那么长的区域，再继续往两边尝试扩展
    while (i + pArr[i] < helpStr.length && i - pArr[i] > -1) {
      const curLeft = i - pArr[i]
      const curRight = i + pArr[i]

      // 如果扩展成功，回文半径+1
      if (helpStr[curLeft] == helpStr[curRight]) {
        pArr[i]++
      } else {
        // 否则直接break整个逻辑
        break
      }
    }

    // 做完以上操作后，当以i+回文半径已经大于R了，此时说明回文最有边界扩大了，R应该更新,C应该顺带更R一起更新
    if (i + pArr[i] > R) {
      R = i + pArr[i]
      C = i
    }

    max = Math.max(max, pArr[i])
  }

  return max - 1
}

export default manacher
