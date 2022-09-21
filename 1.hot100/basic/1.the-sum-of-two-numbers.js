/**
 * 考察：数组 哈希表
 * @difficulty简单
 * @summary: 1.两数之和
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
你可以按任意顺序返回答案。
示例：
输入：nums = [3,2,4], target = 6
输出：[1,2]
 */
var twoSum = function (nums, target) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if (num in obj) {
      return [obj[num], i]
    } else {
      obj[target - num] = i
    }
  }
};
const nums = [2, 7, 11, 15], target = 9;
console.log(twoSum(nums, target));// [0, 1]