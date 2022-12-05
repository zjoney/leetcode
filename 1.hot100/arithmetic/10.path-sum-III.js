/**
 * 考察：深度优先搜索
 * @difficulty困难
 * @summary:437. 路径总和 III
给定一个二叉树的根节点 root ，和一个整数 targetSum ，求该二叉树里节点值之和等于 targetSum 的 路径 的数目。
路径 不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。
images/pathsumIII.jpg
 */
// 方法一：
var pathSum = function(root, targetSum) {
  if(!root) return 0
  let curNode = dfs(root,targetSum)
  let leftNode = pathSum(root.left,targetSum)
  let rightNode = pathSum(root.right,targetSum)
  return curNode+leftNode+rightNode
}

const dfs = function(root,targetSum){
  if(!root) return 0
  let res = 0
  if(root.val===targetSum) res++
  res+=dfs(root.left,targetSum-root.val)
  res+=dfs(root.right,targetSum-root.val)
  return res
}
