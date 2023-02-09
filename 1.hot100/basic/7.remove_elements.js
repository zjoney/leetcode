/**
 * 考察：数组
 * @difficulty简单
 * @summary: 27. 移除元素
 * 给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。
 * 不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。
 * 元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素
 * 示例：
 * 输入：nums = [3,2,2,3], val = 3
 * 输出：2, nums = [2,2]
 * 解释：函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。你不需要考虑数组中超出新长度后面的元素。
 * 例如，函数返回的新长度为 2 ，而 nums = [2,2,3,3] 或 nums = [2,2,0,0]，也会被视作正确答案。
 * 
 * 题目理解：
 * 标签：拷贝覆盖
 * 主要思路是遍历数组 nums，每次取出的数字变量为 num，同时设置一个下标 ans
 * 在遍历过程中如果出现数字与需要移除的值不相同时，则进行拷贝覆盖 nums[ans] = num，ans 自增 1
 * 如果相同的时候，则跳过该数字不进行拷贝覆盖，最后 ans 即为新的数组长度
 * 这种思路在移除元素较多时更适合使用，最极端的情况是全部元素都需要移除，遍历一遍结束即可
 * 时间复杂度：O(n)O(n)O(n)，空间复杂度：O(1)O(1)O(1)
 */
var removeElement = function(nums, val) {
  let ans = 0;
  for(const num of nums) {
      if(num != val) {
          nums[ans] = num;
          ans++;
      }
  }
  return ans;
};
const nums=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50], val=9
console.log(removeElement(nums, val));
