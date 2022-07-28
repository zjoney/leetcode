/**
 * 
 * @param {*} nums1 [4,1,2] 
 * @param {*} nums2  [1,3,4,2]
 * @returns nums1是nums2子集，找出它在nums2中大于 nums2[i]的最大的元素
 */
var nextGreaterElement = function(nums1, nums2) {
  // 一. 找出 i 之后大于 nums2[i] 的第一个元素, 存进对象中
  let stack = []
  let obj = {}
  for (let n of nums2) {
    while(stack.length && n > stack[stack.length - 1]){ // 比栈顶大的
      let f = stack.pop()  
      obj[f] = n
    }
    stack.push(n)
  }
  while (stack.length) {  // 栈中留有元素 说明后面没有比它们大的了, 直接存 -1
    let f = stack.pop()
    obj[f] = -1
  } 
  // 二. 根据对象, 直接得出对应的值
  let res = []
  for (let m of nums1) {
    res.push(obj[m])
  }
  return res
}
// test
let nums1 = [4,1,2], nums2 = [1,3,4,2];
console.log(nextGreaterElement(nums1, nums2))