/**
 * 考察：BFS+广度优先
 * @difficulty困难
 * @description: 127. 单词接龙
 * 字典 wordList 中从单词 beginWord 和 endWord 的 转换序列 是一个按下述规格形成的序列 beginWord -> s1 -> s2 -> ... -> sk：

每一对相邻的单词只差一个字母。
 对于 1 <= i <= k 时，每个 si 都在 wordList 中。注意， beginWord 不需要在 wordList 中。
sk == endWord
给你两个单词 beginWord 和 endWord 和一个字典 wordList ，返回 从 beginWord 到 endWord 的 最短转换序列 中的 单词数目 。如果不存在这样的转换序列，返回 0 。
示例：
输入：beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
输出：5
解释：一个最短转换序列是 "hit" -> "hot" -> "dot" -> "dog" -> "cog", 返回它的长度 5。
题目理解：
从起点词出发，变成n次,变成终点词。
找出邻接关系，比如hit的转换词是*it、h*t、hi*形式，是否存在表里，存在就找下一层的转换词。
要避免重复访问，确定下一个转换词，就把它从单词表删除。

 */
var ladderLength = function (beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);
  const queue = [];
  queue.push([beginWord, 1]);

  while (queue.length) {
    const [word, level] = queue.shift();  // 当前出列的单词
    if (word == endWord) {
      return level;
    }
    for (let i = 0; i < word.length; i++) { // 遍历当前单词的所有字符
      for (let c = 97; c <= 122; c++) { // 对应26个字母
        const newWord = word.slice(0, i) + String.fromCharCode(c) + word.slice(i + 1); // 形成新词
        if (wordSet.has(newWord)) { // 单词表里有这个新词
          queue.push([newWord, level + 1]); // 作为下一层的词入列
          wordSet.delete(newWord);  // 避免该词重复入列
        }
      }
    }
  }
  return 0; // bfs结束，始终没有遇到终点
};
console.log(ladderLength('hit', 'cog', ["hot", "dot", "dog", "lot", "log", "cog"])); // 5
