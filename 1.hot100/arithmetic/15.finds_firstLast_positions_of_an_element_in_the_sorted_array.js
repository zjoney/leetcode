/**
 * 考察：二分查找法
 * @difficulty 中等
 * @summary:34. 在排序数组中查找元素的第一个和最后一个位置
 * 给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。
如果数组中不存在目标值 target，返回 [-1, -1]。
你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。
 */
var searchRange = function(nums, target) {
  let ans = [-1, -1],
      len = nums.length,
      left = 0,
      right = len - 1;
  
  // 迭代查找右边界
  while (left <= right) {
    debugger
    let mid = left + Math.floor((right - left) / 2);
    
    if (nums[mid] === target && (mid === len - 1 || nums[mid + 1] > target)) {
      ans[1] = mid;
      break;
    }
    
    if (nums[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  // 迭代查找左边界
  left = 0;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    
    if (nums[mid] === target && (mid === 0 || nums[mid - 1] < target)) {
      ans[0] = mid;
      break;
    }
    
    if (nums[mid] >= target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  
  return (ans[0] === -1 || ans[1] === -1) ? [-1, -1] : ans;
};
