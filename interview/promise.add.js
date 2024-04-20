// by Gui
// Promise.prototype.add = function (promise) {
//   return Promise.resolve(Promise.all([this, promise]))
// }
// by zj
Promise.prototype.add = function(promise) {
  return this.then((values) => {
    return Promise.all([values, promise])
  });
};

var p1 = new Promise((resolve) => {
  // console.log('p1');
  resolve('p1')
})
var p2 = new Promise((resolve) => {
  // console.log('p2');
  resolve('p2')
})
var p3 = new Promise((resolve) => {
  // console.log('p3');
  resolve('p3')
})
var p4 = new Promise((resolve) => {
  // console.log('p4');
  resolve('p4')
})
p1.add(p2).add(p3).add(p4).then((res) => {
  // p1.add(p2).then((res) => {
  console.log('out', res,)  // 打印出来res = ['p1','p2','p3','p4']
})
// 基础柯里化
function add(a, b) {
  return Array.of(a).concat(b);
}
// es6 实现柯里化
function curry6(fn) {
  return function curriedFn(...args) {
    if (args.length < fn.length) {
      return function () {
        return curriedFn(...args.concat(Array.from(arguments)));
      };
    }

    return fn(...args);
  };
}

const res6 = curry6(add)(1)(2)
// console.log('基础', res6)
