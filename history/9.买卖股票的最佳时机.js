
/**
 * 
 * 考察：动态规划
 * @difficulty简单
 * @description: 121. 买卖股票的最佳时机
 * 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。
返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。

输入：[7,1,5,3,6,4]
输出：5
解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
 */
var maxProfit = function (prices) {
  const len = prices.length;
  //  定义数组
  const dp = new Array(len).fill([0, 0]);
  // 初始化
  dp[0] = [-prices[0], 0]
  for (let i = 1; i < len; i++) {
    dp[i] = [
      Math.max(dp[i - 1][0], -prices[i]),
      Math.max(dp[i - 1][1], prices[i] + dp[i - 1][0])
    ]
  }
  return dp[len - 1][1];
  
};
console.log(maxProfit([7, 1, 5, 3, 6, 4]));