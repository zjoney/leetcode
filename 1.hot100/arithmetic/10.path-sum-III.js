/**
 * 考察：深度优先搜索
 * @difficulty困难
 * @summary:437. 路径总和 III
给定一个二叉树的根节点 root ，和一个整数 targetSum ，求该二叉树里节点值之和等于 targetSum 的 路径 的数目。
路径 不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。
查看images/pathsumIII.jpg
 */
/**
*方法一：
 *首先定义 rootSum(p,val)\textit{rootSum}(p,\textit{val})rootSum(p,val) 表示以节点 ppp 为起点向下且满足路径总和为 valvalval 的路径数目
 *对节点 ppp 求 rootSum(p,targetSum)\textit{rootSum}(p,\textit{targetSum})rootSum(p,targetSum) 时
 *左孩子节点pl求出 rootSum(pl,targetSum−val)，右孩子节点pr=rootSum(pr,targetSum−val)
 */
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
