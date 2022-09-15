/**
 * 考察: 哈希集/数组
 * @difficulty中等
 * @summary:128. 最长连续序列
 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。
请你设计并实现时间复杂度为 O(n) 的算法解决此问题。
示例 1：
输入：nums = [100,4,200,1,3,2]
输出：4
解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。

 */
var longestConsecutive = function (nums) {
  debugger;
  // 使用Set结构，方便查找与删除；
  let num_set = new Set();
  for (const num of nums) {
    num_set.add(num);
  }

  let longestStreak = 0;

  for (const num of num_set) {
    // 从最小的开始查找
    // 从没有比自己小1的数开始查找连续序列
    // 这样可以单向处理
    if (!num_set.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;
      // 开始逐步生长
      while (num_set.has(currentNum + 1)) {
        currentNum += 1;
        currentStreak += 1;
      }

      longestStreak = Math.max(longestStreak, currentStreak);
    }
  }
  return longestStreak;
}
const nums = [100, 4, 200, 3, 2];
console.log(longestConsecutive(nums)); // 3
// longestConsecutive(nums)