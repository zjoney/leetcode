/**
 * 考察：动态规划
 * @difficulty中等
 * @summary:22. 括号生成
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 * 输入：n = 3
输出：["((()))","(()())","(())()","()(())","()()()"]
提示1<n<8
 */
var generateParenthesis = function (s) {

  let len = s.length();
  if (len < 2) {
    return s;
  }

  let maxLen = 1, begin = 0;
  // dp[i][j] 表示 s[i..j] 是否是回文串
  const dp = new boolean[len][len];
  // 初始化：所有长度为 1 的子串都是回文串
  for (let i = 0; i < len; i++) {
    dp[i][i] = true;
  }

  const charArray = s.toCharArray();
  // 递推开始
  // 先枚举子串长度
  for (let L = 2; L <= len; L++) {
    // 枚举左边界，左边界的上限设置可以宽松一些
    for (let i = 0; i < len; i++) {
      // 由 L 和 i 可以确定右边界，即 j - i + 1 = L 得
      let j = L + i - 1;
      // 如果右边界越界，就可以退出当前循环
      if (j >= len) {
        break;
      }

      if (charArray[i] != charArray[j]) {
        dp[i][j] = false;
      } else {
        if (j - i < 3) {
          dp[i][j] = true;
        } else {
          dp[i][j] = dp[i + 1][j - 1];
        }
      }

      // 只要 dp[i][L] == true 成立，就表示子串 s[i..L] 是回文，此时记录回文长度和起始位置
      if (dp[i][j] && j - i + 1 > maxLen) {
        maxLen = j - i + 1;
        begin = i;
      }
    }
  }
  return s.substring(begin, begin + maxLen);
};

const n = 3
console.log(generateParenthesis(n)); // ["((()))","(()())","(())()","()(())","()()()"]