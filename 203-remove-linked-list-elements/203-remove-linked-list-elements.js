/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if (!head) return head;
	
    while(head && head.val === val) {
        head = head.next;
    }
    
    let curr = head;
    
    while(curr && curr.next) {
        curr.next.val === val ? curr.next = curr.next.next : curr = curr.next;
    }
    
    return head;
};