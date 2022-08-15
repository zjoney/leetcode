
/**
 * 考察：动态规划
 * @difficulty中等
 * @description: 剑指 Offer II 099. 最小路径之和
 * 给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
说明：一个机器人每次只能向下或者向右移动一步。
 * 输入：grid = [[1,3,1],[1,5,1],[4,2,1]]
输出：7
解释：因为路径 1→3→1→1→1 的总和最小。
 */
var minPathSum = function (arr) {
  const m = arr.length;
  const n = arr[0].length;
  const dp = new Array(m).fill(0).map(()=>new Array(n).fill(0));
  //  初始化第一行、第一列
  for(let j=1; j<n; j++) dp[0][j] = 1
  for(let i=1; i<m; i++) dp[i][0] = 1
  // 找对关系，填充数组

};
console.log(minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]]));// 7