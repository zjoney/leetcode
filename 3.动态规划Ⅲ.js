/**
 * DymaticPlan 高级 左上角走到右下角，编辑距离
 * 不同路径 
 * m * n方格子
 * var arr = [
 * [1,3,1],
 * [2,5,1],
 * [4,6,1]
 * ]
 */
 var minDistance = (word1, word2) => {
  let n1 = word1.length;
  let n2 = word2.length;
  const dp = new Array(n1 + 1).fill(0).map(() => new Array(n2 + 1).fill(0));
  // dp[0][0...n2]的初始值
  for (let j = 1; j <= n2; j++)
    dp[0][j] = dp[0][j - 1] + 1;
  // dp[0...n1][0] 的初始值
  for (let i = 1; i <= n1; i++) dp[i][0] = dp[i - 1][0] + 1;
  // 通过公式推出 dp[n1][n2]
  for (let i = 1; i <= n1; i++) {
    for (let j = 1; j <= n2; j++) {
      // 如果 word1[i] 与 word2[j] 相等。第 i 个字符对应下标是 i-1
      if (word1.charAt(i - 1) == word2.charAt(j - 1)) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(Math.min(dp[i - 1][j - 1], dp[i][j - 1]), dp[i - 1][j]) + 1;
      }
    }
  }
  return dp[n1][n2]; 
};

console.log('min', minDistance('red', 'apple'));// n1=3 n2=5