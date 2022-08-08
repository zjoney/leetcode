/**
 * 数组嵌套
 * 索引从 000 开始长度为 N 的数组 A，包含 000 到 N−1N - 1N−1 的所有整数。找到最大的集合 S 并返回其大小，其中 S[i]=A[i],A[A[i]],A[A[A[i]]],...S[i] = {A[i], A[A[i]], A[A[A[i]]], ... }S[i]=A[i],A[A[i]],A[A[A[i]]],... 且遵守以下的规则。
假设选择索引为 i 的元素 A[i]A[i]A[i] 为 S 的第一个元素，S 的下一个元素应该是 A[A[i]]A[A[i]]A[A[i]]，之后是 A[A[A[i]]]A[A[A[i]]]A[A[A[i]]] ... 以此类推，不断添加直到 S 出现重复的元素

输入: A = [5,4,0,3,1,6,2]

输出: 4

解释: 
A[0] = 5, A[1] = 4, A[2] = 0, A[3] = 3, A[4] = 1, A[5] = 6, A[6] = 2.

其中一种最长的 S[K]:
S[0] = {A[0], A[5], A[6], A[2]} = {5, 6, 2, 0}
 */
 var arrayNesting = function(arr) {
  let initVal = 0, len = arr.length;
  for (let i = 0; i < len; ++i) {
      let count = 0;
      while (arr[i] < len) {
          const num = arr[i];
          arr[i] = len;
          i = num;
          ++count;
      }
      initVal = Math.max(initVal, count);
  }
  return initVal;
};
// test 
const arr = [5,4,0,3,1,6,2];
console.log(arrayNesting(arr))