/**
 * 考察：深度优先
 * @difficulty困难
 * @summary:301. 删除无效的括号
 * 给你一个由若干括号和字母组成的字符串 s ，删除最小数量的无效括号，使得输入的字符串有效。
返回所有可能的结果。答案可以按 任意顺序 返回。

示例 1：
输入：s = "()())()"
输出：["(())()","()()()"]
 */
var removeInvalidParentheses=function(s){
  // BFS广度优先,注意题目中只删除最少括号

  // s在任意位置删除一个括号字符，则形成新的层级
  // 最坏情况就是O(2^len),但是会在删除若干字符后退出
  let level=new Set();
  level.add(s)

  while(true){
      const valid=[...level].filter(str=>isValid(str))
      if(valid.length) return valid;

      // 
      let next_level=new Set();
      for(const str of level){
          for(let i=0;i<str.length;i++){
              if(['(',')'].includes(str[i]))
                  next_level.add(str.slice(0,i)+str.slice(i+1))
          }
      }

      level=next_level;
  }

  // 判定当前括号排列是否合法
  function isValid(s){
      let cnt=0;

      for(const c of s){
          if(c==='(') cnt++;
          if(c===')') cnt--;

          if(cnt<0) return false
      }

      return cnt===0
  }
}