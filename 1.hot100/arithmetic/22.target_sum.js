/**
 * 考察:动态规划
 * @difficulty 中等
 * @summary 494. 目标和
 * 给你一个整数数组 nums 和一个整数 target 。向数组中的每个整数前添加 '+' 或 '-' ，然后串联起所有整数，
 * 可以构造一个 表达式 ：例如，nums = [2, 1] ，可以在 2 之前添加 '+' ，
 * 在 1 之前添加 '-' ，然后串联起来得到表达式 "+2-1" 。
 * 返回可以通过上述方法构造的、运算结果等于 target 的不同 表达式 的数目。
 * 
 * 示例一
 * 输入：nums = [1,1,1,1,1], target = 3
 * 输出：5
 * 解释：一共有 5 种方法让最终目标和为 3 。
 * -1 + 1 + 1 + 1 + 1 = 3
 * +1 - 1 + 1 + 1 + 1 = 3
 * +1 + 1 - 1 + 1 + 1 = 3
 * +1 + 1 + 1 - 1 + 1 = 3
 * +1 + 1 + 1 + 1 - 1 = 3
 */
 var findTargetSumWays = function (nums, S) {
	// nums 长度不足以循环时
  if (nums.length < 2) {
    // 考虑正负值的情况
    if (nums[0] !== S && -nums[0] !== S) {
      return 0
    } else {
      return 1
    }
  }
	// 获得nums的总和
  const sum = nums.reduce((sum, cur) => sum + cur, 0)
  // 因为是非负整数数组，如果全部加起来还要比目标小直接返回0
  if (sum < Math.abs(S)) return 0
	// 初始化 dp
  let dp = Array.from({ length: nums.length }, () => new Array(sum * 2 + 1).fill(0))
	// 初始化第一行，考虑 0 的情况
  if (nums[0] === 0) {
    dp[0][sum] = 2
  } else {
    dp[0][sum + nums[0]] = 1
    dp[0][sum - nums[0]] = 1
  }


  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < sum * 2 + 1; j++) {
      // 判断边界情况
      const l = (j - nums[i] < 0) ? 0 : dp[i - 1][j - nums[i]]
      const r = (j + nums[i] > sum * 2) ? 0 : dp[i - 1][j + nums[i]]
			// 转移方程
      dp[i][j] = l + r
			// 如果已经到达了目标位置【最后一行的 S 值】，就可以返回了，可以少循环几次
      if (i === nums.length - 1 && j === S + sum) {
        return dp[i][j]
      }
    }
  }
};