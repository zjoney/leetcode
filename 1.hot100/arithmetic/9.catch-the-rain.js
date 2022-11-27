/**
 * 考察：动态规划
 * @difficulty困难
 * @summary:42. 接雨水
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 * 如图 images/9rainwatertrap.png
 * 输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
输出：6
解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。

 */
// 方法一：动态规划
var trap = function(height) {
  const n = height.length;
  if (n == 0) {
      return 0;
  }

  // 创建两个长度为 n的数组 leftMax和 rightMax
  const leftMax = new Array(n).fill(0);
  const rightMax = new Array(n).fill(0);
  leftMax[0] = height[0];
  rightMax[n - 1] = height[n - 1];

  for (let i = 1; i < n; ++i) {
      leftMax[i] = Math.max(leftMax[i - 1], height[i]);
  }
  for (let i = n - 2; i >= 0; --i) {
      rightMax[i] = Math.max(rightMax[i + 1], height[i]);
  }

  let ans = 0;
  for (let i = 0; i < n; ++i) {
      ans += Math.min(leftMax[i], rightMax[i]) - height[i];
  }
  return ans;
};
const height = [0,1,0,2,1,0,1,3,2,1,2,1]
console.log(trap(height))