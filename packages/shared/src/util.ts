export function swap<T>(arr: T[], i: number, j: number): void {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

/**
 * - 作用：返回小写英文字符相对'a'的偏移量
 * - 用途：比如实现一个数组从0-25放置26个小写字母，通过此方法可以获得一个字母用来快速定位数组中的索引
 * - 例子：`ASCIndex('b') = 1` 因为`b`在`a`后1位（`a`是0）
 */
export function ASCIndex(letter: string): number {
  if (letter.charCodeAt(0) - 'a'.charCodeAt(0) < 0 || letter.charCodeAt(0) - 'a'.charCodeAt(0) > 25)
    return 0

  return letter.charCodeAt(0) - 'a'.charCodeAt(0)
}
