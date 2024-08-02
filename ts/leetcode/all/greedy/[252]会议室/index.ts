/*
 * @lc app=leetcode.cn id=252 lang=typescript
 *
 * [252] 会议室
 */

// @lc code=start
function canAttendMeetings(intervals: number[][]): boolean {
  intervals.sort((a, b) => a[1] - b[1])

  let timeline = 0
  let count = 0

  for (let i = 0; i < intervals.length; i++) {
    if (intervals[i][0] >= timeline) {
      count++
      timeline = intervals[i][1]
    }
  }
  return count === intervals.length
}
// @lc code=end

export { canAttendMeetings }
