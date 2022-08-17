/**
 * 
 * 考察：哈希表+Map
 * @difficulty中等
 * @description: 454. 四数相加 II
给你四个整数数组 nums1、nums2、nums3 和 nums4 ，数组长度都是 n ，请你计算有多少个元组 (i, j, k, l) 能满足：
0 <= i, j, k, l < n
nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0

示例:
输入：nums1 = [1,2], nums2 = [-2,-1], nums3 = [-1,2], nums4 = [0,2]
输出：2
解释：
两个元组如下：
1. (0, 0, 0, 1) -> nums1[0] + nums2[0] + nums3[0] + nums4[1] = 1 + (-2) + (-1) + 2 = 0
2. (1, 1, 0, 0) -> nums1[1] + nums2[1] + nums3[0] + nums4[0] = 2 + (-1) + (-1) + 0 = 0

分析：
1. 暴力法：四层循环，时间复杂度O(n^4)
2. 哈希表：两层循环，将两个数组的和存入哈希表，时间复杂度O(n^2)
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {

};
console.log(fourSumCount([1,2],[3,4],[5,6],[7,8]));// 1