/**
 * @difficulty中等
 * @description: 62. 不同路径
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。
   机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。
   问总共有多少条不同的路径
 * 输入：m = 3, n = 7
 * 输出：28
 */
var uniquePaths = (m, n) => {
  // 定义数组含义
  const dp = new Array(m).fill(0).map(() => new Array(n).fill(0))
  
  // 初始化最上、最右排
  for(j=0; j<n; j++) dp[0][j] = 1;
  for(i=0; i<m; i++) dp[i][0] = 1;

  // 找出对应关系
  for(i=1; i<m; i++){
    for(j=1; j<n; j++){
     dp[i][j] = dp[i-1][j] + dp[i][j-1]
    }
  }
  return dp[m-1][n-1];
}
console.log(uniquePaths(3, 7));// 28