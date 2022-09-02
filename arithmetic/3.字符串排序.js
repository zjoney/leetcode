
/**
 * 考察：回溯
 * @difficulty中等
 * @summary:剑指 Offer 38. 字符串的排列
 * 输入一个字符串，打印出该字符串中字符的所有排列。
你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。

示例:
输入：s = "abc"
输出：["abc","acb","bac","bca","cab","cba"]

 */
var permutation = function (s) {
    const rec = [], vis = [];
    const n = s.length;
    const arr = Array.from(s).sort();
    const perm = [];
    const backtrack = (arr, i, n, perm) => {
        if (i === n) {
            rec.push(perm.toString());
            return;
        }
        for (let j = 0; j < n; j++) {
            if (vis[j] || (j > 0 && !vis[j - 1] && arr[j - 1] === arr[j])) {
                continue;
            }
            vis[j] = true;
            perm.push(arr[j]);
            backtrack(arr, i + 1, n, perm);
            perm.pop();
            vis[j] = false;
        }
    }

    backtrack(arr, 0, n, perm);
    const size = rec.length;
    const recArr = new Array(size).fill(0);
    for (let i = 0; i < size; i++) {
        recArr[i] = rec[i].split(',').join('');
    }
    return recArr;
};
const s = "abc";
console.log(permutation(s));// ["abc","acb","bac","bca","cab","cba"]