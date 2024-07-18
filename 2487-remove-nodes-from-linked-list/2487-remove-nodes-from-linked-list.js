/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeNodes = function(head) {
  if (head === null) return null;
  
  head.next = removeNodes(head.next);
  return head.next !== null && head.val < head.next.val ? head.next : head;
};