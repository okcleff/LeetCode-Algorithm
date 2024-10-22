/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
  let count = 0;
  
  let start = list1;
  while (count < a - 1) {
    start = start.next;
    count++;
  }
    
  let end = start;
  while (count < b) {
    end = end.next;
    count ++;
  }
    
  let middle = list2;
  while (middle.next !== null) {
    middle = middle.next;
  }
    
  middle.next = end.next;
  start.next = list2;

  return list1;
};