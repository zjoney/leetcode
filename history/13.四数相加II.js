/**
 * 
 * 考察：哈希表+分组
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
1. 哈希表+分组：A和B一组，C和D一组。两层循环，将两个数组的和存入哈希表，时间复杂度O(n^2)
 */
var fourSumCount = function (A, B, C, D) {
  debugger
  const mapAB = new Map();
  for (let i of A) {
      for (let j of B) {
          // 统计AB之和及对应的数量
          if (mapAB.has(i + j)) {
              mapAB.set(i + j, mapAB.get(i + j) + 1);
          } else {
              mapAB.set(i + j, 1);
          }
      }
  }
  let res = 0;
  for (let k of C) {
      for (let l of D) {
          // 若A[i] + B[j] === -(C[k] + D[l])，则将数量加入到结果中
          if (mapAB.has(-k - l)) {
              res += mapAB.get(-k - l);
          }
      }
  }
  return res;
};
console.log(fourSumCount([1,2], [-2,-1], [-1,2], [0,2]));// 1