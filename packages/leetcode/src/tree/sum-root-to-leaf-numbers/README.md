# 思路

定义pathSum函数，语义是返回以node为根的数到叶子节点的路径转化的数字总和
base case是节点是叶子节点了
如果非base case，则获取利用公式cur 10 + node.val获取达到当前节点所
转换的数字的大小
递归获取左右子树的路径总和，然后相加起来就是根节点的树的路径总和

## 技巧

 给定字符串"123",求数字的方式就是
 字符串从左往右遍历，依照公式有
 0 10 + 1 = 1
 1 10 + 2 = 12
 1210 + 3 = 123
 let sum = 0;
 sum = sum*10 + curVal