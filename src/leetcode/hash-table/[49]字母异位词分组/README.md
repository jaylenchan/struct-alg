# 思路

1. 克隆一份strs当做help数组
2. 对help数组上的每个str转换为数组后进行排序，然后转换回str重新赋值给help对应位置
3. 定义一个map存放help[i]对应的str在数组help中出现的位置，遍历help数组，记录对应单词出现的索引到数组中
4. 遍历map，然后拿出每一个数组当中的索引，找到strs对应的原str是谁，放入结果ans中
5. 用result分别将每一个ans放入，返回result
