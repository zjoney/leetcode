## 介绍

近期整理了一下高频的前端面试题，分享给大家一起来学习。如有问题，欢迎指正！

# 1. 实现一个深克隆 deepClone

需要实现一个深克隆函数，可以对JS的对象进行深克隆，避免克隆后的对象引用原来的对象。普通版本只要考虑对象中的String和Number就可以了，但是有的进阶版本会让你考虑Date，循环引用，和正则表达等类型。

```js
const deepClone = function(obj, map = new Map()) {
  if (!obj) return obj
  if (map.has(obj)) { // 判断是否循环引用
    return map.get(obj) 
  }

  let newObj
  if (Object.prototype.toString.call(obj) == "[object Object]") {
    newObj = {}
    map.set(obj, newObj);
    for (let key in obj) {
      let val = obj[key]
      newObj[key] = deepClone(val, map)
    }
  } else if (Object.prototype.toString.call(obj) == "[object Array]") {
    newObj = []
    map.set(obj, newObj);
    for (let key in obj) {
      let val = obj[key]
      newObj[key] = deepClone(val, map)
    }
  } else if (Object.prototype.toString.call(obj) == "[object Function]") {
    newObj = obj.clone() 
  } else if (obj.constructor === Object.prototype.toString.call(obj) == "[object Date]") {
    newObj = new Date(obj)
  } else {
    newObj = obj
  }

  return newObj
}
console.log(deepClone(1)) // 1
console.log(deepClone(null)) // null
console.log(deepClone(undefined)) // undefined
console.log(deepClone([1, 2, 3]))
console.log(deepClone({ a: new Date(), b: null, c: 123, d: [1,2,3] }))
const a = {
  b: {
    c: null,
  },
};
a.b.c = a;
console.log(deepClone(a))
```

# 2. 实现一个防抖函数 debounce

实现一个防抖函数，触发事件后n秒后才能执行函数，如果在n秒内触发了事件，则会重新计算执行时间。防抖的重点在于清零。在一系列相同的操作后只执行一次。使用场景有：

1.  避免用户登录，发送短信按钮点击太快
2.  调整浏览器窗口大小事，避免resize次数过多
3.  文本编辑器实时保存，任何更改操作之后，最后才会保存
4.  搜索框输入，只在用户最后一次输入完，才执行搜索请求

```js
const debounce = function(fn, timeout = 300) {
  let timer = null

  return function(...args) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, timeout)
  }
}
function saveInput(id){
  console.log('Saving data', id);
}
const testDebounce = debounce((id) => saveInput(id));
setInterval(() => {
  testDebounce(12)
}, 250)

```

# 3. 实现一个节流函数 throttle

实现一个节流函数，连续触发事件但是在n秒中只执行一次函数。即不管你在指定时间内触发多少次函数，但是它只执行一次事件。节流在于加锁，和服务器的rate limiter相似。使用场景有：

1.  scroll滚动事件每隔一秒计算一次位置
2.  浏览器播放事件，每隔一秒计算一次进度信息
3.  input搜索展示下拉列表，每隔1秒发送一次请求

```js
const throttle = function(fn, timeout = 500) {
  let waiting = false

  return function(...args) {
    if (waiting) return
    waiting = true
    fn.apply(this, args)
    setTimeout(() => {
      waiting = false
    }, timeout)
  }
}
function saveInput(id){
  console.log('Saving data', id);
}
const testThrottle = throttle((id) => saveInput(id));
setInterval(() => {
  testThrottle(15)
}, 250)
```

# 4. 手写 promise all

手写一个类似 Promise.all 的方法，全部异步任务完成后，一起返回。

```js
const promiseAll = function(inputs) {
  return new Promise((resolve, reject) => {
    let length = inputs.length
    let count = 0
    let data = []
    for (let fn of inputs) {
      fn.apply(this)
      .then((res) => {
        count++
        data.push(res)
        if (count === length) resolve(data)
      }).catch((err) => {
        reject(err)
      })
    }
  })
}
const request = function(id) {
  return new Promise((resolve, reject) => {
     let timeout = Math.floor(Math.random() * 1000) + 500
       setTimeout(() => {
           resolve(`${id}: ${timeout}ms`);
       }, timeout);
  })
}
let inputs = []
for (let i = 0; i < 22; i++) {
  inputs.push(() => request(i))
}
promiseAll(inputs)
.then((res) => {
  console.log('promiseAll', res)
})
```

# 5. 手写 promise race

手写一个类似 Promise.race 的方法，返回第一个异步结果

```js
const promiseRace = function(inputs) {
  return new Promise((resolve, reject) => {
    for (let fn of inputs) {
      fn.apply(this)
      .then((res) => {
        resolve(res)
      }).catch((err) => {
        reject(err)
      })
    }
  })
}
promiseRace(inputs)
.then((res) => {
  console.log('promiseRace', res)
})
```

# 6. 实现 promise scheduler

手写一个Promise并发的控制器。假设需要执行N个异步任务，这个控制器可以并发执行M个异步任务，不能同时执行超过M个任务，执行完一个任务再继续执行下一个，直到全部执行完毕。

