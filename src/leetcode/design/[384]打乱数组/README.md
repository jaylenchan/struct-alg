# 思路

随机算法：遍历数组，来到i，则从i到size - 1 - i 这个区间随机抽一个数，跟i位置交换
i = 0 ， 从0 ~ size-1 - i取一个数，nums[0]交换nums[size-1]
i = 1 ， 从1 ~ size - 1 - i 取一个数，nums[1]交换nums[size -2]
依次类推
