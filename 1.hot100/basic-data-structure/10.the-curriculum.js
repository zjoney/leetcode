/**考察：拓扑排序
 * @difficulty 中等
 * @summary:207. 课程表
 * 你这个学期必须选修 numCourses 门课程，记为 0 到 numCourses - 1 。
在选修某些课程之前需要一些先修课程。 先修课程按数组 prerequisites 给出，其中 prerequisites[i] = [ai, bi] ，表示如果要学习课程 ai 则 必须 先学习课程  bi 。
例如，先修课程对 [0, 1] 表示：想要学习课程 0 ，你需要先完成课程 1 。
请你判断是否可能完成所有课程的学习？如果可以，返回 true ；否则，返回 false 。

示例 1：
输入：numCourses = 2, prerequisites = [[1,0]]
输出：true
解释：总共有 2 门课程。学习课程 1 之前，你需要完成课程 0 。这是可能的。
题目理解：
 -示例：n = 6，先决条件表：[[3, 0], [3, 1], [4, 1], [4, 2], [5, 3], [5, 4]]
 -课 0, 1, 2 没有先修课，可以直接选。其余的课，都有两门先修课。
 -我们用有向图来展现这种依赖关系（做事情的先后关系）
image/10.the-curriculum.png
这种叫 有向无环图，把一个 有向无环图 转成 线性的排序 就叫 拓扑排序。


 */
var canFinish = function(numCourses, prerequisites) {

};
const numCourses = 2, prerequisites = [[1,0]]
console.log(canFinish(numCourses, prerequisites));
