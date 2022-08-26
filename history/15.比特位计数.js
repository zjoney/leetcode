/**
 * 考察：
 * @difficulty简单
 * @description: 338. 比特位计数
 * 给你一个整数 n ，对于 0 <= i <= n 中的每个 i ，计算其二进制表示中 1 的个数 ，返回一个长度为 n + 1 的数组 ans 作为答案。
 
输入：n = 2
输出：[0,1,1]
解释：
0 --> 0
1 --> 1
2 --> 10
题目理解：
xxxx
 */
//Brian Kernighan 算法 
var countBits = function(n) {
  // 定义一维数组
  const bits = new Array(n + 1).fill(0);
  for (let i = 0; i <= n; i++) {
    // 填充数组
      bits[i] = countOnes(i);
  }
  return bits
};
// 布莱恩 柯宁汉算法
const countOnes = (x) => {
  let ones = 0;
  while (x > 0) {
      x &= (x - 1);
      ones++;
  }
  return ones;
}
console.log(countBits(2));