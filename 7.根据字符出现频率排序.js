
/**
 * 根据字符出现频率排序
 * @description 给定一个字符串 s ，根据字符出现的 频率 对其进行 降序排序 。一个字符出现的 频率 是它出现在字符串中的次数。
 * @param {*} s 
 * 输入: s = "tree"
输出: "eert"
解释: 'e'出现两次，'r'和't'都只出现一次。
因此'e'必须出现在'r'和't'之前。此外，"eetr"也是一个有效的答案。

示例 2:
输入: s = "cccaaa"
输出: "cccaaa"
解释: 'c'和'a'都出现三次。此外，"aaaccc"也是有效的答案。
注意"cacaca"是不正确的，因为相同的字母必须放在一起。
 */

// function frequencySort(s) {
//   debugger
//   const map = new Map();
//   const length = s.length;
//   for (let i = 0; i < length; i++) {
//     const c = s[i];
//     const frequency = (map.get(c) || 0) + 1;
//     map.set(c, frequency);
//   }
//   const list = [...map.keys()];
//   list.sort((a, b) => map.get(b) - map.get(a));
//   const sb = [];
//   const size = list.length;
//   for (let i = 0; i < size; i++) {
//     const c = list[i];
//     const frequency = map.get(c);
//     for (let j = 0; j < frequency; j++) {
//       sb.push(c);
//     }
//   }
//   return sb.join('');
// };

function frequencySort(s) {
  debugger
  let map = new Map()
  let ans = ''
  for (let w of s) {
    map.set(w, (map.get(w) || 0) + 1)
  }
  console.log(map, 'before');
  map = new Map([...map].sort((a, b) => {
    return b[1] - a[1]
  }))
  console.log(map, 'after');
  for (let [k, v] of map) {
    for (let i = 0; i < v; i++) {
      ans += k
    }
  }
  return ans
};
let str = "abmmKBBt"
console.log(frequencySort(str)); //mmBBabKt