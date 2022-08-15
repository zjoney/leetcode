
/**
 * 
 * 考察：动态规划
 * @difficulty困难
 * @description: 72. 编辑距离
 * 给你两个单词 word1 和 word2， 请返回将 word1 转换成 word2 所使用的最少操作数  。
你可以对一个单词进行如下三种操作：
插入一个字符
删除一个字符
替换一个字符

栗子:
输入：word1 = "horse", word2 = "ros"
输出：3
解释：
horse -> rorse (将 'h' 替换为 'r')
rorse -> rose (删除 'r')
rose -> ros (删除 'e')
 */
var minDistance = function (word1, word2) {
  const m = word1.length;
  const n = word2.length;
  // 初始化
  const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
  // 初始化第一行、第一列
  for (let j = 1; j < n; j++) dp[0][j] = dp[0][j - 1] + 1;
  for (let i = 1; i < m; i++) dp[i][0] = dp[i - 1][0] + 1;
  // 填充数组
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
    }
  }
  return dp[m - 1][n - 1];
}
console.log(minDistance('rose', 'horse')); //3