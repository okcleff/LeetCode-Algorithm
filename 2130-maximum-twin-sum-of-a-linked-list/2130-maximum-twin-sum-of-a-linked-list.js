/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
  const nums = [];
  
  
  const countLength = (node) => {
    nums.push(node.val);
    if (!node.next) return;
    countLength(node.next);
  }
  
  countLength(head);

  let answer = -Infinity;
  
  for (let i = 0; i < nums.length - 1; i++) {
    answer = Math.max(answer, nums[i] + nums[nums.length - i - 1]);
  }
  
  return answer;
};