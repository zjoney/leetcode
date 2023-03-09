/**
 * 考察：双指针
 * @difficulty 中等
 * @summary:15. 三数之和
 * 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还 * 满足 nums[i] + nums[j] + nums[k] == 0 。请
 * 你返回所有和为 0 且不重复的三元组。
 * 注意：答案中不可以包含重复的三元组。
 * 
 * 示例 1：
 * 输入：nums = [-1,0,1,2,-1,-4]
 * 输出：[[-1,-1,2],[-1,0,1]]
 * 解释：
 * nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0 。
 * nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0 。
 * nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0 。
 * 不同的三元组是 [-1,0,1] 和 [-1,-1,2] 。
 * 注意，输出的顺序和三元组的顺序并不重要。

 */
var threeSum = function (nums) {
  if (nums.length < 3) {
    return [];
  }
  debugger
  // 从小到大排序
  const arr = nums.sort((a, b) => a - b);
  // 最小值大于 0 或者 最大值小于 0，说明没有无效答案
  if (arr[0] > 0 || arr[arr.length - 1] < 0) {
    return [];
  }
  const n = arr.length;
  const res = [];
  for (let i = 0; i < n; i++) {
    // 如果当前值大于 0，和右侧的值再怎么加也不会等于 0，所以直接退出
    if (nums[i] > 0) {
      return res;
    }
    // 当前循环的值和上次循环的一样，就跳过，避免重复值
    if (i > 0 && arr[i] === arr[i - 1]) {
      continue;
    }
    // 双指针
    let l = i + 1;
    let r = n - 1;
    while (l < r) {
      const temp = arr[i] + arr[l] + arr[r];
      if (temp > 0) {
        r--;
      }
      if (temp < 0) {
        l++;
      }
      if (temp === 0) {
        res.push([nums[i], nums[l], nums[r]]);
        // 跳过重复值
        while (l < r && nums[l] === nums[l + 1]) {
          l++;
        }
        // 同上
        while (l < r && nums[r] === nums[r - 1]) {
          r--;
        }
        l++;
        r--;
      }
    }
  }
  return res;
};
const nums3 = [-1, 0, 1, 2, -1, -4];
// console.log(threeSum(nums3)); // [ [ -1, -1, 2 ], [ -1, 0, 1 ] ]
/**
 * 先对数组排序，对外层循环，注意去重，然后再用左右指针向中间收敛（还是要注意去重）去做two sum
 * 时间复杂度 O(n^2) 空间复杂度 O(1)
 * @param {*} nums 
 * @returns 
 */
var threeSum2 = function (nums) {
  nums.sort((num1, num2) => num1 - num2);
  console.log('sort', nums.sort((num1, num2) => num1 - num2))
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) return result; // 因为求三数之和为0，如果第一个值已经大于0，那后面不可能有解了，就直接返回结果
    if (i > 0 && nums[i] == nums[i - 1]) continue; // 去重
   
    let left = i + 1;
    console.log('left', left)
    let right = nums.length - 1; //
    //  1-4、-4+-1+2=-3
    //  2-4、-1-1+2=0
    //  3-4、-1+0+1=0
    while (left < right) {
      if (nums[i] + nums[left] + nums[right] == 0) {
        result.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] == nums[left + 1]) left++; // 去重
        while (left < right && nums[right] == nums[right - 1]) right--; // 去重
        left++;
        right--;
      }
      else if (nums[i] + nums[left] + nums[right] < 0) left++;// 三数之和小于0，左指针向右移动

      else if (nums[i] + nums[left] + nums[right] > 0) right--; // 三数之和大于0，右指针向左移动
    }
  }
  return result;
};
const nums1 = [-1, 0, 1, 2, -4];
console.log(threeSum2(nums1))