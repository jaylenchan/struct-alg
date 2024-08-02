# 思路

滑动窗口

1. 定义左右指针L和R，让R从左往右遍历整个字符串
2. 每次遍历取出当前字符ch，然后查看set是否有这个ch：

   - 没有：直接跳过判断while，set加入ch，然后更新len
   - 有：进入while判断循环，不断从set中删除s[L]，直到set不再有ch。然后set加入ch，更新len

3. 重复直到R===s.length，返回结果
