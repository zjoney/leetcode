/**
 * 考察：二分查找法
 * @difficulty 简单
 * @summary:617. 合并二叉树
 * 给你两棵二叉树： root1 和 root2 。

想象一下，当你将其中一棵覆盖到另一棵之上时，两棵树上的一些节点将会重叠（而另一些不会）。你需要将这两棵树合并成一棵新二叉树。合并的规则是：如果两个节点重叠，那么将这两个节点的值相加作为合并后节点的新值；否则，不为 null 的节点将直接作为新二叉树的节点。
返回合并后的二叉树。

注意: 合并过程必须从两个树的根节点开始
示例1：images/merge_binary_tree.jpg
输入：root1 = [1,3,2,5], root2 = [2,1,3,null,4,null,7]
输出：[3,4,5,5,4,null,7]

 */
/**
 * DFS
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
 var mergeTrees = function (root1, root2) {
  // 如果一棵树有，另一棵树没有，接上去
  if (root1 == null) return root2;
  if (root2 == null) return root1;
  // 两棵树都有的节点，叠加节点值
  root1.val += root2.val;
  // 递归合并左右子树
  root1.left = mergeTrees(root1.left, root2.left);
  root1.right = mergeTrees(root1.right, root2.right);
  return root1;
};