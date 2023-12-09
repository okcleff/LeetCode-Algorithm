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

var insertGreatestCommonDivisors = function(head) {
  const gcd = (a, b) => {
    if (!b) return a;
    return gcd(b, a % b);
  }

  const answer = head;
  let currNode = head;
  
  while (currNode && currNode.next) {
    currNode.next = new ListNode(gcd(currNode.val, currNode.next.val), currNode.next);
    currNode = currNode.next.next;
  }
        
  return head;
};