/**
 * 考察:深度优先、广度优先
 * @difficulty 困难
 * @summary 297.二叉树的序列化与反序列化
 * 序列化是将一个数据结构或者对象转换为连续的比特位的操作，进而可以将转换后的数据存储在一个文件或者内存中，
 * 同时也可以通过网络传输到另一个计算机环境，采取相反方式重构得到原数据。
 * 请设计一个算法来实现二叉树的序列化与反序列化。这里不限定你的序列 / 反序列化算法执行逻辑，
 * 你只需要保证一个二叉树可以被序列化为一个字符串并且将这个字符串反序列化为原始的树结构。
 * 
 * 示例一
 * 如图 images/serdeser.jpg
 * 输入：root = [1,2,3,null,null,4,5]
 * 输出：[1,2,3,null,null,4,5]
 * 
 */
/**
 *
 * @param {TreeNode} root
 * @return {string}
 */
 var serialize = function(root) {
  // 如果节点为空，使用一个特定的字符标识
  if (!root) {
    return 'X';
  }

  // 每次递归都获取左右子树的序列化结果
  const left = serialize(root.left);
  const right = serialize(root.right);

  // 将当前二叉树按照根,左,右的方式拼接
  return `${root.val},${left},${right}`;
};

/**
 *
 * @param {string} data
 * @return {TreeNode}
 */
 var deserialize = function(data) {
    
};