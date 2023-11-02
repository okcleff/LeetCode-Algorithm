/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
  const result = [];
  const stack = [root];

  while (stack.length) {
    const curr = stack.pop();
    if (!curr) continue;
    
    result.push(curr.val);
    stack.push(...curr.children);
  }
  
  return result.reverse();
};