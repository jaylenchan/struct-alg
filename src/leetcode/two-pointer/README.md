## 双指针技巧

### 滑动窗口

```typescript
/* 滑动窗口算法框架 摘自<<labuladong算法小抄>>*/
function slidingWindow(string s) {
    const window = new Map<string,number>();

    // [left, right) 左闭右开区间
    let left = 0
    let right = 0;
    while (right < s.size()) {
        // c 是将移入窗口的字符
        const c = s[right];
        // 增大窗口
        right++;
        // 进行窗口内数据的一系列更新
        ...

        /*** debug 输出的位置 ***/
        // 注意在最终的解法代码中不要 print
        // 因为 IO 操作很耗时，可能导致超时
       console.log("window: ", left, right);
        /********************/

        // 判断左侧窗口是否要收缩
        while (window needs shrink) {
            // d 是将移出窗口的字符
            const d :string = s[left];
            // 缩小窗口
            left++;
            // 进行窗口内数据的一系列更新
            ...
        }
    }
}
```
