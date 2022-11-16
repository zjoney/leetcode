/**
 * 考察：优先队列、分治
 * @difficulty 困难
 * @summary:23. 合并K个升序链表
给你一个链表数组，每个链表都已经按升序排列。
请你将所有链表合并到一个升序链表中，返回合并后的链表。

示例 1：
输入：lists = [[1,4,5],[1,3,4],[2,6]]
输出：[1,1,2,3,4,4,5,6]
解释：链表数组如下：
[
  1->4->5,
  1->3->4,
  2->6
]
将它们合并到一个有序链表中得到。
1->1->2->3->4->4->5->6
 */
var mergeKLists = function(lists) {
  function transform(l, arr) {
      while(l) {
          arr.push(l.val);
          l = l.next;
      }
  }

  let arr = [];
  let res = new ListNode(null);

  lists.map(item => transform(item, arr));
  arr.sort((a, b) => a - b);
  for (let i = arr.length - 1; i >= 0; i--) {
      let temp = new ListNode(null);
      res.val = arr[i];
      temp.next = res;
      res = temp;
  }

  return res.next;
};
console.log(mergeKLists([[1,4,5],[1,3,4],[2,6]])); // 1->1->2->3->4->4->5->6
;
