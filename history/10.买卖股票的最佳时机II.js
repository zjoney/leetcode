/**
 * 考察：动态规划
 * @difficulty中等
 * @description: 122. 买卖股票的最佳时机 II
 * 给你一个整数数组 prices ，其中 prices[i] 表示某支股票第 i 天的价格。
在每一天，你可以决定是否购买和/或出售股票。你在任何时候 最多 只能持有 一股 股票。你也可以先购买，然后在 同一天 出售。
返回 你能获得的 最大 利润 。

输入：prices = [7,1,5,3,6,4]
输出：7
解释：在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5 - 1 = 4 。
     随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6 - 3 = 3 。
     总利润为 4 + 3 = 7 。
题目理解：
分别求出dp[i][0]+dp[i][1], dp[i][0]：第i天不持有股票的最大利润
dp[i][1]：第i天持有股票的最大利润
 */

var maxProfit = function (prices) {
  const n = prices.length;
  const dp = new Array(n).fill(0).map(v => new Array(2).fill(0));
  dp[0][0] = 0, dp[0][1] = -prices[0];
  for (let i = 1; i < n; ++i) {
    /**
     * dp[i][0] 状态方程表示第i天不持有股票的最大利润。
     *    分别是前一天已经没股票dp[i-1][0]和前一天结束时候有股票接着卖掉dp[i-1][1]+prices[i]两种情况
     * dp[i][1] 状态表示第i天持有股票的最大利润。
     *   分别是前一天已经有股票dp[i-1][1]和前一天结束时候没股票接着买入dp[i-1][0]-prices[i]两种情况
     */
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
  }
  return dp[n - 1][0];
};
console.log(maxProfit([7, 1, 5, 3, 6, 4])); //7
