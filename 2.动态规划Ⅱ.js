
/**
 * DymaticPlan 中级 左上角走到右下角，找最小路径之和
 * 不同路径 
 * m * n方格子
 * var arr = [
 * [1,3,1],
 * [2,5,1],
 * [4,6,1]
 * ]
 */
 const minPathSum = (arr) => {
  let m = arr.length;
  let n = arr[0].length;
  if (m <= 0 || n <= 0) {
    return 0;
  }

  const dp = new Array(m).fill(0).map(() => new Array(0).fill(n)); // 
  // 初始化
  dp[0][0] = arr[0][0];
  // 初始化最左边的列
  for (let i = 1; i < m; i++) {
    dp[i][0] = dp[i - 1][0] + arr[i][0];
  }
  // 初始化最上边的行
  for (let i = 1; i < n; i++) {
    dp[0][i] = dp[0][i - 1] + arr[0][i];
  }
  // 推导出 dp[m-1][n-1]
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + arr[i][j];
    }
  }
  return dp[m - 1][n - 1];
}

console.log(minPathSum([2,4,5], [9,5,7])) // 18