```js
const Scheduler = function(max = 3) {
  let currentJobs = 0
  let queue = []

  function start() {
    if (queue.length === 0 || currentJobs >= max) return

    currentJobs++
    let [fn, resolve, reject] = queue.shift()
    fn.apply(this).then((res) => {
      currentJobs--
      start()
      resolve(res)
    }).catch((err) => {
      currentJobs--
      start()
      reject(err)
    })
  }

  return function(fn) {
    return new Promise((resolve, reject) => {
      queue.push([fn, resolve, reject])
      start()
    })
  }
}
const scheduler = Scheduler(6)
const request = function(id) {
  return new Promise((resolve, reject) => {
     let timeout = Math.floor(Math.random() * 1000) + 500
       setTimeout(() => {
           resolve(`${id}: ${timeout}ms`);
       }, timeout);
  })
}
for (let i = 0; i < 25; i++) {
  scheduler(() => request(i))
    .then((res) => {
    console.log('scheduler', res)
  })
}
```

# 7. 手写 my reduce

手写一个类似 Array.reduce 的方法

```js
Array.prototype.myReduce = function(fn, initialValue) {
  let nums = this
  let res = 0
  if (initialValue) res = initialValue

  for (let i = 0; i < nums.length; i++) {
    res = fn(res, nums[i])
  }

  return res
}
let arr = [1,2,3,4,3,1]
let myReduceRes = arr.myReduce((a, b) => {
  return a + b
})
let reduceRes = arr.reduce((a, b) => {
  return a + b
})
console.log('myReduce', myReduceRes)
console.log('reduce', reduceRes)
```

# 8. 手写 my AJAX 

手写一个AJAX，其实就是如何使用 XMLHttpRequest

```js
function ajax(method, url, body = {}) {
  return new Promise((resolve, reject) => {
    // 0. create XMLHttpRequest instance
    let xhr = new XMLHttpRequest()
    // 1. define request
    xhr.open(method, url, true)
    // xhr.setRequestHeader("Content-Type", "application/json");
    // 2. define response
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        let res = xhr.response
        resolve(res)
      } else {
        reject()
      }
    }
    // 3. define error
    xhr.onerror = () => {
      reject()
    }
    // 4. send request
    xhr.send() // get
    // xhr.send(body) // post
  })
}
ajax('GET', 'https://ipv4.icanhazip.com/')
.then((res) => {
  console.log(res)
})
```

# 9. 手写 my instanceof

手写一个 instanceof 函数，涉及到原型链的知识。

```js
const myInstanceof = function(original, target) {
  let proto = original.__proto__
  while (proto) {
    if (proto === target.prototype) {
      return true
    }
    proto = proto.__proto__
  }

  return false
}
const myInstanceofTest = [1,2,3]
console.log(myInstanceof(myInstanceofTest, Array));  // true
console.log(myInstanceof(myInstanceofTest, Object));  // true
console.log(myInstanceof(myInstanceofTest, Function));  // false
```

# 10. 手写 my typeof

手写一个 typeof 的函数。typeof 本身对 Array 和 Object 都分不清，所以尽量使用 Object.prototype.toString.apply，在其它面试问题的时候，也尽量使用这个。

```js
const myTypeof = function(target) {
  let type = Object.prototype.toString.apply(target) // 万能查询类型方法
  type = type.split(' ')[1]
  return type.slice(0, -1).toLowerCase()
}
console.log(myTypeof({}))
console.log(myTypeof([]))
console.log(myTypeof(Function))
console.log(myTypeof(123))
console.log(myTypeof(null))
console.log(myTypeof(''))
console.log(myTypeof(new Date()))
```

# 11. 手写 my new

手写一个 new 函数，涉及到JS class和继承的知识

```js
const myNew = function(fn, ...args) {
  let context = Object.create(fn.prototype)
  let res = fn.apply(context, args)
  // 如果 res 是 undefined 或者，没有返回的东西，则返回 context
  if (res instanceof Object) {
    return res
  } else {
    return context
  }
}
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const person = myNew(Person, 'fl', 32)
console.log(person)
```

# 12. 手写 my call

手写一个 call 函数

```js
Function.prototype.myCall = function(context, ...args) {
  let obj = context || window
  obj.fn = this
  let res = obj.fn(...args)
  delete obj.fn
  return res
}

```

# 13. 手写 my apply

手写一个 apply 函数，和 call 几乎一样，只是参数不一样。

```js
Function.prototype.myApply = function(context, arr) {
  // 定义 this，上下文
  let obj = context || window
  // 函数放进上下文的fn中
  obj.fn = this
  // 执行 fn，这样做fn就可以看到context了，闭包
  let res = obj.fn(...arr)
  // 要删除 fn
  delete obj.fn
  return res
}
const obj = {
  name: 'alex'
}
const myApplyTestFn = function(a, b) {
  console.log(a,b)
  console.log(this.name)
}
console.log('myCall', myApplyTestFn.myCall(obj, 1,2))
console.log('myApply', myApplyTestFn.myApply(obj, [1,2]))
```

# 14. 手写 my bind

手写一个 bind 函数，和 call 和 apply 不一样的是 bind 会返回一个函数。

```js
Function.prototype.myBind = function(context) {
  const fn = this
  const args = [...arguments].slice(1)

  return function(...innerArgs) {
    let moreArgs = [...args, ...innerArgs]
    return fn.apply(context, moreArgs)
  }
}
const context = {
  name: 'alex'
}
const myBindTestFn = function(name, age, school){
  console.log(name) // 'Ann'
  console.log(age) // 32
  console.log(school) // '126'
}
let myBindFn = myBindTestFn.myBind(context, 'Ann')
myBindFn(32, '126')
```
