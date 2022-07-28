
/**
 * DymaticPlan 初级 左上角走到右下角路径
 * 不同路径 
 * m * n方格子
 */
 var uniquePath = (m, n) => {
  // 1定义数组含义
  let dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
  // 2 找出关系数组元素间的关系式
  for (let i = 0; i < m; i++) {
    dp[i][0] = 1;
  }
  for (let i = 0; i < n; i++) {
    dp[0][i] = 1;
  }
  // 3找出初始值
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
}
console.log(uniquePath(3, 7)) // 28