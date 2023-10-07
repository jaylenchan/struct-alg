## 前缀和

### 一维前缀和

计算连续子数组的和，很容想到可以使用前缀和（Prefix Sum）的方式。

`prefixSum[n]`代表数组的前 n 项的和（类比与数学当中的数列前 N 项和）

```typescript
// 求数列前N项和
Sn = A1 + A2 + .. + An

// 求数组前N项和
prefixSum[n] = nums[0] + nums[1] + .. + nums[n-1]
```

`prefixSum`常初始化为`nums.length+1`长度的数组

```typescript
// nums
// 0 1 2 3
;[1, 2, 3, 4][
  // prefixSum
  // 0 1 2 3 4
  (0, 1, 3, 6, 10)
]
```

数列当中求第 n 项 An 有公式`Sn - Sn-1`

nums 当中求第 n 项 nums[n-1]也有公式`prefixSum[n] - prefixSum[n-1]`，比如这里是`第2项，nums[2-1] = nums[1] = 2 = prefixSum[2] - prefixSum[1] = 3 -1`

```typescript
数列当中，
S5 - S2  = 数列第3项 到 第5项的和
= (A1 + A2 + A3 + A4 + A5) - (A1 + A2)
= A3 + A4 + A5

nums当中，
prefixSum[5] - prefixSum[2] = nums第3项 到 第5项的和 = nums[2] - nums[4]
= (nums[0] + nums[1] + nums[2] + nums[3] + nums[4]) - (nums[0] + nums[1])
= nums[2] + nums[3] + nums[4]

// 设i= 2, j=4，如果要求数组2,4这个区间（左闭右闭）的和，只需要用prefixSum[4+1] - prefixSum[2]
// 即求数组[i,j]的和，只需要前缀和求prefixSum[j+1] - prefixSum[i]
```

### 二维前缀和

图见文件：`matrix-prefix-sum.drawio`

- 如何求从`(0,0)`点出发到`(2,2)`点的这块矩形中所有格的值的和？

  ```typescript
  /**
    我们用prefixSum[i][j]表示从(0,0)点到(i,j)点所构成的矩形中所有格子的值的和
    则prefixSum[2][2]就表示从(0,0)点出发到(2,2)点所构成的矩形中所有格子的值的和
    
    关键点在于：从(0,0)点出发
    
    于是我们想要通过类似的子问题的求解就能够找到prefixSum[2][2]的解，通过观察我们发现：
    我们只要求出prefixSum[2][1] + prefixSum[1][2] - prefixSum[1][1]最后加上matrix[2][2]就可以得到prefixSum[2][2]的解
    
    所以有prefixSum[2][2] = prefixSum[2][1] + prefixSum[1][2] - prefixSum[1][1] + matrix[2][2]
  */
  ```

  ```typescript
  /**
    推广开来，求prefixSum[row][col]
    
    prefixSum[row][col]
    = prefixSum[row][col-1] + 
      prefixSum[row-1][col] - 
      prefixSum[row-1][col-1] + 
      matrix[row][col]
  */
  ```

- 如何求从(1,1)点出发到(2,2)点的这块矩形中所有格的值的和？

  ```typescript
  /**
    我们观察发现(2,1)到(2,2)组成的矩形中所有格的值的和可以通过如下获得：
    1. 先求解从(0,0)出发到(2,2)这个大矩形的和
    2. 求解(0,0)出发到(2,0)这个小矩形的和
    3. 求解(0,0)出发到(1,2)这个小矩形的和
    最后我们通过公式求解：
    sum([1,1], [2,2]) 
    = sum([0,0],[2,2]) - sum([0,0],[2,0]) - sum([0,0],[1,2]) + sum([0,0],[1,0])
    
   由于这里(0,0)到(1,0)这块矩形重复减去了两次所以应该加回来
   
   而这里的从(0,0)出发的点到(i,j)所围成的矩形，我们可以通过prefixSum[i][j]直接获取，所以以上公式又变成了
   sum([1,1], [2,2]) 
   = prefixSum[2][2] - prefixSum[2,0] - prefixSum[1,2] + prefixSum[1,0]
   于是求从(1,1)点出发到(2,2)点的这块矩形中所有格的值的和,可以通过前缀和快速求出
  */
  ```

  ```typescript
  /**
    推广开来，求sum([row1,col1], [row2,col2])
    
    sum([row1][col1], [row2,col2])
    = prefixSum[row2][col2] - 
      prefixSum[row2][col1-1] - 
      prefixSum[row1-1][col2] +
      prefixSum[row1-1][col1-1]
  */
  ```

- 越界控制

  ```typescript
  /**
     以上我们发现前缀和prefixSum[row][col]的公式是
      prefixSum[row][col]
      = prefixSum[row][col-1] + 
        prefixSum[row-1][col] - 
        prefixSum[row-1][col-1] + 
        matrix[row][col]
        
      如果col = 0,此时式子
      - prefixSum[row][col-1]就是prefixSum[row][0-1]  = prefixSum[row][-1]越界了
      
      如果row = 0,此时式子
      - prefixSum[row-1][col]就是prefixSum[0-1][col] = prefixSum[-1][col]越界了
      
      如果row = 0 && col = 0，此时式子
      - prefixSum[row-1][col-1]就是prefixSum[-1][-1]越界了
      
      所以我们需要对特殊情况进行越界控制：
      当row = 0或者 col = 0的时候，就从矩阵退化成一维数组了。此时直接使用一维数组的前缀和计算方式即可
      for(let col = 0; col < size; col++) {
        if(col == 0) {
          prefixSum[0][col] = matrix[0][0]
        }else {
        	prefixSum[0][col] = prefixSum[0][col-1] +    matrix[0][col-1]
        }
        
      }
      
      for(let row = 0; row < size; row++) {
        if(row == 0) {
          prefixSum[row][0] = matrix[0][0]
        }else {
        	prefixSum[row][0] = prefixSum[row-1][0] +    matrix[row-1][0]
        }
        
      }
      
  */
  ```
