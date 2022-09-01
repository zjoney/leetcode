/**
 * 
 */
var isPalindrome = function (x) {
  debugger;
  // 特殊情况：
  // 如上所述，当 x < 0 时，x 不是回文数。
  // 同样地，如果数字的最后一位是 0，为了使该数字为回文，
  // 则其第一位数字也应该是 0
  // 只有 0 满足这一属性
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }

  let revertedNumber = 0;
  while (x > revertedNumber) {
    revertedNumber = revertedNumber * 10 + x % 10;
    x = Math.floor(x / 10);
  }

  // 当数字长度为奇数时，我们可以通过 revertedNumber/10 去除处于中位的数字。
  return x === revertedNumber || x === Math.floor(revertedNumber / 10);
};
const numer = 67976
console.log(isPalindrome(numer));// 1221->true、12213->false