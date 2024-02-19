# 问题
lc[94](https://leetcode.cn/problems/binary-tree-inorder-traversal/)|[二叉树的中序遍历](Tree/[94]二叉树的中序遍历/index.ts)

## 思路

1. 遍历左子树 -> 回到根,执行操作（收集遍历的结果） -> 遍历右子树
2. 递归的终止条件：当前被遍历的树为空时，终止遍历过程

