/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  let current = '', reverse = ''
  while(head) {
    current += head.val;
    reverse = head.val + reverse;
    head = head.next;
  }
  return current === reverse;
};