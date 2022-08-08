/**
 * 假设你有 n 个版本 [1, 2, ..., n]，你想找出导致之后所有版本出错的第一个错误的版本。
 * 示例 1：
输入：n = 5, bad = 4
输出：4
解释：
调用 isBadVersion(3) -> false 
调用 isBadVersion(5) -> true 
调用 isBadVersion(4) -> true
所以，4 是第一个错误的版本。

示例 2：
输入：n = 1, bad = 1
输出：1
 */

var solution = function (isBadVersion) {
  let left = 1;
  let right = n;
  let midVersion;
  while (left <= right) {
    midVersion = parseInt((left + right) / 2);
    if (isBadVersion(midVersion)) {
      right = midVersion - 1;
    } else {
      left = midVersion + 1;
    }
  }
  return left
};

    // return function(n) {
    //     let left = 1, right = n;
    //     while (left < right) { // 循环直至区间左右端点相同
    //         const mid = Math.floor(left + (right - left) / 2); // 防止计算时溢出
    //         if (isBadVersion(mid)) {
    //           // 答案在区间 [left, mid] 中
    //             right = mid; 
    //         } else {// 答案在区间 [mid+1, right] 中
    //             left = mid + 1; 
    //         }
    //     }
    //     // 此时有 left == right，区间缩为一个点，即为答案
    //     return left;
    // };
};

