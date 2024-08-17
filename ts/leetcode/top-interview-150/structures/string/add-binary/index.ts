/*
 * @lc app=leetcode.cn id=67 lang=typescript
 * @lcpr version=30204
 *
 * [67] 二进制求和
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function addBinary(a: string, b: string): string {
  // 让a、b的长度保持一致，短的补0先
  while (a.length !== b.length) {
    if (a.length < b.length) {
      a = `0${a}`;
    }
    else {
      b = `0${b}`;
    }
  }

  let ans = ""
  let carry = 0;
  // 模拟自然思考二进制的加法，从右边开始一个个将两个二进制数加起来
  // 比如 0 + 1= 1 ， 1 + 1 = 0，需要进位1
  let loc = a.length - 1;

  while (loc >= 0) {
    const sum = Number.parseInt(a[loc]) + Number.parseInt(b[loc]) + carry;
    // 通过%运算可以判断n进制进位后的当前位数的数值
    // 10进制，如果相加为12，需要进位1，那么2可以通过12%10拿出来
    // 通过/运算可以将进位的值拿出
    // 10进制，如果想得到进位，比如12，可以通过12/10拿出来
    // 因此类推，2进制的求和也是类似的，通过%运算拿出当前位的最终值，通过/运算拿出当前位的进位
    ans = String(sum % 2) + ans;
    carry = Math.floor(sum / 2);

    loc--;
  }

  if (carry > 0) {
    ans = String(carry) + ans;
  }

  return ans;
};
// @lc code=end

/*
// @lcpr case=start
// "11"\n"1"\n
// @lcpr case=end

// @lcpr case=start
// "1010"\n"1011"\n
// @lcpr case=end

 */

export const add_binary = { addBinary }

declare module "ts/leetcode/top-interview-150" {
  interface TopInterview150 {
    /**
     * [67] 二进制求和
     */
    add_binary: {
      addBinary: (a: string, b: string) => string
    }
  }
}
