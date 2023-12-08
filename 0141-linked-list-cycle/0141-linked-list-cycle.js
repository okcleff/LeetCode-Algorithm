/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  const valSet = new Set();
  
  while (head) {
    if (valSet.has(head)) return true;
    valSet.add(head);
    head = head.next;
  }
  
  return false;
};